<?php

  namespace DB;

  require_once 'config/configuration.php';

  class mySQL
  {
    private $query,$lastInsertId,$db,$config;

    public function __construct()
    {
      global $config;

      $this->config = $config;

      if(isset($this->config["mySql"]["status"]) && $this->config["mySql"]["status"])
      {
        try 
        {
          $options = [
            \PDO::ATTR_ERRMODE            => \PDO::ERRMODE_EXCEPTION,
            \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
            \PDO::ATTR_EMULATE_PREPARES   => false,
            \PDO::ATTR_PERSISTENT => true
          ];

          $this->db = new \PDO("mysql:host=".$this->config["mySql"]["host"].";dbname=".$this->config["mySql"]["database"],$this->config["mySql"]["username"],$this->config["mySql"]["password"],$options);

          return $this->db;
        }
        catch(\PDOException $e)
        {

          /*
            If error is thrown then mysql_connect_error.html page is thrown
          */
          echo file_get_contents(ROOT_DIR."/error_files/mysql_connect_error.html");

          if($this->config["mySql"]["log"])
          {
            file_put_contents(ROOT_DIR.'/logs/mySQL.log', $e->getMessage(). PHP_EOL, FILE_APPEND);
          }
          
          die();
        }
      }
    }

    public function beginTransaction()
    {
      $this->db->beginTransaction();
    }

    public function commit()
    {
      $this->db->commit();
    }

    public function rollback()
    {
      $this->db->rollback();
    }

    public function prepare($bind,$param)
    {
      /*
        php pdo prepare statement
      */
     
      $this->query = $this->db->prepare($param());

      $bindLen = sizeof($bind);

      for($i=0;$i<$bindLen;$i++)
      {

        $j = $i + 1;

        $this->query->bindParam($j,$bind[$i]);
      }

      try
      {

        $this->query->execute();

        $this->lastInsertId = $this->db->lastInsertId();

        $this->db = null;

        return $this->query;

      }
      catch(Exception $e)
      {
        if($this->config["mySql"]["log"])
        {
          file_put_contents(ROOT_DIR.'/logs/mySQL.log', $e->getMessage(). PHP_EOL, FILE_APPEND);
        }

        return  $e->getMessage();

      }

    }

    public function query($param)
    {
      // php query statement
     try
     {
      $this->query = $this->db->query($param());

      $this->lastInsertId = $this->db->lastInsertId();

      return $this->query;
     }

     catch(Exception $e)
     {

      if($this->config["mySql"]["log"])
      {
        file_put_contents(ROOT_DIR.'/logs/mySQL.log', $e->getMessage(). PHP_EOL, FILE_APPEND);
      }

      return  $e->getMessage();

     }

    }

    public function plainQuery($param)
    {
      // php query statement
     try
     {
      $this->query = $this->db->query($param);

      $this->lastInsertId = $this->db->lastInsertId();

      return $this->query;
     }

     catch(Exception $e)
     {

      if($this->config["mySql"]["log"])
      {
        file_put_contents(ROOT_DIR.'/logs/mySQL.log', $e->getMessage(). PHP_EOL, FILE_APPEND);
      }

      return  $e->getMessage();

     }

    }

    public function exec($param)
    {
     try
     {

      $this->query = $this->db->exec($param());

      $this->lastInsertId = $this->db->lastInsertId();

      $this->db = null;

      return $this->query;
     }
     catch(Exception $e)
     {
        if($this->config["mySql"]["log"])
        {
          file_put_contents(ROOT_DIR.'/logs/mySQL.log', $e->getMessage(). PHP_EOL, FILE_APPEND);
        }
        return  $e->getMessage();
     }

    }

    public function plainExec($param)
    {
     try
     {

      $this->query = $this->db->exec($param);

      $this->lastInsertId = $this->db->lastInsertId();

      $this->db = null;

      return $this->query;
     }
     catch(Exception $e)
     {
        if($this->config["mySql"]["log"])
        {
          file_put_contents(ROOT_DIR.'/logs/mySQL.log', $e->getMessage(). PHP_EOL, FILE_APPEND);
        }
        return  $e->getMessage();
     }

    }

    public function rowCount()
    {  
      // php method for row count
       return $this->query->rowCount();

    }

    public function InsertID()
    {
      // php method for getting the last insert id
       return $this->lastInsertId;

    }

    public function fetchObject()
    {
      // php method to fetch sql data in object form
       return $this->query->fetch(\PDO::FETCH_OBJ);
    }

    public function fetchAll()
    {
      // fetching all the data in object form
      return $this->query->fetchAll(\PDO::FETCH_OBJ);
    }

    public function errorQuery()
    {
      // if any error occurs
       $this->error = $this->db->errorInfo();
    }

    public function close()
    {
      // if any error occurs
      $this->db = null;
      $this->query = null;

      unset($this->db);
    }
  }
?>  
