<?php
	
	use Kernel\App\Core\Response;

	class Controller
	{
		public function __construct($input)
		{
			response::end('json',['status'=>true,'msg'=>'Controller working']);
		}
	}
?>