<?php
include "connection.php";
if(isset($_FILES['ufile'])){

    $arr=$_FILES['ufile'];
    $iname=$_SESSION['user'];
    $idesc=$_REQUEST['idesc'];
    $a=$arr['tmp_name']; 
    $b=$arr['name'];
    $c=$arr['type'];
    $ar=explode("/",$c);
    if($ar[0]=='image'){
        $dest ='img/'.$b;
    }
    elseif($ar[0]=='video'){
        $dest ='video/'.$b;
    }
    elseif($ar[0]=='audio'){
        $dest ='audio/'.$b;
    }
    else{
        echo 'error';
    }
        move_uploaded_file($a,$dest); 
        $sql="insert into blogPost (p_acc,p_des,p_url) values('$iname','$idesc','$dest')";
        if($res=mysqli_query($cun,$sql)){
            $sql1="update user set p_num = p_num + 1 where a_name='$iname'";
            $res1=mysqli_query($cun,$sql1);
            echo $iname;
        }
        else{
            echo 1;
        }
}
else{
    echo 0;
}


// echo "<img src='$dest' class='card-img-top' alt='image not found' /> <h5 class='card-title'>$idesc</h5><a href='#' class='btn btn-primary'>LIKE</a>"; 

        



