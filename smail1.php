<?php
include "connection.php";
include('phpmailer_smtp/test.php');
$a=$_REQUEST['cre'];
$_SESSION['check']=$a;
$sql="select u_email from user where u_email='$a' or a_name='$a'";
if($res=mysqli_query($cun,$sql)){
    $r=mysqli_fetch_assoc($res);
    $m=$r['u_email'];
    $sub="E_Mail Verification OTP For Password Change";
    $body=rand(1111,9999);
    $out=smtp_mailer($m,$sub,$body);
    $_SESSION['otp']=$body;
    echo $out; 
}
else{
    echo "Wrong Credetential";
}