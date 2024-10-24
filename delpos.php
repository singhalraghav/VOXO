<?php
include_once  "connection.php";
$x=$_REQUEST['id'];
$y=$_SESSION['user'];
$sql="delete from blogpost where P_id='$x'";
if($res=mysqli_query($cun,$sql)){
    $sql1="update user set p_num = p_num - 1 where a_name='$y'";
    $res1=mysqli_query($cun,$sql1);
    echo 1;
}
else{
    echo 0;
}
