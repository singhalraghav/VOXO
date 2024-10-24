<?php
include "connection.php";
$a=$_REQUEST['c_id'];
$b=$_REQUEST['p_id'];
$sql ="delete from pcomment where c_id=$a";
if($res=mysqli_query($cun,$sql)){
    $a1="select count(P_id) from pcomment where P_id='$b'";
    $a2=mysqli_fetch_assoc(mysqli_query($cun,$a1));
    $num=$a2['count(P_id)'];
    echo $num;
   
}
else{
    echo 'some error 2';
}