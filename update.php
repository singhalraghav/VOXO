<?php
include "connection.php";
$k=$_SESSION['user'];
$a=$_REQUEST['rname'];
$b=$_REQUEST['rnum'];
$c=$_REQUEST['rgen'];
$d=$_REQUEST['rdob'];
$e=$_REQUEST['rbio'];
if(array_key_exists('rfile',$_FILES)){
    $arr=$_FILES['rfile'];
    $x=$arr['tmp_name']; 
    $y=$arr['name'];
    $dest ='p_pic/'.$y;
    move_uploaded_file($x,$dest);
    $sql="update user set u_name= '$a', u_num= '$b' , u_gen= '$c' , u_dob= '$d' , pro_bio= '$e' , pro_pic= '$dest' where a_name= '$k'";
}
else{
    $sql="update user set u_name= '$a', u_num= '$b' , u_gen= '$c' , u_dob= '$d' , pro_bio= '$e' where a_name= '$k'";
}
$res=mysqli_query($cun,$sql);
if($res){
    
    echo 0;
}
else{
    echo 1;
}


