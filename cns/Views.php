<?php
/*
	class for displaying html pages and using templates
*/
	namespace Kernel\App\Core;

	class Views
	{
		public static function render($view_name,$views_data)
		{
			if(file_exists('templates/'.$view_name.'.php'))
			{
				include_once 'templates/'.$view_name.'.php';
				require_once 'common_templates/common_templates.php';
			}
			else
			{
				include_once ROOT_DIR.'/error_files/404.html';
			}
		}

		public static function bind($find,$replace,$file)
		{
			// if filename is empty then 404 error is thrown
			
			if(empty($file))
			{
				eader("Cache-Control: public,max-age=31536000");
				header("Keep-Alive: timeout=5, max=500");
				header("Expires:"+date("Y-m-d H:i:s"));
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
				header("Cache-Control: public,max-age=31536000");
				header("Keep-Alive: timeout=5, max=500");
				header("Expires:"+date("Y-m-d H:i:s"));
				header("Server: public,Node Server");
				header("Developed-By: Pounze It-Solution Pvt Limited");
				header("Pragma: public,max-age=31536000");

				$ob = ob_start();
				$stuff = ob_get_contents();

				$filename = ROOT_DIR.'/views/'.$file;
				$handle = fopen($filename, "r");
				$page = fread($handle, filesize($filename));
				fclose($handle);
				echo str_replace($find,$replace, $page);
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
				header("Expires:"+date("Y-m-d H:i:s"));
				header("Server: public,Node Server");
				header("Developed-By: Pounze It-Solution Pvt Limited");
				header("Pragma: public,max-age=31536000");
				include_once ROOT_DIR.'/error_files/404.html';
			}
		}
	}

?>