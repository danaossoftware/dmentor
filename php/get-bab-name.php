<?php
include 'db.php';
$babId = $_GET["bab-id"];
$results = $c->query("SELECT * FROM bab WHERE id='" . $babId . "'");
if ($results && $results->num_rows > 0) {
	$row = $results->fetch_assoc();
	echo $row["name"];
} else {
	echo "";
}