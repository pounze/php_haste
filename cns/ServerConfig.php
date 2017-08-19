<?php


  ini_set('display_errors',$config["error"]["error_reporting"]);
  error_reporting($config["error"]["error_reporting"]);

  set_time_limit($config["server"]["time_limit"]);

  unset($ConfigOBJ);

?>