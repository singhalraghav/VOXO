<?php
include_once "connection.php";
$a=$_REQUEST['n'];
$c=$_REQUEST['m'];
$b=$_SESSION['user'];
if($a==0){
    $sql="select x from follow where x like '%$c%' and y='$b' and frole='follower'";
    $role="Follower";
}
else{
    $sql="select x from follow where x like '%$c%' and y='$b' and frole='following'";
    $role="Following";
}
$res=mysqli_query($cun,$sql);
$out ="";
if(mysqli_num_rows($res)>0){
    $i=0;
    while($i<mysqli_num_rows($res)){
       $r= mysqli_fetch_assoc($res);
       $out .= "<li>$r[x]</li>";
       $i++;        
    }
    echo $out;
}
else{
    $out = "<li>No $role</li></ul>";
    echo $out;
}
