# php_haste
PHP light weight framework to allow developers to write less codes Version 1.0
Its the first version of php Haste Framework.
Our target is to provide developer a platform to write less codes and achieve good performance
this version is tested but some modules are not yet deployed

In the next version we will provide 

PHP template engine
PHP thread module for multithreading
php parent child clusters to gain more performance
php gd support to crop images
php stack trace support for better debugging
php http/2 protocol support
php two way data binding support
php some new features will be available till then please use this framework and let us know in (sudeepdasgupta25@gmail.com) 
and you can also join us to make it best framework ever for php


Following are some examples of the framework, proper documentation will be provided in the http://www.pounze.com/devs/ official site very soon

Before starting it let me discuss about the directory structure

1) cns: Its the main directory where the framework codes are written, if you want to change something go through this folder else leave it.
2) commandlines_files: It has some static files to create controllers, models and middlewares, you no need to think about this folder
3) common_templates: This folder has a file name common_templates and this file is included in all the view files to share common variables and data 
all over the pages.
4) config: this folder has a configuration.php which is framework config file
5) controllers: list of controllers
6) error_files: this has all error files, you can change the design to make more attractive
7) Lobes: This has some wrapper class libraries to make certain work in one line of code
8) logs: This is the log folder currently it has only mysql error log, next version it will be more configurable
9) middlewares: this folder contains all middlewares.
10) models: this folder has models
11) route: It has two files BlockList.php which consists of blocked ip address and Web.php which has all routes declared in it.
12) templates: it has all templates file same views to replace data and string in the html document
13) UserView: It has all static files
14) views: It has all html files

Two files in the root directory :
1) ign: it is made to run some commands to create controller,run server etc.
2) WebSocket: to work with websocket just run php WebSocket and it will start websocket and will direct request to specific controllers

To see some sample codes you can go through the folders there some codes are written.

Example 1:

Basic Routing

route/Web.php

<b>
 <?php
</b>
        use Kernel\App\RequestRoute\Route;
	use Kernel\App\Core\Views;
	use Kernel\App\Core\Response;
  
        $route = new Route();
  
  /*
  This method is a simple get request router which is returning hello world
*/
  $route->get('/',function()
  {
    return "Hello World";
  });

/*
  This method is a simple post request router which is returning Search Page
*/

$route->post('/search',function()
{
  return "Search page";
});

/*
Using Middlewares
*/

$route->get('/test/$id/working/$name',function($input)
{
// here it prints the request data
  print_r($input);
  // here two middlewares are defined and where method is used to get the regex variables
})->middleware(['CheckValidUser','CheckValidAge'])->where(['$id'=>'[0-9]{2}','$name'=>'[a-z]+']);

/*
This example is for redirecting the reqeust to controllers, here controller is StudentController
*/

$route->get('/done/$id/working/$rollNo','StudentController')->where(['$id'=>'[0-9]{2}','$rollNo'=>'[0-9]+']);

/*
To  block any directory access
*/
$route->BlockDirectories(['[\/](search)']);

/*
For 401 Authentication
*/

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

// for mysql there are two classes one is mySQL and one is Orm
// mySQL class is for executing raw sql queries

//to use mySQL class write
use DB\mySQL;
//and then
$bindkey = [
  "India"
];

mySQL::prepare($bindkey,function()
{
  return "SELECT * FROM employee where country = ?";
});

// to see row count

mySQL::rowCount();

// to see insertId

mySQL::insertID();

// to run normal query

mySQL::query(function()
{
  return "SELECT * FROM country WHERE iso = 'IN'";
});

// to use transaction processing system

mySQL::exec(function()
{
  return "
    UPDATE salary = salary + 2500 WHERE id = 21;
    UPDATE total_amount = total_amount - 2500;
  ";
});

// before mySQL or ORM please change the username and password and database name in the config file

// to fetch data

while($obj = mySQL::fetchObject())
{
  echo $obj->name;
}

/*
  To use Orm
*/

// first write

use DB\Orm;

$obj = new Orm();

// normal query
$obj->select("*")->from("employee")->where("name = 'George'")->query();

// prepare statement

$bindkey = [
  'George'
];

$obj->select("*")->from("employee")->where("name = ?")->prepare($bindkey);


// to fetch data

while($data = $obj->fetchObject())
{
  echo $data->name;
}

// to get insertID

echo $obj->insertID();

// to get rowCount

echo $obj->rowCount();

/*
write code in middleware
*/

// If return true then it will move forward else it will stop here
// second argument will be added to request input object if the first argument is true

class CheckSalary
{
  public function __init__($input)
  {
    return [true,'ValidAge'=>true];
  }
}

// To use date method

use Libraries\Lobes\Miscellaneous\Date;

$Object = [
  'format'=>'D', // H | M | S
  'Date1'=>'2017-02-12',
  'Date2'=>'2017-02-20'
];

echo Date::date_diff($Object);

// other method 

add_time, sub_time,

// To use firbase module

use Libraries\Lobes\Miscellaneous\FCM;

$gcm_id = "dasdhsauyudisaiudsau98d798s7d9hsadnksandsaydyas9u"; // given by google

$input = [
  'name'=>'George',
  'type'=>'Salary Deducted'
];

FCM::__init__($gcm_id,$input,function($callback)
{
  echo $callback;
});


/*
  To use log
*/

use Libraries\Lobes\Miscellaneous\Log;

Log::write('/var/www/html/log.txt','Hello World');

/*
  To make a client http request
*/

use Libraries\Lobes\Miscellaneous\Remote;

$headers = [
  'Content-Type'=>'application/json'
];
$data = [
  'name'=>'George',
  'id'=>10810315
];

$opt = [
  'callback'=>true, // optional
  'request'=>true,//post request, // optional
  'postData'=>json_encode($data), // optional
  'url'=>'http://www/pounze.com/send-data', // compulsory
  'headers'=>$headers //optional 
];

Remote::__init__($opt);

/*
To scale images
*/

use Libraries\Lobes\Miscellaneous\Scaleimage;

$image = 'sachin.png';
$image_type = 'image/png';
$width = 420;
$height = 600;
$dir = '/var/www/html/';
$mvdir = '/var/www/html/scale_image/';

Scaleimage::autoresize($image,$image_type,$width,$height,$dir,$mvdir);


/*
  To use timer
*/

use Libraries\Lobes\Miscellaneous\Timer;

Timer::setTimeout(function()
{
  echo 'I am george';
},2000);

Timer::setTimeInterval(function()
{
  echo 'I am george';
});

<b>
?>
</b>
// new documentation will be updated very soon and new version 1.1 with better performance and features

// Till then enjoy coding :)

