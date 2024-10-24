<?php
include "connection.php";
$pass=$_REQUEST['a'];
$con=$_SESSION['user'];
$sql="select u_pass from user where  a_name='$con'";
if($res=mysqli_query($cun ,$sql)){
    $r=mysqli_fetch_assoc($res);
    if($pass==$r['u_pass']){
       
        $sql1="delete from follow where y='$con' and frole='following'";
        $res1=mysqli_query($cun,$sql1);

       
        $sql2="delete from follow where y='$con' and frole='follower'";
        $res2=mysqli_query($cun,$sql2);


        
        // $s6="SELECT P_id, count(P_id) FROM pcomment WHERE u_name='$con' GROUP BY P_id";
        // $r6=mysqli_query($cun,$s6);
        // $i=0;
        // while($i<mysqli_num_rows($r6)){
        //     $re6=mysqli_fetch_assoc($r6);
        //     $num=$re6['count(P_id)'];
        //     $ids=$re6['P_id'];
        //     $s7="UPDATE blogpost SET comment=comment-$num WHERE P_id=$ids";
        //     $i++;
        // }
        $s5="DELETE FROM pcomment WHERE u_name='$con'";
        $r5=mysqli_query($cun,$s5);
        $s1="DELETE FROM user WHERE a_name='$con'";
        $r1=mysqli_query($cun,$s1);
        $s2= "DELETE FROM blogpost WHERE p_acc='$con'";
        $r2=mysqli_query($cun,$s2);
        session_destroy();
        echo 1;
    }
    else{
        echo 2;
    }
}
else{
    echo 3;
}



