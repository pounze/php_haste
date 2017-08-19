<?php
	
	include 'models/Hotels.php';

	use Kernel\App\Core\Views;
	use Kernel\App\Core\Response;	
	use DB\Data\Models\Hotels;
	use DB\mySQL;

	class StudentController
	{
		public function __construct($input)
		{
			$bindkey = [
				2
			];

			$HotelsObj = new Hotels();
			$HotelsObj->getHotelName($bindkey);
			unset($HotelsObj);

			if(mySQL::rowCount() == 1)
			{
				$data = [
					'status'=>true,
					'msg'=>'message is in json',
					'data'=>$input
				];

				$headers = [
					'Content-Type'=>'application/json',
					'Author'=>'Sudeep Dasgupta'
				];

				response::end('json',$data,$headers);

				views::render('index',"View is working even in controller");
			}
			else
			{
				response::end('json',['status'=>false,'msg'=>'No data found']);
			}
		}
	}
?>