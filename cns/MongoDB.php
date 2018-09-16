<?php

	namespace DB;

	class MongoDB
	{
		private static $manager,$db,$config;

		public function __construct($config)
		{
			self::$config = $config;
		}

		public static function connectDB()
		{
			if(isset(self::$config["mongo"]["username"]) && !empty(self::$config["mongo"]["username"]) && isset(self::$config["mongo"]["password"]) && !empty(self::$config["mongo"]["password"]))
			{
				if(self::$config["mongo"]["status"])
				{
					try
					{
						self::$db = $dbname;
						self::$manager = new \MongoDB\Driver\Manager("mongodb://".self::$config["mongo"]["username"].":".self::$config["mongo"]["password"]."@".self::$config["mongo"]["host"].":".self::$config["mongo"]["port"]."/".self::$config["mongo"]["database"]);
					}
					catch(\PDOException $e)
		            {

			            /*
			              If error is thrown then mysql_connect_error.html page is thrown
			            */
			            echo file_get_contents(ROOT_DIR."/error_files/mongo_connect_error.html");

			            if(self::$config["mongo"]["log"])
			            {
			              file_put_contents(ROOT_DIR.'/logs/mongo.log', $e->getMessage(). PHP_EOL, FILE_APPEND);
			            }
			            die();
		          	}
				}
			}
			else
			{
				if(self::$config["mongo"]["status"])
				{
					try
					{	
						self::$db = self::$config["mongo"]["database"];					
						self::$manager = new \MongoDB\Driver\Manager("mongodb://".self::$config["mongo"]["host"].":".self::$config["mongo"]["port"]."/".self::$config["mongo"]["database"]);
					}
					catch(\PDOException $e)
		            {

			            /*
			              If error is thrown then mysql_connect_error.html page is thrown
			            */
			            echo file_get_contents(ROOT_DIR."/error_files/mongo_connect_error.html");

			            if(self::$config["mongo"]["log"])
			            {
			              file_put_contents(ROOT_DIR.'/logs/mongo.log', $e->getMessage(). PHP_EOL, FILE_APPEND);
			            }
			            die();
		          	}
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
				self::connectDB();

				$query = new \MongoDB\Driver\Query($filter, $option);

				return self::$manager->executeQuery(self::$db.".".$collectionName, $query);
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
				self::connectDB();

				$command = new \MongoDB\Driver\Command($query);

				return self::$manager->executeCommand(self::$db.".".$collectionName,$command);
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
			return new \MongoDB\Driver\BulkWrite();
		}

		/*
			write bulk query method to run multiples query together
		*/

		public static function writeBulkQuery($collectionName,$bulkObj)
		{
			try
			{
				self::connectDB();

				$writeConcern = new \MongoDB\Driver\WriteConcern(\MongoDB\Driver\WriteConcern::MAJORITY,100);
			    return self::$manager->executeBulkWrite(self::$db.".".$collectionName,$bulkObj,$writeConcern);
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
			self::connectDB();

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

		public static function toObjectId($String)
		{
			return new \MongoDB\BSON\ObjectId($String);
		}
	}

	new MongoDB($config);
?>
