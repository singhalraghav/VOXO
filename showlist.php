<?php
include "connection.php";
$a=$_SESSION['user'];
$sql="select count(x) from follow where y='$a' and frole='follower'";
$res=mysqli_fetch_assoc(mysqli_query($cun,$sql));
$num=$res['count(x)'];
$sql1="select count(x) from follow where y='$a' and frole='following'";
$res1=mysqli_fetch_assoc(mysqli_query($cun,$sql1));
$num1=$res1['count(x)'];
$arr=["follower"=>$num,
        "following"=>$num1];
echo json_encode($arr);  
