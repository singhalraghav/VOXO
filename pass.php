<?php
include "connection.php";
$a=$_REQUEST['a'];
$b=$_SESSION['check'];
$sql= "update user set u_pass='$a' where a_name= '$b' or u_email= '$b'";
if($res=mysqli_query($cun,$sql)){
    echo 'Password Updated';
}
else{
    echo 'Error';
}