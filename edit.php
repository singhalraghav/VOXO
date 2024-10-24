<?php
include "connection.php";
$a=$_SESSION['user'];
$sql="select * from user where a_name='$a'";
$res=mysqli_fetch_assoc(mysqli_query($cun,$sql));
$out = "         
<div class='profile-image-container'>
    <img src='$res[pro_pic]' id='profileImagePreview' alt='Profile Image'>
    <input type='file' id='profileImage' name='profileImage' value='$res[pro_pic]' accept='image/*'>
</div>
<label for='name'>Name:</label>
<input type='text' id='name' name='name' value='$res[u_name]' placeholder='$res[u_name]'><br>
<label for='number'>Number:</label>
<input type='number' id='number' name='number' value='$res[u_num]' placeholder='$res[u_num]'><br>
<label for='dob'>Date of Birth:</label>
<input type='date' id='dob' name='dob' value='$res[u_dob]' value='$res[u_dob]'><br>
<label for='bio_f'>Bio:</label>
<textarea id='bio_f' name='bio' >$res[pro_bio]</textarea><br>";

$gen=$res['u_gen'];
switch($gen){
    case 'Male':
        $out .= "
        <label for='gender'>Gender:</label>
<select id='gender' name='gender'>
        <option value='Male' selected>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Other'>Other</option>
                    </select>";
        break;
    case 'Female':
        $out .= "  <label for='gender'>Gender:</label>
<select id='gender' name='gender'>
  <option value='Male' >Male</option>
                        <option value='Female' selected>Female</option>
                        <option value='Other'>Other</option>
                    </select>";
        break;
    case 'Other':
        $out .= " <label for='gender'>Gender:</label>
<select id='gender' name='gender'>
   <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Other' selected>Other</option>
                    </select>";
        break;
    default:
        $out .="error";
        break;
        
}

$out .= "<input type='submit' value='Update'>";
echo $out;










