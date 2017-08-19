<?php  

	use Kernel\App\Core\Views;

	
    $fileData = 'index.php';
    $find = ['{{name}}'];
    $replace = ['George'];
    Views::bind($find,$replace,$fileData);

?>