<?php
	
	namespace DB\Data\Models;

	use DB\mySQL;

	class Hotels
	{
		public function getHotelName($bindkey)
		{
			mySQL::prepare($bindkey,function()
			{
				return "SELECT name FROM hotels WHERE hotel_id = ?";
			});
		}
	}
?>