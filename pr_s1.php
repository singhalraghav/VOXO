<?php
include "connection.php";
if($_SESSION['sent']){
    $a=$_SESSION['profile'];
    $b=$_SESSION['sent'];
    
$sql="select * from user where a_name='$b'";
$res=mysqli_query($cun,$sql);
$r=mysqli_fetch_assoc($res);
$jsonData = array(
    'r' => $r,
    'a' => $a
);
echo json_encode($jsonData);   
}
else{
    echo 0;
}