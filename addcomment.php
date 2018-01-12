<?php
	include("db.php");
	$data=json_decode($HTTP_RAW_POST_DATA);
	$collection->insertOne($data);
?>