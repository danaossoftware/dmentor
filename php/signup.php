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
$c->query("INSERT INTO users (id, name, email, password, phone, parent_phone, birthday, gender, graduate, school_name, school_address, major, course, confirmed) VALUES ('" . uniqid() . "', '" . $name . "', '" . $email . "', '" . $password . "', '" . $phone . "', '" . $parentPhone . "', " . $birthday . ", " . $gender . ", " . $graduate . ", '" . $schoolName . "', '" . $schoolAddress . "', '" . $major . "', " . $course . ", 1)");