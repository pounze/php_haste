<?php
	
	use Kernel\App\RequestRoute\Route;
	use Kernel\App\Core\Views;
	use Kernel\App\Core\Response;


	$route = new Route();

	$route->BlockDirectories(['[\/](search)']);

	if(!$route->checkAuth())
	{
		$msg = "Please enter username and password";
		$route->sendAuthorization($msg);
	}
	else
	{
		$call = $route->Authorization();

		if($call[0] != 'root' || $call[1] != 'kai')
		{
			include 'error_files/401.html';
			die();
		}
	}

	$route->get('/',function()
	{
		return views::render('index',"Hi there its sudeep");
	});

	$route->post('/search',function()
	{
		return "Search page";
	});

	$route->get('/test/$id/working/$name',function($input)
	{
		print_r($input);
	})->middleware(['CheckValidUser','CheckValidAge'])->where(['$id'=>'[0-9]{2}','$name'=>'[a-z]+']);

	$route->get('/done/$id/working/$rollNo','StudentController')->where(['$id'=>'[0-9]{2}','$rollNo'=>'[0-9]+']);
?>