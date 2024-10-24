<?php
include_once "connection.php";
$a=$_REQUEST['id'];
$b=$_REQUEST['com'];
$c=$_SESSION['user'];
$sql ="insert into pcomment (P_id,u_name,c_dis) values('$a','$c','$b')";
if($res=mysqli_query($cun,$sql)){
  
    $sql2="select count(P_id) from pcomment where P_id='$a'";
    $res2=mysqli_fetch_assoc(mysqli_query($cun,$sql2));
    
    echo $res2['count(P_id)'];
}
else{
    echo "error";
}
