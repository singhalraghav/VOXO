<?php
include "connection.php";
include('phpmailer_smtp/test.php');
$mail=$_REQUEST['mail'];
$sql="select u_email from user where u_email='$mail'";
$res=mysqli_query($cun,$sql);
if(mysqli_num_rows($res)==0){
    $sub="E_Mail Verification OTP";
    $body=rand(1111,9999);
    $out=smtp_mailer($mail,$sub,$body);
    $_SESSION['otp']=$body;
    echo $out; 
}
else{
    echo "This E-Mail Already Have Account";
}