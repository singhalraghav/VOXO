<?php
include "connection.php";
$a=$_SESSION['user'];
$b=$_REQUEST['t'];
if($b==0){
    $sql="select x from follow where y='$a' and frole='follower'";
    $role="Follower";

    $out="<span class='closef'>&times;</span>
<h2>Follower</h2>
<input type='search' data-fl=0 id='follower-search' placeholder='Search followers...'>
<ul class='follower-list'>";
}
elseif($b==1){
    $sql="select x from follow where y='$a' and frole='following'";
    $role="Following";

    $out="<span class='closef'>&times;</span>
<h2>Following</h2>
<input type='search' data-fl=1 id='follower-search' placeholder='Search followers...'>
<ul class='follower-list'>";
}
// $out="<span class='closef'>&times;</span>
// <h2>$role</h2>
// <input type='search'  id='follower-search' placeholder='Search followers...'>
// <ul class='follower-list'>";

$res=mysqli_query($cun,$sql);

if(mysqli_num_rows($res)>0){
    $i=0;

    while($i<mysqli_num_rows($res)){
       $r= mysqli_fetch_assoc($res);
       $out .= "<li>$r[x]</li>";
       $i++;
        
    }
    $out .= "</ul>";
    echo $out;
}
else{
    $out .= "<li>No $role</li></ul>";
    echo $out;
}



