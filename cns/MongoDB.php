<?php

	namespace DB;

	class MongoDB
	{
		private static $manager;
		public function __construct($host,$port,$dbname,$user,$password,$config)
		{
			if(isset($user) && !empty($user) && isset($password) && !empty($password))
			{
				try
				{
					self::$manager = new \MongoDB\Driver\Manager("mongodb://".$user.":".$password."@".$host.":".$port."/".$dbname);
				}
				catch(\PDOException $e)
	            {

	            /*
	              If error is thrown then mysql_connect_error.html page is thrown
	            */
	            echo file_get_contents(ROOT_DIR."/error_files/mongo_connect_error.html");

	            if($config["mySql"]["log"])
	            {
	              file_put_contents(ROOT_DIR.'/logs/mongo.log', $e->getMessage(). PHP_EOL, FILE_APPEND);
	            }
	            die();
	          }
			}
		}

		/*
			method to run mongo database query
		*/

		public static function query($collectionName,$filter,$option)
		{
			
			try
			{
				$query = new \MongoDB\Driver\Query($filter, $option);

				return self::$manager->executeQuery($collectionName, $query);
			}
			catch(MongoDB\Driver\Exception\Exception $e)
			{
				return $e->getMessage();
			}
		}

		/*
			method to run mongo database command
		*/

		public static function command($collectionName,$query)
		{
			try
			{
				$command = new MongoDB\Driver\Command($query);

				return self::$manager->executeCommand($collectionName,$command);
			}
			catch(MongoDB\Driver\Exception\Exception $e)
			{
				return $e->getMessage();
			}
		}

		/*
			create a bulk object 
		*/

		public static function createBulkObject()
		{
			return new MongoDB\Driver\BulkWrite();
		}

		/*
			write bulk query method to run multiples query together
		*/

		public static function writeBulkQuery($collectionName,$bulkObj)
		{
			try
			{
				$writeConcern = new MongoDB\Driver\WriteConcern(MongoDB\Driver\WriteConcern::MAJORITY,100);
			    return self::$manager->executeBulkWrite($collectionName,$bulkObj,$writeConcern);
			}
			catch(MongoDB\Driver\Exception\Exception $e)
			{
				return $e->getMessage();
			}
		}

		/*
			get server list that is connected
		*/

		public static function getServers()
		{
			return self::$manager->getServers();
		}

		/*
			inserted count 
		*/

		public static function insertIdCount($resultOBJ)
		{
			try
			{
				return $resultOBJ->getInsertedCount();
			}
			catch(MongoDB\Driver\Exception\Exception $e)
			{
				return $e->getMessage();
			}
		}

		public static function matchedCount($resultOBJ)
		{
			try
			{
				return $resultOBJ->getmatchedCount();
			}
			catch(MongoDB\Driver\Exception\Exception $e)
			{
				return $e->getMessage();
			}
		}

		public static function modifiedCount($resultOBJ)
		{
			try
			{
				return $resultOBJ->getModifiedCount();
			}
			catch(MongoDB\Driver\Exception\Exception $e)
			{
				return $e->getMessage();
			}
		}

		public static function upsertedCount($resultOBJ)
		{
			try
			{
				return $resultOBJ->getUpsertedCount();
			}
			catch(MongoDB\Driver\Exception\Exception $e)
			{
				return $e->getMessage();
			}
		}

		public static function deletedCount($resultOBJ)
		{
			try
			{
				return $resultOBJ->getDeletedCount();
			}
			catch(MongoDB\Driver\Exception\Exception $e)
			{
				return $e->getMessage();
			}
		}

		public static function UpSertedIds($resultOBJ)
		{
			try
			{
				return $resultOBJ->getUpSertedIds();
			}
			catch(MongoDB\Driver\Exception\Exception $e)
			{
				return $e->getMessage();
			}
		}
	}

	$mongoObject = new MongoDB($config["mongo"]["host"],$config["mongo"]["port"],$config["mongo"]["database"],$config["mongo"]["username"],$config["mongo"]["password"],$config);
?>