<?php
include 'db.php';
$babId = $_GET["bab-id"];
$results = $c->query("SELECT * FROM questions WHERE bab_id='" . $babId . "'");
echo $results->num_rows;