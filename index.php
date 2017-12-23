<?php

namespace Request\Route\Controller;

if(PHP_VERSION < '5.6')
{
	die('Please install php 5.6 or above');
}

require_once 'config/configuration.php';
require_once 'cns/ServerConfig.php';
require_once 'cns/Bootstrap.php';
require_once 'cns/Router.php';
require_once 'cns/Controller.php';
require_once 'cns/Route.php';
require_once 'route/Web.php';
require_once 'cns/Views.php';
require_once 'cns/Response.php';
require_once 'cns/BlockList.php';


use Kernel\App\Core\Bootstrap;
use Kernel\App\Core\Router;
use Kernel\App\Core\Controller;
use Kernel\App\Route\Web;
use Kernel\App\RequestRoute\Route;
use Kernel\App\Core\BlockList;

try
{
	$BlockList = new BlockList();
	$FetchBlockStatus = $BlockList->__init__();
	if(!$FetchBlockStatus)
	{
		header("HTTP/1.0 404 Not Found");
		die();
	}
	unset($BlockList);


	if($config["server"]["maintenance"])
	{
		if(isset($_REQUEST) && !empty($_REQUEST) && isset($_REQUEST['cortex']))
		{
			echo 'Oops, we are sorry server is under maintenance';
		}
		else
		{
			$_REQUEST = json_decode(file_get_contents('php://input'), true);

			if(isset($_REQUEST['cortex']) && !empty($_REQUEST['cortex']))
			{
				echo json_encode(['status'=>false,'msg'=>'Oops, we are sorry server is under maintenance']);
			}
			else
			{
				echo file_get_contents('error_files/maintenance.html');
			}
		}	
	}
	else
	{
		if(isset($_REQUEST) && !empty($_REQUEST) && isset($_REQUEST['cortex']) && $_SERVER['REQUEST_METHOD'] == 'POST')
		{
			$_REQUEST = null;
			$_GET = null;
			$_POST['url'] = $_SERVER['REQUEST_URI'];
			new Controller($_POST,@$_FILES);
		}
		else
		{
			$_REQUEST = json_decode(file_get_contents('php://input'), true);

			if(isset($_REQUEST['cortex']) && !empty($_REQUEST['cortex']) && $_SERVER['REQUEST_METHOD'] == 'POST')
			{
				$_POST = $_REQUEST;
				$_REQUEST = null;
				$_GET = null;
				$_POST['url'] = $_SERVER['REQUEST_URI'];
				new Controller($_POST,@$_FILES);
			}
			else
			{
				$route->execute();
				$route = null;
				unset($route);

				$Bootstrap = new Bootstrap();
				if($_SERVER['REQUEST_METHOD'] === 'POST')
				{
					$_REQUEST = null;
					$_GET = null;
					$_POST['url'] = $_SERVER['REQUEST_URI'];
					$Router = new Router($_POST);
					unset($Router);
				}
				else
				{
					$_REQUEST = null;
					$_POST = null;
					$_GET['url'] = $_SERVER['REQUEST_URI'];
					$Router = new Router($_GET);
					unset($Router);
				}
				$Bootstrap = null;
				unset($Bootstrap);
			}
		}
	}
}
catch(Exception $e)
{
	print_r($e->getTrace());
}
?>