<?php
	
	namespace Libraries\Lobes\Miscellaneous;
		
	class ObjectMeth
	{
		public static function map($oldArray,$func)
		{  		
			if(isset($oldArray) && !empty($oldArray))
			{
				if(is_array($oldArray) || is_object($oldArray))
				{
					foreach($oldArray as $key=>$index)
					{
						$oldArray[$key] = $func($oldArray[$key]);
					}	

					return $oldArray;
				}
				else
				{
					return false;
				}
			}
			else
			{
				return false;
			}
		}

		public static function reduce($oldArray,$func)
		{
			$temp = 0;	
			if(isset($oldArray) && !empty($oldArray))
			{
				if(is_array($oldArray) || is_object($oldArray))
				{
					foreach($oldArray as $key=>$index)
					{
						$temp = $func($temp,$oldArray[$key]);
					}	

					return $temp;
				}
				else
				{
					return false;
				}
			}
			else
			{
				return false;
			}
		}

		public static function filter($oldArray,$func)
		{	
			$tempArray = [];
			if(isset($oldArray) && !empty($oldArray))
			{
				if(is_array($oldArray) || is_object($oldArray))
				{
					foreach($oldArray as $key=>$index)
					{
						if($func($oldArray[$key]))
						{
							array_push($tempArray, $oldArray[$key]);
						}
					}	

					return $tempArray;
				}
				else
				{
					return false;
				}
			}
			else
			{
				return false;
			}
		}
	}
?>