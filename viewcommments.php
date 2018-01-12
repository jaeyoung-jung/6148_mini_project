[<?php
	include("db.php");
	$results=$collection->find();
	$array=array();
	foreach($results as $datum){
		$array[]=json_encode($datum);
	}
	echo implode(",",$array);
?>]