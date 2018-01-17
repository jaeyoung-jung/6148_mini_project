{"data":[<?php
	include("db.php");
	$statement=$db->prepare("select * from comments");
	$statement->execute();
	$statement->setFetchMode(PDO::FETCH_ASSOC);
	$results=$statement->fetchAll();
	//var_dump($results);
	$array=array();
	foreach($results as $datum){
		$array[]=json_encode($datum);
	}
	echo implode(",",$array);
	$db=null;
?>]}