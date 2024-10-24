<?php
include "connection.php";
$mail=$_REQUEST['mail'];
$pass=$_REQUEST['pass'];
$a=$_SESSION['user'];
$sql="select u_email , u_pass from user where a_name='$a'";
$res=mysqli_query($cun,$sql);
if(mysqli_num_rows($res)==1){
    $r=mysqli_fetch_assoc($res);
    if($mail==$r['u_email'] and $pass==$r['u_pass']){
        echo 1;
    }
    else{
        echo 2;
    }
}
else{
    echo 0;
}