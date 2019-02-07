<?php
include 'db.php';
$name = $_GET["name"];
$birthday = $_GET["birthday"];
$address = $_GET["address"];
$phone = $_GET["phone"];
$parentPhone = $_GET["parent-phone"];
$gender = $_GET["gender"];
$graduate = $_GET["graduate"];
$schoolName = $_GET["school-name"];
$schoolAddress = $_GET["school-address"];
$major = $_GET["major"];
$email = $_GET["email"];
$password = $_GET["password"];
$course = $_GET["course"];
$userId = uniqid();
$c->query("INSERT INTO users (id, name, email, password, phone, parent_phone, birthday, gender, graduate, school_name, school_address, major, course, confirmed) VALUES ('" . $userId . "', '" . $name . "', '" . $email . "', '" . $password . "', '" . $phone . "', '" . $parentPhone . "', " . $birthday . ", " . $gender . ", " . $graduate . ", '" . $schoolName . "', '" . $schoolAddress . "', '" . $major . "', " . $course . ", 1)");
session_start();
$_SESSION["dmentor_user_id"] = $userId;