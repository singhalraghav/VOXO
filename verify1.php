<?php
include_once "connection.php";
$otp=$_REQUEST['ot'];
$mail=$_REQUEST['mail'];
$votp=$_SESSION['otp'];
$a=$_SESSION['user'];
if($otp==$votp){
    $sql="UPDATE user  set u_email='$mail' where a_name='$a' ";
    if($res= mysqli_query($cun,$sql)){
        $sql1="select u_email from user where a_name='$a'";
        $res1=mysqli_fetch_assoc(mysqli_query($cun,$sql1));
        echo $res1['u_email'];

    }
    else{
        echo 1;
    }

}
else{
    echo 0;
}