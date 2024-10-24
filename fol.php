<?php
include "connection.php";
$a=$_SESSION['user'];
$sql="select y from follow where x='$a' and frole='follower'";
$res=mysqli_query($cun,$sql);
$ar=[$a];
$i=0;
while($i<mysqli_num_rows($res)){
    $r=mysqli_fetch_assoc($res);
    array_push($ar,$r['y']);
    $i++;
}
echo json_encode($ar);    
 

