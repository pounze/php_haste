<?php
	
	use Kernel\App\Core\Orm;

	class Controller
	{
		public function __construct($input)
		{
			$OrmObj = new Orm();

			$bindkey = [
				2
			];

			$OrmObj->select("*")->from("users")->where("id = ?");

			if($OrmObj->:rowCount() == 1)
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

				unset($OrmObj);

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