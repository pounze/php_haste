<?php

	namespace Kernel\App\RequestRoute;

	class Route
	{
		private $input = [];
		private $globalObject = [];
		private $blockPages = [];
		private $request_uri = [];
		/*
			constructor for setting uri and path
		*/
		public function __construct()
		{
			$this->date = date("D, m Y H:i:s");
			/*
				setting the request uri variables
			*/
			$this->request_uri =  parse_url($_SERVER['REQUEST_URI']);
			$this->request_uri['path'] = str_replace('haste/','', $this->request_uri['path']);

			/*
				This line is checking for request method whether its a post request or any other request using $_REQUEST['REQUEST_METHOD'] globals variables
			*/

			($_SERVER['REQUEST_METHOD'] == "POST" ? $this->input = $_POST : $this->input = $_GET);

			/*
				This is checking for files request whther the request contains files or not
				 if it contains files then it is set to $input['files'] array variables
			*/
			if(isset($_FILES) && !empty($_FILES))
			{
				$this->input['files'] = $_FILES;
			}

			return $this;
		}

		

		/*
			Get request function for getting the get request and setting values and methods in the getURI and getArguments methods
		*/

		public function get($uri,$argument)
		{
			// get method for get routers

	        $this->globalObject[$uri] = [
	            "uri"=>$uri,
	            "request_type"=>"GET",
	            "argument"=>$argument,
	            "regex"=>$uri
	        ];

	        $this->path = $uri;

	        return $this;
		}

		/*
			Post request function for getting the get request and setting values and methods in the getURI and getArguments methods
		*/

		public function post($uri,$argument)
		{
			// post method for post routes

	        $this->globalObject[$uri] = [
	            "uri"=>$uri,
	            "request_type"=>"POST",
	            "argument"=>$argument,
	            "regex"=>$uri
	        ];

	        $this->path = $uri;

	        return $this;
		}

		/*
			Method for middlewares
		*/

		function middlewares($middleware)
	    {   

	      $this->globalObject[$this->path]['middleware'] = $middleware;

	      return $this;

	    }

	    /*
			method for regex uri match
	    */

	    public function where($regex)
	    {
	    	// checking for regular expression match

	      $this->globalObject[$this->path]['regexExp'] = $regex;

	      $this->globalObject[$this->path]['regex'] = $this->globalObject[$this->path]['uri'];

	      foreach($this->globalObject[$this->path]['regexExp'] as $key=>$value)
	      {
	      	$this->globalObject[$this->path]['regex'] = str_replace($key,$this->globalObject[$this->path]['regexExp'][$key] , $this->globalObject[$this->path]['regex']);
	      }

	      return $this;
	    }

	    /*
			method for 401 authentication
	    */

	    public function checkAuth()
		{
			if (!isset($_SERVER['PHP_AUTH_USER']))
			{
				return false;
			}
			else
			{
				return true;
			}
		}

		/*
			method for 401 authentication send headers
		*/

		public function sendAuthorization($msg)
		{
			header('WWW-Authenticate: Basic realm="$msg"');
    		header('HTTP/1.0 401 Unauthorized');
    		header("Cache-Control: public,max-age=31536000");
			header("Keep-Alive: timeout=5, max=500");
			header("Expires:$this->date");
			header("Server: public,Node Server");
			header("Developed-By: Pounze It-Solution Pvt Limited");
			header("Pragma: public,max-age=31536000");
    		include 'error_files/401.html';
			die();
		}

		/*
			method for 401 authentication verification
		*/

		public function Authorization()
		{
			if(isset($_SERVER['PHP_AUTH_PW']) && isset($_SERVER['PHP_AUTH_USER']) && !empty($_SERVER['PHP_AUTH_PW']) && !empty($_SERVER['PHP_AUTH_USER']))
			{	
				return [$_SERVER['PHP_AUTH_USER'],$_SERVER['PHP_AUTH_PW']];
			}
			else
			{
				return false;
			}
		}

		/*
			method to block directories
		*/

		public function BlockDirectories($blockPages)
		{
			if(!is_array($blockPages))
			{
				die('Block directory argument must be array');
			}


			$this->blockPages = $blockPages;
		}

		/*
			final method to execute all the routes and methods
		*/

	    public function execute()
	    {
	    	/*
				checking for the request type whether its a get request or a post request

				if it is set to both get and post then it will be handled by the request global variables

			*/

			$blockPagesLen = sizeof($this->blockPages);

			if($blockPagesLen > 0)
			{
				for($l=0;$l<$blockPagesLen;$l++)
				{
					$blockUrl = $this->blockPages[$l];

					if(preg_match("#^$blockUrl$#", $this->request_uri['path']))
					{
						header('HTTP/1.0 403 Forbidden');
						header("Cache-Control: public,max-age=31536000");
						header("Keep-Alive: timeout=5, max=500");
						header("Expires:$this->date");
						header("Server: public,Node Server");
						header("Developed-By: Pounze It-Solution Pvt Limited");
						header("Pragma: public,max-age=31536000");
						include_once 'error_files/forbidden.html';
						die();
					}
				}
			}

			$requestMethod = $_SERVER['REQUEST_METHOD'];

			$notMatch = 0;

			// iterating to match the uri with the regex

			foreach($this->globalObject as $key=>$value)
			{
				$url = $this->globalObject[$key]['regex'];
				if(preg_match("#^$url$#", $this->request_uri['path']) && $requestMethod == $this->globalObject[$key]['request_type'])
				{
					$requestUriArr = explode('/',$this->request_uri['path']);

					$matchedArr = explode('/', $this->globalObject[$key]["uri"]);

					$matchedArrLen = sizeof($matchedArr);

					for($i=0;$i<$matchedArrLen;$i++)
					{
						$this->input[$matchedArr[$i]] = $requestUriArr[$i];
					}

					// calling the middlewares

					$this->executeMiddlerwares($this->globalObject,$key);

					break;
				}
				else
				{
					$notMatch += 1;
				}
			}

			// if not uri is matched then 404 page not found error is thrown

			if($notMatch == sizeof($this->globalObject))
			{
				header('HTTP/1.0 404 Not Found');
				header("Cache-Control: public,max-age=31536000");
				header("Keep-Alive: timeout=5, max=500");
				header("Expires:$this->date");
				header("Server: public,Node Server");
				header("Developed-By: Pounze It-Solution Pvt Limited");
				header("Pragma: public,max-age=31536000");
				include 'error_files/404.html';
				die();
			}
	    }

	    // method for middlewares

	    private function executeMiddlerwares($globalObject,$key)
	    {
	    	/*
				Checks if the middleware parameter is an array or a variale
			*/
			if(isset($globalObject[$key]['middleware']))
			{
				if(is_array($globalObject[$key]['middleware']))
				{

					/*
						If the argument is an array then finding the length and checking if the middleware

						exists . If it exists then passing the whole request to the middleware.

						Middleware generally filters out the whole request before doing the main task
					*/

					$middlewareLen = sizeof($globalObject[$key]['middleware']);

					for($i=0;$i<$middlewareLen;$i++)
					{

						/*
							***
							**  checking for file existence and class existence
							*
						*/

						if(file_exists('middlewares/'.$globalObject[$key]['middleware'][$i].'.php'))
						{
							include_once 'middlewares/'.$globalObject[$key]['middleware'][$i].'.php';
							
							if(class_exists($globalObject[$key]['middleware'][$i]))
							{
								$input = $_REQUEST;
								if(isset($_FILES) && !empty($_FILES))
								{
									$input['files'] = $_FILES;
								}

								/*
									If the return array value is false the middleware will not allow the 

									request to move further. It will simply terminate the whole reqeust
								*/

								$middlewareOBJ = new $globalObject[$key]['middleware'][$i]();

								$middleware_returnValue = $middlewareOBJ->__init__($input);

								/*
									If middleware return false then the request is stopped here,
									futher execution is stopped here
								*/

								if(!$middleware_returnValue[0])
								{
									unset($middlewareOBJ);
									die(json_encode($middleware_returnValue[1]));
								}
								else
								{
									$this->input[$globalObject[$key]['middleware'][$i]] = $middleware_returnValue[1];
								}


								unset($middlewareOBJ);
							}
							else
							{
								header('HTTP/1.0 404 Not Found');
								header("Cache-Control: public,max-age=31536000");
								header("Keep-Alive: timeout=5, max=500");
								header("Expires:$this->date");
								header("Server: public,Node Server");
								header("Developed-By: Pounze It-Solution Pvt Limited");
								header("Pragma: public,max-age=31536000");
								include 'error_files/404.html';
							}
						}
						else
						{
							header('HTTP/1.0 404 Not Found');
							header("Cache-Control: public,max-age=31536000");
							header("Keep-Alive: timeout=5, max=500");
							header("Expires:$this->date");
							header("Server: public,Node Server");
							header("Developed-By: Pounze It-Solution Pvt Limited");
							header("Pragma: public,max-age=31536000");
							include 'error_files/404.html';
						}
					}
				}
				else
				{
					/***
						If the argument is not an array, then it checks for single middleware file existence and class 

						existence 
					****/

					if(file_exists('middlewares/'.$globalObject[$key]['middleware'].'.php'))
					{
						include_once 'middlewares/'.$globalObject[$key]['middleware'].'.php';
						
						if(class_exists($globalObject[$key]['middleware']))
						{
							$input = $_REQUEST;

							if(isset($_FILES) && !empty($_FILES))
							{
								$input['files'] = $_FILES;
							}

							/*
									If the return array value is false the middleware will not allow the 

									request to move further. It will simply terminate the whole reqeust
								*/

							$middlewareOBJ = new $globalObject[$key]['middleware']();

							$middleware_returnValue = $middlewareOBJ->__init__($input);

							if(!$middleware_returnValue[0])
							{
								unset($middlewareOBJ);
								die(json_encode($middleware_returnValue[1]));
							}
							else
							{
								$this->input[$globalObject[$key]['middleware']] = $middleware_returnValue[1];
							}

							unset($middlewareOBJ);
						}
						else
						{
							header('HTTP/1.0 404 Not Found');
							header("Cache-Control: public,max-age=31536000");
							header("Keep-Alive: timeout=5, max=500");
							header("Expires:$this->date");
							header("Server: public,Node Server");
							header("Developed-By: Pounze It-Solution Pvt Limited");
							header("Pragma: public,max-age=31536000");
							include 'error_files/404.html';
						}
					}
					else
					{
						header('HTTP/1.0 404 Not Found');
						header("Cache-Control: public,max-age=31536000");
						header("Keep-Alive: timeout=5, max=500");
						header("Expires:$this->date");
						header("Server: public,Node Server");
						header("Developed-By: Pounze It-Solution Pvt Limited");
						header("Pragma: public,max-age=31536000");
						include 'error_files/404.html';
					}
				}
			}
			$this->callMethod($globalObject,$key);
	    }

	    private function callMethod($globalObject,$key)
	    {
	    	// checking if the second argument is a method or a string

			/*
				if method then the method is called
			*/

			if(is_callable($globalObject[$key]['argument']))
			{
				echo $globalObject[$key]['argument']($this->input);
			}
			else
			{

				/*
					If the method is a string then parsing it and seeking if the files exists in controllers folders 

					If exists then seeking if the class exists

					If exists then passing the whole request to controllers else 

					404 Page not found is thrown
				*/

				$controller = explode('/', $globalObject[$key]['argument']);
				$controllerLen = sizeof($controller);

				if(file_exists('controllers/'.$globalObject[$key]['argument'].'.php'))
				{
					include_once 'controllers/'.$globalObject[$key]['argument'].'.php';

					if(class_exists($controller[$controllerLen - 1]))
					{
						$obj = new $controller[$controllerLen - 1]($this->input);
						unset($obj);
					}
					else
					{
						header('HTTP/1.0 404 Not Found');
						header("Cache-Control: public,max-age=31536000");
						header("Keep-Alive: timeout=5, max=500");
						header("Expires:$this->date");
						header("Server: public,Node Server");
						header("Developed-By: Pounze It-Solution Pvt Limited");
						header("Pragma: public,max-age=31536000");
						include 'error_files/404.html';
						die();
					}
				}
				else
				{
					header('HTTP/1.0 404 Not Found');
					header("Cache-Control: public,max-age=31536000");
					header("Keep-Alive: timeout=5, max=500");
					header("Expires:$this->date");
					header("Server: public,Node Server");
					header("Developed-By: Pounze It-Solution Pvt Limited");
					header("Pragma: public,max-age=31536000");
					include 'error_files/404.html';
					die();
				}
			}
	    }
	}
?>