<?php
include 'db.php';
$c->query("DELETE FROM sessions WHERE ip='" . $ip . "'");
session_start();
$_SESSION["dmentor_user_id"] = "";
unset($_SESSION["dmentor_user_id"]);