<?php
include_once "connection.php";
$a=$_REQUEST['ID'];
$sql="select * from blogpost where P_id='$a'";
if($res=mysqli_query($cun,$sql)){
    $r=mysqli_fetch_assoc($res);
    $a=$r['p_url'];
    $arr=explode("/",$a);
    $out = "<div class='modal-container'>
    <div class='modal-content'>
                <div class='iim'>
                    <h4>$r[p_acc]</h4>";
                if($arr[0]=='img'){
                            $out .= "<div class='image-section'>
                                        <img src='$r[p_url]' alt='Person-1' width='520' height='295'>
                                    </div>";
                        }
                elseif($arr[0]=='video'){
                            $out .= "<div class='image-section'>
                                        <video controls controlsList='nodownload'>
                                            <source src='$r[p_url]' type='video/mp4'>
                                        </video>
                                    </div>";
                        }
                elseif($arr[0]=='audio'){
                            $out .= "<div class='audio-wrapper'>
                                        <audio controls>
                                            <source src='$r[p_url]' type='audio/mp3'> 
                                        </audio>
                                    </div>";
                    
                        }
                else{
                            $out .= "ERROR";
                        }


    $out .= "<p>About: $r[p_des]<span style='position: absolute; right: 5%;'>Likes: $r[likes]</span></p>
       </div>
    <div class='coom'>
      <h5 style='padding-left: 20px;'>COMMENTS</h5>
      <div class='comment-section'>
        <ul id='comments-list'>";

           
           $sql1="select * from pcomment where P_id='$r[P_id]' order by c_time desc";
           $res1=mysqli_query($cun,$sql1);
           if(mysqli_num_rows($res1)>0){
            $i=0;
            while($i<mysqli_num_rows($res1)){
              $r1=mysqli_fetch_assoc($res1);
              $d=strtotime($r1['c_time']);
              $v=date("Y-m-d", $d);
           
              $out .= " <li class='cmnt'><button class='del_com' data-id2='$r[P_id] $r1[c_id]'>-</button><div>
                    <span class='comment-author'>$r1[u_name]</span>
                    <span class='posted-date'>$v</span>
                    <span class='comment-text'>$r1[c_dis]</span>
                </div>
              </li>";
              $i++;
            }
           }

    $out .=    "</ul>
      </div>
        <form class='comment-form'>
          <input type='text' class='comment-input' placeholder='Add a comment...'>
          <button class='comment-btn' data-idi=$r[P_id]>Post</button>
        </form>
    </div>  
    </div>
    </div>";
  echo $out;

}
else{
    echo "error";
}







  
//   <!-- Trigger button to open the modal -->
//   <button id="open-modal">Open Modal</button>
  





// " <li class='cmnt'>$r1[c_dis]
// <span class='comment-author'>John Doe</span>
// <span class='comment-text'>This is a comment!</span>
// <span class='posted-date'>2023-02-20</span>
// </li>"