<?php
include "connection.php";
$a=$_SESSION['user'];
$sql="select * from blogpost where p_acc='$a' order by Stime desc";
$res=mysqli_query($cun,$sql);
$i=0;
$out="<div class='cardsection'>";
while($i<mysqli_num_rows($res)){
    $r=mysqli_fetch_assoc($res);
    $a=$r['p_url'];
    $arr=explode("/",$a);
    $out .= "<div class='cardx'><button class='delete' data-id='$r[P_id]'>X</button>";
    if($arr[0]=='img'){
        $out .= "<div class='imgBx'>
                    <img src='$r[p_url]' alt='Person-1'>
                </div>";
    }
    elseif($arr[0]=='video'){
        $out .= "<div class='vid'>
                    <video controls controlsList='nodownload'>
                        <source src='$r[p_url]' type='video/mp4'>
                    </video>
                </div>";
    }
    elseif($arr[0]=='audio'){
        $out .= "<div class='aud'>
                    <audio controls>
                        <source src='$r[p_url]' type='audio/mp3'> 
                    </audio>
                </div>";

    }
    else{
        $out .= "ERROR";
    }
    $out .= "<div class='content'>
                <div class='details'>
                    <div class='pro_name'>
                        <h2>$r[p_acc]<br><span> $r[p_des]</span><span>posted on 28/08/2024</span></h2>
                    </div>
                    <div class='data'>                  
                        <div class='likes'>
                            <img class='lk' id='-$r[P_id]' src='./bg/1.png' alt='like' data-id1=$r[P_id]><br>
                            <span id='$r[P_id]'>$r[likes]</span>
                        </div>
                        <div class='comments' >";
                        $a1="select count(P_id) from pcomment where P_id='$r[P_id]'";
                        $a2=mysqli_fetch_assoc(mysqli_query($cun,$a1));
                        $num=$a2['count(P_id)'];
            $out .=  "<img class='com' src='./bg/2.png' alt='' data-id=$r[P_id]><br> 
                            <span id='c$r[P_id]'>$num</span>
                        </div>
                    </div> 
                </div>
            </div>
        </div>";

        $i++;

}
$out .="</div>";



echo $out;

