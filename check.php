<?php
include "connection.php";
$a=$_REQUEST['name'];
$p=$_REQUEST['pass'];
$sql="select * from user where a_name='$a' or u_email='$a'";
if($res=mysqli_query($cun,$sql)){
    $r=mysqli_fetch_assoc($res);
    if($r['u_pass']==$p){
        $_SESSION['name']=$r['u_name'];
        $_SESSION['user']=$r['a_name'];
        $_SESSION['profile']=$r['pro_pic'];
        echo 0;
    }
    else{
        echo 1;
    }
}
else{
    echo 2;
}
