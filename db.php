<?php
	require 'vendor/autoload.php';
	define("DB_USER","php");
	define("DB_PASSWORD","redvelvet20");
	define("DB_URL","mongodb://".DB_USER.":".DB_PASSWORD."@ds161823.mlab.com:61823/mini_project");

	$client=new MongoDB\Client(DB_URL);
	$collection=$client->mini_project->collection;
?>