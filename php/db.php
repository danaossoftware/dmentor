<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
$c = new mysqli("localhost", "u554752604_admin", "HelloWorld123");
$c->select_db("u554752604_ddt");