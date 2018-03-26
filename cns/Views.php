<?php
/*
	class for displaying html pages and using templates
*/
	namespace Kernel\App\Core;

	class Views
	{
		public static function render($view_name)
		{
			if(file_exists('templates/'.$view_name.'.php'))
			{
				require_once 'common_templates/common_templates.php';
				include_once 'templates/'.$view_name.'.php';
			}
			else
			{
				include_once ROOT_DIR.'/error_files/404.html';
			}
		}

		public static function bind($Render,$file)
		{
			// if filename is empty then 404 error is thrown
			$date = date("D, m Y H:i:s");
			if(empty($file))
			{
				header("Cache-Control: public,max-age=31536000");
				header("Keep-Alive: timeout=5, max=500");
				header("Expires:$date");
				header("Server: public,Node Server");
				header("Developed-By: Pounze It-Solution Pvt Limited");
				header("Pragma: public,max-age=31536000");
				header("HTTP/1.0 404 Not Found");
				include_once ROOT_DIR.'/error_files/404.html';
				die();
			}

			// if file exists then string are replaced

			if(file_exists(ROOT_DIR.'/views/'.$file))
			{
				header("Keep-Alive: timeout=5, max=500");
				header("Expires:$date");
				header("Server: public,Node Server");
				header("Developed-By: Pounze It-Solution Pvt Limited");
				
			   $fileMTime = filemtime(ROOT_DIR.'/views/'.$file);

			   $headers = apache_request_headers();

			   	if (isset($headers['if-modified-since']) && ($headers['if-modified-since'] == $fileMTime))
			   	{
		            // Client's cache IS current, so we just respond '304 Not Modified'.
		            header('Last-Modified: '.$fileMTime, true, 304);
		        }
		        else
		        {
		            // Image not cached or cache outdated, we respond '200 OK' and output the image.
		            header('Last-Modified: '.$fileMTime, true, 200);
		        }

				$ob = ob_start();
				$stuff = ob_get_contents();

				$filename = ROOT_DIR.'/views/'.$file;
				$handle = fopen($filename, "r");
				$page = fread($handle, filesize($filename));
				fclose($handle);
				$findData = [];
				$replaceData = [];
				foreach($Render as $renderKey=>$renderVal)
				{
					array_push($findData, $renderKey);
					array_push($replaceData, $renderVal);
				}
				echo str_replace($findData,$replaceData, $page);
				$length = ob_get_length();
				header("Content-Length:$length");
				ob_flush(); 
				ob_end_flush(); 
			}
			else
			{
				header('HTTP/1.0 404 Not Found');
				header("Cache-Control: public,max-age=31536000");
				header("Keep-Alive: timeout=5, max=500");
				header("Expires:$date");
				header("Server: public,Node Server");
				header("Developed-By: Pounze It-Solution Pvt Limited");
				header("Pragma: public,max-age=31536000");
				include_once ROOT_DIR.'/error_files/404.html';
			}
		}
	}

?>