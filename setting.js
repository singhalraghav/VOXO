$(document).ready(function(){
    $("#logoutlist").hide();
    $("#modalp").hide();

    user(); 

    function show(){
        $.ajax({
            type:"POST",
            url:"setting.php",
            success:function(res){
                $(".main_container").html(res);

            }
        })
    }

    function user(){
        $.ajax({
            type:'post',
            url: 'data.php',
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
                    var data = $.parseJSON(res);
                    let y=data.pro_pic;
                    $("#logoutpost").attr("src",y)
                    show();
                    
                }
            }
        })
    };




    $(document).on('click','#open-modal-btnp',function(){
       $(".main_container").hide()
       $("#password-resetp").hide()
        $("#modalp").show();
        
        
      });

      $("#verify-email-btnp").click(function(){
        let x=$("#emailp").val()
        $.ajax({
            url:"s_check.php",
            type:"post",
            data:{a:x},
            success:function(res){
                if(res==1){
                    $("#email-verificationp").hide()
                    $("#password-resetp").show()
                }
                else{
                    alert('passowrd is wrong')
                }
            }
        })
      })

     
  $("#reset-password-btnp").click(function(){
    let x=$("#new-passwordp").val()
    let y=$("#confirm-passwordp").val()
    var formData = new FormData();
    formData.append('a', x);
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
            url: "pass1.php",
            data: formData,
            processData: false,
            contentType: false,
            success:function(res){
                $("#modalp").hide();
                $("#password-resetp").hide()
                $("#email-verificationp").show()
                $(".main_container").show()
                alert(res);
            }
        })
    }


  })

      $(".closep").click(function(){
       
         $("#modalp").hide(); 
         $("#password-resetp").hide()
         $("#email-verificationp").show()
         $(".main_container").show()
      })


      $(document).on('click','#open-modal-btne' ,function() {
       $(".main_container").hide()
        $('#email_change').modal('show');
      });


          // Add event listeners to the buttons inside the modal
        $('#verify-email-btne').on('click', function() {
            let x=$("#maile").val()
            let y=$("#emaile").val()
            if(x==' ' | y==' '){
                alert('fill all feilds')
            }
            else{
                $.ajax({
                    type:"post",
                    url:"rmail.php",
                    data:{mail:x,pass:y},
                    success:function(res){
                        if(res==1){
                            $("#detailse").hide()
                            $("#password-resete").show()
                        }
                        else if(res==2){
                            alert('credential are wrong')
                        }
                        else{
                            alert('error')
                        }
                    }
                })
            }
        });


            $('#ock').on('click', function() {
                let a=$("#new-email").val();
                $.ajax({
                    url:"smail.php",
                    type:"post",
                    data:{mail:a},
                    success:function(res){              
                        if(res=='Sent'){   
                            alert('jdfa') 
                            $("#ock").text("Sended");   
                        }
                        else{
                            alert(res)
                        }
                    }
                })
            });
  


        $('#final_email').on('click', function() {
            let b=$("#new-email").val();
            let a=$("#confirm-otp").val()
            $.ajax({
                url:"verify1.php",
                type:"post",
                data:{ot:a,mail:b},
                success:function(res){
                    if(res==1){
                        alert('error')
                        
                    }
                    else if(res==0){
                        $("#omsg").text("wrong OTP")
                    }
                    else{
                        $("#l").text(res)
                        $('#email_change').modal('hide');
                        $(".main_container").show()
                    }
                }
            })
        });






      $('.closee').on('click', function() {
        $('#email_change').modal('hide');
       $(".main_container").show()

      });
    
      // Add the modal functionality using jQuery
      $.fn.modal = function(action) {
        if (action === 'show') {
          $(this).fadeIn();
          $('body').addClass('modal-open');
        } else if (action === 'hide') {
          $(this).fadeOut();
          $('body').removeClass('modal-open');
        }
      };


      $(document).on('click','#open-modald',function() {
       $(".main_container").hide()
      $('#sec_del').hide();
        $('#modal-del').show();
      });


      $('#next-step').click(function() {
        $('#firs_del').hide();
        $('#sec_del').show();
      });

      $('#delete_acc').click(function() {
        let x=$("#del_pass").val();
        
        if(x!=" "){
           
            $.ajax({
                url:"adel.php",
                type: "post",
                data:{a:x},
                success:function(res){
                    
                    if(res==1){
                        $('#modal-del').hide();
                        setTimeout(() => {
                            var redirectUrl = "login.html";
                            window.location.href = redirectUrl;
                        }, 100)
                        alert('Your Account Has Been Deleted')
                    }
                    else if(res==2){
                        alert("Password Wrong")
                    }
                    else{
                        alert(res)
                    }
                }
            })
        }
        else{
            alert('Enter Password Please')
        }
      });

      $(window).click(function(event) {
        if (event.target == $('#modal-del')[0]) {
        $('#modal-del').hide();
        $(".main_container").show()
        }
      });




    
    $("#logoutpost").click(function(){
        $("#logoutlist").slideToggle()
    })

   



    $("#lgout").click(function(){
        if(confirm('Are You Sure!!!')){
            $.ajax({
                type:"post",
                url:"logout.php",
                success:function(res){
                    if(res==1){
                        var redirectUrl = "login.html";
                        window.location.href = redirectUrl;
                    }
                }

            })
        }

    })


})


$(document).ready(function() {
    // Open the modal when the button is clicked

  
    // Close the modal when the user clicks outside of it

  
    // Show the next step when the 'Next Step' button is clicked
  
  
    // Delete the account when the 'Delete' button is clicked

  });