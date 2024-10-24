<?php
include_once "connection.php";
$user=$_SESSION['user'];
$sent=$_REQUEST['sent'];
if($user==$sent){
    echo 1;
}
else{
    $_SESSION['sent']=$sent;
    echo 0;
}