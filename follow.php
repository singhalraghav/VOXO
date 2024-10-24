<?php
include_once "connection.php";
$x=$_SESSION['user'];
$y=$_REQUEST['id'];
$sql="INSERT INTO follow VALUES ('$x','$y','follower'),('$y','$x','following')";
if($res=mysqli_query($cun,$sql)){
    echo 1;
}
else{
    echo 0;
}