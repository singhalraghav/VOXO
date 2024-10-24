<?php
include "connection.php";
$a=$_REQUEST['name'];
$b=$_REQUEST['rmail'];
$c=$_REQUEST['rnum'];
$d=$_REQUEST['rname'];
$e=$_REQUEST['rpass'];
$f=$_REQUEST['rgen'];
$g=$_REQUEST['rdob'];
$arr=$_FILES['rfile'];
$x=$arr['tmp_name']; 
$y=$arr['name'];
$h=$_REQUEST['rbio'];
$dest ='p_pic/'.$y;
move_uploaded_file($x,$dest); 
$sql="insert into user(a_name,u_name,u_email,u_num,u_pass,u_gen,u_dob,pro_pic,pro_bio) values('$d','$a','$b','$c','$e','$f','$g','$dest','$h')";
if($res=mysqli_query($cun,$sql)){
    session_unset();
    echo 1;
}
else{
    echo 0;
}
