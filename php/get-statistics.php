<?php
include 'db.php';
session_start();
$userId = $_SESSION["dmentor_user_id"];
$results = $c->query("SELECT * FROM statistics WHERE user_id='" . $userId . "'");
$statistics = [];
if ($results && $results->num_rows > 0) {
    while ($row = $results->fetch_assoc()) {
        array_push($statistics, $row);
    }
}
echo json_encode($statistics);