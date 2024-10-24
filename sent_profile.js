$(document).ready(function(){
    user();
    
    function show(){
        $.ajax({
            type: "post",
            url:"sent_profile.php",
            data:{},
            success:function(res){
                $("#p_table").html(res);  
                $(".follow").hide();   

    
            }
        })
    }
    function user(){
        $.ajax({
            type:'post',
            url: 'pr_s1.php',
            data:{},
            success:function(res){
                if(res==0){
                    setTimeout(() => {
                        // Use a publicly accessible URL for testing
                        var redirectUrl = "login.html";
                        window.location.href = redirectUrl;
                        // redirect after 1 seconds
                    }, 100)
                }
                else{
                    console.log(res)
                    var data = $.parseJSON(res);
                    $("#fuser").text(data.r.a_name);
                    $("#logoutpost").attr("src",data.a.pro_pic)
                    $("#profile_image").attr("src",data.r.pro_pic)
                    $("#bio").text(data.r.pro_bio);
                    $("#p_num").text(data.r.p_num);
                    $("#p_flo").text(data.r.follower);
                    $("#p_fli").text(data.r.followin);
                    show();
                    

                }
            }
        })
    };
    
})


