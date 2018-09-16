<?php

  namespace DB;

  require_once 'config/configuration.php';

  class mySQL
  {
    private static $query,$lastInsertId,$db,$config;
    
    public static function init()
    {
      global $config;

      self::$config = $config;

      if(isset(self::$config["mySql"]["status"]) && self::$config["mySql"]["status"])
      {
        try 
        {
          $options = [
            \PDO::ATTR_ERRMODE            => \PDO::ERRMODE_EXCEPTION,
            \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
            \PDO::ATTR_EMULATE_PREPARES   => false,
            \PDO::ATTR_PERSISTENT => true
          ];

          print_r(self::$db);

          self::$db = new \PDO("mysql:host=".self::$config["mySql"]["host"].";dbname=".self::$config["mySql"]["database"],self::$config["mySql"]["username"],self::$config["mySql"]["password"],$options);

        }
        catch(\PDOException $e)
        {

          /*
            If error is thrown then mysql_connect_error.html page is thrown
          */
          echo file_get_contents(ROOT_DIR."/error_files/mysql_connect_error.html");

          if(self::$config["mySql"]["log"])
          {
            file_put_contents(ROOT_DIR.'/logs/mySQL.log', $e->getMessage(). PHP_EOL, FILE_APPEND);
          }
          
          die();
        }
      }
    }

    public static function beginTransaction()
    {
      self::$db->beginTransaction();
    }

    public static function commit()
    {
      self::$db->commit();
    }

    public static function rollback()
    {
      self::$db->rollback();
    }

    public static function prepare($bind,$param)
    {
      /*
        php pdo prepare statement
      */
     
      self::$query = self::$db->prepare($param());

      $bindLen = sizeof($bind);

      for($i=0;$i<$bindLen;$i++)
      {

        $j = $i + 1;

        self::$query->bindParam($j,$bind[$i]);
      }

      try
      {

        self::$query->execute();

        self::$lastInsertId = self::$db->lastInsertId();

        return self::$query;

      }
      catch(Exception $e)
      {
        if(self::$config["mySql"]["log"])
        {
          file_put_contents(ROOT_DIR.'/logs/mySQL.log', $e->getMessage(). PHP_EOL, FILE_APPEND);
        }

        return  $e->getMessage();

      }

    }

    public static function query($param)
    {
      // php query statement
     try
     {
      self::$query = self::$db->query($param());

      self::$lastInsertId = self::$db->lastInsertId();

      return self::$query;
     }

     catch(Exception $e)
     {

      if(self::$config["mySql"]["log"])
      {
        file_put_contents(ROOT_DIR.'/logs/mySQL.log', $e->getMessage(). PHP_EOL, FILE_APPEND);
      }

      return  $e->getMessage();

     }

    }

    public static function plainQuery($param)
    {
      // php query statement
     try
     {
      self::$query = self::$db->query($param);

      self::$lastInsertId = self::$db->lastInsertId();

      return self::$query;
     }

     catch(Exception $e)
     {

      if(self::$config["mySql"]["log"])
      {
        file_put_contents(ROOT_DIR.'/logs/mySQL.log', $e->getMessage(). PHP_EOL, FILE_APPEND);
      }

      return  $e->getMessage();

     }

    }

    public static function exec($param)
    {
     try
     {

      self::$query = self::$db->exec($param());

      self::$lastInsertId = self::$db->lastInsertId();

      self::$db = null;

      return self::$query;
     }
     catch(Exception $e)
     {
        if(self::$config["mySql"]["log"])
        {
          file_put_contents(ROOT_DIR.'/logs/mySQL.log', $e->getMessage(). PHP_EOL, FILE_APPEND);
        }
        return  $e->getMessage();
     }

    }

    public static function plainExec($param)
    {
     try
     {

      self::$query = self::$db->exec($param);

      self::$lastInsertId = self::$db->lastInsertId();

      self::$db = null;

      return self::$query;
     }
     catch(Exception $e)
     {
        if(self::$config["mySql"]["log"])
        {
          file_put_contents(ROOT_DIR.'/logs/mySQL.log', $e->getMessage(). PHP_EOL, FILE_APPEND);
        }
        return  $e->getMessage();
     }

    }

    public static function rowCount()
    {  
      // php method for row count
       return self::$query->rowCount();

    }

    public static function InsertID()
    {
      // php method for getting the last insert id
       return self::$lastInsertId;

    }

    public static function fetchObject()
    {
      // php method to fetch sql data in object form
       return self::$query->fetch(\PDO::FETCH_OBJ);
    }

    public static function fetchAll()
    {
      // fetching all the data in object form
      return self::$query->fetchAll(\PDO::FETCH_OBJ);
    }

    public static function errorQuery()
    {
      // if any error occurs
       self::$error = self::$db->errorInfo();
    }

    public static function close()
    {
      // if any error occurs
      self::$db = null;
      self::$query = null;
    }
  }

?>  
