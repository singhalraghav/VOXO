<?php
include "connection.php";
$a=$_REQUEST['a'];
$b=$_SESSION['user'];
$sql = "select * from user where a_name= '$b' and u_pass='$a'";
$res=mysqli_query($cun,$sql);
if(mysqli_num_rows($res)==1){
    echo 1;
}
else{
    echo 0;
}