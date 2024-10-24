<?php
include_once "connection.php";
$otp=$_REQUEST['ot'];
$votp=$_SESSION['otp'];
if($otp==$votp){
    echo 1;
}
else{
    echo 0;
}