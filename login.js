$(document).ready(function(){
    $(".verification").hide();
    $(".register-container2").hide();


    $(document).on('submit','#login',function(event){
        event.preventDefault();
        let x=$('#lname').val();
        let y=$('#lpass').val();
            $.ajax({
                type:"post",
                url: "check.php",
                data:{name:x,pass:y},
                success:function(res){
                    if(res==0){
                        setTimeout(() => {
                            // Use a publicly accessible URL for testing
                            var redirectUrl = "home.html";
                            window.location.href = redirectUrl;
                            // redirect after 1 seconds
                        }, 100)
                    }
                    else if(res==1){
                        alert('Password Does Not Match');
                    }
                    else{
                        alert('User doesnot exist');
                    }
                }
            });
    })
    
  
  
    // When the user clicks on <span> (x), close the modal
    $(".close").click(function() {
        $("#email-verification-modal").hide();
        $("#email").val(' ');
        $("#v_msg").text(' ');
        $("#m_sent").prop('disabled', false);


    });
    
    $("#reg").click(function(){

        $("#email-verification-modal").show();
        $("#Verify").hide()
    })

    $("#v_fom").submit(function(event){
        event.preventDefault();
        $("#m_sent").prop('disabled', true);
        $("#m_sent").text('Sending');
        var email = $("#email").val();
        $.ajax({
            type:"post",
            url:"smail.php",
            data:{mail:email},
            success:function(res){
                
                if(res=='Sent'){
                    $("#m_sent").text('Sent');
                    $("#Verify").show()
                }
            }
        })
    })
    $("#m_sub").click(function(event){
        event.preventDefault();
        var d=$("#otp").val();
        $.ajax({
            type:"post",
            url:"verify.php",
            data:{ot:d},
            success:function(res){
                if(res==1){
                    var x = $("#email").val();
                    $("#email-verification-modal").hide();
                    $("#email").val(' ');
                    $("#v_msg").text(' ');
                    $("#Verify").hide()
                    $(".main_title1").hide();
                    $(".login-container1").hide();
                    $(".login-form1").hide();
                    $("body").css({"height":"140vh","background-image":"none"});
                    $(".register-container2").show();
                    $("#remail").val(x);
                    $("#remail").prop('readonly', true);
                }
                else{
                    $("#otp").val(' ');
                    $("#v_otp").text("ENTER CORRECT OTP")
                }
            }
        })
    })


  $('#open-modal-btnp').on('click',function(){
    $("#email-verification-modal").hide();
    $("#Verify").hide()
    $(".main_title1").hide();
    $(".login-container1").hide();
    $(".login-form1").hide();
    $("body").css({"height":"140vh","background-image":"none"});
    $("#modalp").css("display","flex")
    
  });
  $("#verify-email-btnp").click(function(){
    let x=$("#emailp").val()
    $.ajax({
        url:"smail1.php",
        type:"post",
        data:{cre:x},
        success:function(res){
                          
            if(res=='Sent'){
                $("#Verify").show()
                $("#verify-email-btnp").text("Sended");  
                $(".otpp").css("display","flex")
               
                
            }
        }
    })
  })
 

  $("#votp").click(function(){
    let a=$("#cotp").val()
    $.ajax({
        url:"verify.php",
        type:"post",
        data:{ot:a},
        success:function(res){
            if(res==1){
                $("#email-verificationp").css("display","none")
                $(".otpp").css("display","none")
                $("#password-resetp").css("display","flex")
                
            }
            else{
                $("#omsg").text("wrong OTP")
            }
        }
    })
  })

       
  $("#reset-password-btnp").click(function(){
    let x=$("#new-passwordp").val()
    let y=$("#confirm-passwordp").val()
    if(x==" " | y==" "){
        alert('please fill all the feilds')
    }
    else if(x!=y){
        alert('password does not match to each other')
        $("#confirm-passwordp").val(' ')
    }
    else{
        $.ajax({
            type: "post",
            url: "pass.php",
            data:{a:x},
            success:function(res){
                        
                $("body").css({"height":"100vh","background-image":"linear-gradient(to bottom, #f0f0f0, #ccc)"});
                $(".main_title1").show();
                $(".login-container1").show();
                $(".login-form1").show();
                $("#modalp").css("display","none")
                alert(res);
            }
        })
    }


  })



  $('.closep').on('click', function(){
    $("body").css({"height":"100vh","background-image":"linear-gradient(to bottom, #f0f0f0, #ccc)"});
    $(".main_title1").show();
    $(".login-container1").show();
    $(".login-form1").show();
    $("#modalp").css("display","none")

  });








    $(document).on('submit','#reg_for',function(event){
        event.preventDefault();
        let x=$('#pass').val();
        let y=$('#pass1').val();
        if(x!=y){
            $("#msg").html('password mismatch');
        }
        else{
      
            let formData = new FormData();
            formData.append('name', $('#rname').val());
            formData.append('rmail', $('#remail').val());
            formData.append('rnum', $('#rnum').val());
            formData.append('rname', $('#urname').val());
            formData.append('rpass', $('#pass').val());
            formData.append('rdob', $('#bdate').val());
            formData.append('rbio', $('#bio').val());
            formData.append('rgen', $('input[name="gen"]:checked').val());
            formData.append('rfile', $("#pic")[0].files[0]);  


            $.ajax({
                type:"post",
                url: "login.php",
                data: formData,
                contentType: false, 
                processData: false,
                success:function(res){
                    if(res==1){
                        alert('Register Successfuly');
                        $(".register-container2").hide();
                        $("body").css({"height":"100vh","background-image":"linear-gradient(to bottom, #f0f0f0, #ccc)"});
                        $(".main_title1").show();
                        $(".login-container1").show();
                        $(".login-form1").show();
                    }
                    else{
                        alert(res);
                    }
                }
            });
        }
    })
    $("#back").click(function(){
        $(".register-container2").hide();
        $("body").css({"height":"100vh","background-image":"linear-gradient(to bottom, #f0f0f0, #ccc)"});
        $(".main_title1").show();
        $(".login-container1").show();
        $(".login-form1").show();

    })
})