<?php
session_start();
if ($_SESSION["auth"] != true) {
    header("HTTP/1.0 403 Forbidden");
    die;
}

$_POST = json_decode( file_get_contents("php://input"), true );

$file = "../../components/" . $_POST["pageName"];
$newHTML = $_POST["html"];

if ($newHTML && $file) {
    file_put_contents($file, $newHTML);
} else {
    header("HTTP/1.0 400 Bad Request");
}
