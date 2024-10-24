<?php
include "connection.php";
if(isset($_SESSION['user'])){
$a=$_SESSION['user'];
$sql="select * from user where a_name='$a' or u_email='$a'";
$res=mysqli_query($cun,$sql);
$r=mysqli_fetch_assoc($res);
echo json_encode($r);    
}
else{
    echo 0;
}
