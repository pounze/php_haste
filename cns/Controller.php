<?php

/*
	this controller class contains all classes and handle request and routing
*/

namespace Kernel\App\Core;

require_once ROOT_DIR.'/cns/Thalamus.php';
require_once ROOT_DIR.'/cns/mySQL.php';
require_once ROOT_DIR.'/cns/MongoDB.php';
require_once ROOT_DIR.'/cns/Orm.php';

use Kernel\App\Core\BlockList;
use Kernel\App\Core\Thalamus;

	class Controller
	{
		public function __construct($input,$files)
		{
			//it controlles the page request and includes all small libraries
			if(isset($input['cortex']) && !empty($input['cortex']))
			{
				$this->RequestHandler($input,$files);
			}
			else
			{
				header("HTTP/1.0 404 Not Found");
				die();
			}
		}

		protected function RequestHandler($input,$files)
		{
			if(isset($files) && !empty($files))
			{
				$input['files'] = $files;
			}
			
			$Cortex_status = Thalamus::fileexits($input);

			if(!$Cortex_status)
			{
				header("HTTP/1.0 404 Not Found");
				die();
			}

			$Cortex_class_status = Thalamus::Neurons($input);

			if(!$Cortex_class_status)
			{
				header("HTTP/1.0 404 Not Found");
				die();
			}
		}

		public function __destruct()
		{
			unset($mongoObject);
			unset($mySQLObject);
		}
	}

?>