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

<span font-color="#666">
 <?php
</span>
	<br>
        use Kernel\App\RequestRoute\Route;
	<br>
	use Kernel\App\Core\Views;
	<br>
	use Kernel\App\Core\Response;
	<br>
  
        $route = new Route();
  <br>
  /*
  This method is a simple get request router which is returning hello world
*/
<br>
  $route->get('/',function()
  {
    return "Hello World";
  });
<br>
/*
  This method is a simple post request router which is returning Search Page
*/
<br>
$route->post('/search',function()
{
  return "Search page";
});
<br>
/*
Using Middlewares
*/
<br>
$route->get('/test/$id/working/$name',function($input)
{
<br>
// here it prints the request data
<br>
  print_r($input);
  <br>
  // here two middlewares are defined and where method is used to get the regex variables
  <br>
})->middleware(['CheckValidUser','CheckValidAge'])->where(['$id'=>'[0-9]{2}','$name'=>'[a-z]+']);
<br>
/*
This example is for redirecting the reqeust to controllers, here controller is StudentController
*/
<br>
$route->get('/done/$id/working/$rollNo','StudentController')->where(['$id'=>'[0-9]{2}','$rollNo'=>'[0-9]+']);
<br>
/*
To  block any directory access
*/

<br>
$route->BlockDirectories(['[\/](search)']);
<br>
/*
For 401 Authentication
*/
<br>
if(!$route->checkAuth())
{
  $msg = "Please enter username and password";
  <br>
  $route->sendAuthorization($msg);
}
else
{
<br>
  $call = $route->Authorization();
<br>
  if($call[0] != 'root' || $call[1] != 'kai')
  {<br>
    include 'error_files/401.html';
    <br>
    die();
    <br>
  }
}

<br>
// for mysql there are two classes one is mySQL and one is Orm
<br>
// mySQL class is for executing raw sql queries
<br>
//to use mySQL class write
<br>
use DB\mySQL;
<br>
//and then

<br>
$bindkey = [
  "India"
];

<br>
mySQL::prepare($bindkey,function()
{
  return "SELECT * FROM employee where country = ?";
});

<br>
// to see row count
<br>
mySQL::rowCount();
<br>
// to see insertId
<br>
mySQL::insertID();
<br>
// to run normal query
<br>
mySQL::query(function()
{
  return "SELECT * FROM country WHERE iso = 'IN'";
});
<br>
// to use transaction processing system
<br>
mySQL::exec(function()
{
  return "
    UPDATE salary = salary + 2500 WHERE id = 21;
    UPDATE total_amount = total_amount - 2500;
  ";
});
<br>
// before mySQL or ORM please change the username and password and database name in the config file
<br>
// to fetch data
<br>
while($obj = mySQL::fetchObject())
{
  echo $obj->name;
}
<br>
/*
  To use Orm
*/
<br>
// first write
<br>
use DB\Orm;
<br>
$obj = new Orm();
<br>
// normal query
$obj->select("*")->from("employee")->where("name = 'George'")->query();
<br>
// prepare statement
<br>
$bindkey = [
  'George'
];
<br>
$obj->select("*")->from("employee")->where("name = ?")->prepare($bindkey);

<br>
// to fetch data
<br>
while($data = $obj->fetchObject())
{
  echo $data->name;
}
<br>
// to get insertID
<br>
echo $obj->insertID();
<br>
// to get rowCount
<br>
echo $obj->rowCount();
<br>
/*
write code in middleware
*/
<br>
// If return true then it will move forward else it will stop here
<br>
// second argument will be added to request input object if the first argument is true
<br>
class CheckSalary
{
  public function __init__($input)
  {
    return [true,'ValidAge'=>true];
  }
}
<br>
// To use date method
<br>
use Libraries\Lobes\Miscellaneous\Date;
<br>
$Object = [
  'format'=>'D', // H | M | S
  'Date1'=>'2017-02-12',
  'Date2'=>'2017-02-20'
];
<br>
echo Date::date_diff($Object);
<br>
// other method 
<br>
add_time, sub_time,
<br>
// To use firbase module
<br>
use Libraries\Lobes\Miscellaneous\FCM;
<br>
$gcm_id = "dasdhsauyudisaiudsau98d798s7d9hsadnksandsaydyas9u"; // given by google
<br>
$input = [
  'name'=>'George',
  'type'=>'Salary Deducted'
];
<br>
FCM::__init__($gcm_id,$input,function($callback)
{
  echo $callback;
});
<br>

/*
  To use log
*/
<br>
use Libraries\Lobes\Miscellaneous\Log;
<br>
Log::write('/var/www/html/log.txt','Hello World');
<br>
/*
  To make a client http request
*/
<br>
use Libraries\Lobes\Miscellaneous\Remote;
<br>
$headers = [
  'Content-Type'=>'application/json'
];
<br>
$data = [
  'name'=>'George',
  'id'=>10810315
];
<br>
$opt = [
  'callback'=>true, // optional
  'request'=>true,//post request, // optional
  'postData'=>json_encode($data), // optional
  'url'=>'http://www/pounze.com/send-data', // compulsory
  'headers'=>$headers //optional 
];
<br>
Remote::__init__($opt);
<br>
/*
To scale images
*/
<br>
use Libraries\Lobes\Miscellaneous\Scaleimage;
<br>
$image = 'sachin.png';
$image_type = 'image/png';
$width = 420;
$height = 600;
$dir = '/var/www/html/';
$mvdir = '/var/www/html/scale_image/';
<br>
Scaleimage::autoresize($image,$image_type,$width,$height,$dir,$mvdir);

<br>
/*
  To use timer
*/
<br>
use Libraries\Lobes\Miscellaneous\Timer;
<br>
Timer::setTimeout(function()
{
  echo 'I am george';
},2000);
<br>
Timer::setTimeInterval(function()
{
  echo 'I am george';
});
<br>
<span>
?>
</span>
<br>
// new documentation will be updated very soon and new version 1.1 with better performance and features
<br>
// Till then enjoy coding :)

