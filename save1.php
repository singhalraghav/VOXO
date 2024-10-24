<?php
include "connection.php";
$data = $_REQUEST['img'];
$des=$_REQUEST['d'];
$iname=$_SESSION['user'];
//Decode the base64-encoded image data
// $imageData = base64_decode($data);
$image=str_replace('data:image/jpeg;base64,','',$data);
$image=str_replace(' ','+',$image);
// echo $imageData;
// Generate a unique filename
$uploadDir = "img/";
$fileName = uniqid() . ".jpeg";
$filePath = $uploadDir . $fileName;


// Save the image data to the file
if (file_put_contents($filePath, base64_decode($image))) {
    $sql="insert into blogPost (p_acc,p_des,p_url) values('$iname','$des','$filePath')";
    if($res=mysqli_query($cun,$sql)){
        $sql1="update user set p_num = p_num + 1 where a_name='$iname'";
        $res1=mysqli_query($cun,$sql1);
        echo $iname;
        // header('Content-Type: image/jpeg');
        // echo "Image saved successfully: " . $filePath;
    }
    else{
        echo 0;
    }
    // Set the appropriate Content-Type header
   
} else {
    echo 1;
}
?>