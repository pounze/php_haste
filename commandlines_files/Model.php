<?php
	
	namespace DB\Data\Models;

	use DB\mySQL;

	class Model
	{
		public function MethodName($bindkey)
		{
			mySQL::prepare($bindkey,function()
			{
				return "SELECT employee FROM company WHERE employee_id = ?";
			});
		}
	}
?>