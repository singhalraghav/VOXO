<?php
include "connection.php";
$a=$_REQUEST['a'];
$b=$_REQUEST['b'];
if($b==0){
    $sql="update blogpost set likes=likes+1 WHERE P_id=$a";
    $res=mysqli_query($cun,$sql);
    $sql1="select likes from blogpost where P_id=$a";
    $res1=mysqli_query($cun,$sql1);
    $r=mysqli_fetch_assoc($res1);
    echo $r['likes'];
}
else{
    $sql="update blogpost set likes=likes-1 WHERE P_id=$a";
    $res=mysqli_query($cun,$sql);
    $sql1="select likes from blogpost where P_id=$a";
    $res1=mysqli_query($cun,$sql1);
    $r=mysqli_fetch_assoc($res1);
    echo $r['likes'];
}
