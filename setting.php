<?php
include "connection.php";
$a=$_SESSION['user'];
$sql="select * from user where a_name='$a'";
$res=mysqli_fetch_assoc(mysqli_query($cun,$sql));
$out = "<h1>User Profile</h1>
        <p><strong>Name:</strong> $res[u_name]</p>
        <p><strong>Username:</strong> $res[a_name]</p>
        <p><strong>Date of Birth:</strong> $res[u_dob]</p>
        <p><strong>Gender:</strong> $res[u_gen]</p>
        <p><strong>Phone Number:</strong> $res[u_num]</p>
        <p ><strong>E-Mail:</strong><span id='l'> $res[u_email]</span></p>
        <button type='button' id='open-modal-btnp'>Reset-Password</button>
<button type='button' id='open-modal-btne'>Reset-Email</button>
<button id='open-modald'>Account Delete</button>";
echo $out;






