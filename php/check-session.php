<?php
session_start();
if (isset($_SESSION["dmentor_user_id"]) && $_SESSION["dmentor_user_id"] != "") {
	echo 0;
} else {
	echo -1;
}