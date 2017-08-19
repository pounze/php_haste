<?php
	
	namespace Libraries\Lobes\Miscellaneous;

	class Log
	{
		public static function write($path,$data)
		{
			$myfile = fopen($path, "w") or die("Unable to open file please check the file name and path!");
			fwrite($myfile, $data);
			fclose($myfile);
		} 
	}
?>