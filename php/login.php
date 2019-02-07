<?php
include 'db.php';
$email = $_GET["email"];
$password = $_GET["password"];
$results = $c->query("SELECT * FROM users WHERE email='" . $email . "'");
if ($results && $results->num_rows > 0) {
    $row = $results->fetch_assoc();
    if ($row["password"] != $password) {
        echo -2;
        return;
    }
    $userId = $row["id"];
	session_start();
	$_SESSION["dmentor_user_id"] = $userId;
    echo 0;
} else {
    echo -1;
}