<?php
	include("db.php");
	//var_dump($_POST);
	$statement=$db->prepare("INSERT INTO comments (name,email,comment) values (?,?,?)");
	$statement->execute(array($_POST["name"],$_POST["email"],$_POST["comment"]));
	$db=null;
?>