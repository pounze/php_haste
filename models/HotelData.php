<?php
	
	namespace DB\Data\HotelDatas;

	use DB\mySQL;

	class HotelData
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