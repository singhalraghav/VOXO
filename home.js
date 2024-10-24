$(document).ready(function(){
    $("#post_section").hide();  
    $("#logoutlist").hide();
    var l=[];
    user(); 
    follow();
    $(document).on('click','.follow',function(){
        let x=$(this).data('idf');
        $.ajax({
            url:'follow.php',
            type:'post',
            data:{id:x},
            success:function(res){
                if(res==1){
                    follow(x)
                    
                }

            }
        })
      })

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
                    let x="Welcome".concat(" ",data.u_name);
                    let y=data.pro_pic;
                    z=data.u_name;
                    $("#fuser").text(x);
                    $("#logoutpost").attr("src",y)
                    follow(z)
                }
            }
        })
    };

    function follow( f=null){
        $.ajax({
            url:"fol.php",
            type:"post",
            success:function(res){
                // var data = $.parseJSON(res);
                if(f!=null){
                    var data = $.parseJSON(res);
                    data.push(f)
                    show(data)
                }   
            }
        })
    }

    function show(data=null){
        $.ajax({
            type: "post",
            url:"show.php",
            data:{},
            success:function(res){
                $("#p_table").html(res);     
                $('.cardx').each(function() {
                    if ($.inArray($(this).find('.content .details .pro_name h2').text().toLowerCase(), data) !== -1) {
                      $(this).find('.data .follow').hide();
                    }
                  });

            }
        })
    }
    
 
    $("#logoutpost").click(function(){
        $("#logoutlist").slideToggle()
    })

   
        var clicks = 0;
        var timer = null;
    
        $(document).on("click",".lk",function(){
            clicks++; 
            let x=$(this).data('id1');  
            let y=0 
            let k="#-"
            let result1=k.concat(x) 
            if (clicks === 1) {
                $(result1).addClass('highlight');
                clearTimeout(timer); 
                timer = setTimeout(function() {
                    // single click event
                    $.ajax({
                        type: "post",
                        url:"like.php",
                        data:{a:x,b:y},
                        success:function(res){
                            let v="#"
                            let result=v.concat(x)
                            $(result).text(res);
                        }
                    })
                    clicks = 0; // reset the counter
                    $(result1).removeClass('highlight');
                }, 500); 
            } else if (clicks === 2) {
                $(result1).removeClass('highlight');
                $(result1).addClass('highlight1');
                clearTimeout(timer); 
                let y=1  
                timer = setTimeout(function() {
                    // single click event
                    $.ajax({
                        type: "post",
                        url:"like.php",
                        data:{a:x,b:y},
                        success:function(res){
                            let v="#"
                            let result=v.concat(x)
                            $(result).text(res);
                        }
                    })
                    clicks = 0; // reset the counter
                    $(result1).removeClass('highlight1');
                }, 500); 
            }
        });

        $(document).on('click','.com',function(){
            let x=$(this).data('id');
            comment(x)
        })

        function comment(j){
            $.ajax({
                type:"post",
                url:"comment.php",
                data:{ID:j},
                success:function(res){
                    $("#lm").html(res);
                    $('.del_com').hide();
                    $('.modal-container').fadeIn();
                    $('body').css('overflow', 'hidden');
                }
            })
        }


          $(document).on('click', function(event) {
            if ($(event.target).is('.modal-container')) {
              $('.modal-container').fadeOut();
              $('body').css('overflow', 'auto');
            }
          });

    $(document).on('click','.comment-btn',function(event){
        event.preventDefault();
        let x=$(this).data('idi');
        let y=$(".comment-input").val();
        if(y==""){
            alert("please write something")
        }
        else{
            $.ajax({
                type:"post",
                url:"scom.php",
                data:{id:x,com:y},
                success:function(res){
                    let k='#c'
                    let result=k.concat(x)
                    $(result).html(res);
                    $(".comment-input").val('')
                    comment(x)
    
                }
            })
        }

    })


    $(document).on('click','.pr_s',function(){
        let x=$(this).data('s');
        $.ajax({
            url:"pr_s.php",
            type:"post",
            data:{sent:x},
            success:function(res){
                if(res==0){
                    var redirectUrl = "sent_profile.html";
                    window.location.href = redirectUrl;
                }
                else{
                    var redirectUrl = "profile.html";
                    window.location.href = redirectUrl;
                }
            }
        })
    })

    // $('#post-modal-trigger12').on('click', function() {
    //     $('#post-modal12').fadeIn();
    //   });

    //   $(document).on('click', function(event) {
    //     if ($(event.target).is('#post-modal12')) {
    //       $('#post-modal12').fadeOut();
    //       $("#post-desc12").val('');
    //       $("#upload-post-pic").val('')
    //     }
    //   });
  
    //   $("#post-btn12").click(function(event){
    //       event.preventDefault();
    //       let formData = new FormData();
    //       formData.append('idesc', $("#post-desc12").val());
    //       formData.append('ufile', $("#upload-post-pic")[0].files[0]);  
    //       $.ajax({
    //           type:"post",
    //           url: "save.php",
    //           data: formData,
    //           contentType: false, 
    //           processData: false,
    //           success: function(res){
    //               if(res==1){
    //                 alert('error');
    //               }
    //               else if(res==0){
    //                 alert('Add photo first')
    //               }
    //               else{
    //                 $('#post-modal12').fadeOut();
    //                 $("#post-desc12").val('');
    //                 $("#upload-post-pic").val('')     
    //                 follow(res)
    //               }
    //           }
    //       })
    //   }) 












    let sd;
    $('#post-modal-trigger12').on('click', function() {
        $(".upload-btn-container").hide();
        $(".che").hide();
        $('#post-modal12').fadeIn();
      });

      $("#fir_btn").click(function(){
        if (sd==1 ) {
            stream.getTracks().forEach(track => track.stop());
            $(".che").hide();
            $(".upload-btn-container").show();
        }  
        else{
            $(".che").hide();
            $(".upload-btn-container").show();
        }     
      })
      $("#start-camera").click(async function(){
        $(".upload-btn-container").hide();
        $("#show").hide();
        $("#video").show()
        $("#click-photo").show();
        $(".che").show();
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        sd=1
        $('#video')[0].srcObject = stream;
        // Wait for the video metadata to be loaded
        $('#video')[0].onloadedmetadata = function() {
            $('#video')[0].play(); // Start playing the video
        };
      })

    
      $("#click-photo").click(function() {
        $("#click-photo").hide();
        $("#video").hide()
        $("#show").show();

        // Draw the video frame on the canvas
        if (video.readyState >= video.HAVE_CURRENT_DATA) {
        
        
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            let context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            

            // Convert the canvas to data URL and set it as file input value
            // let image_data_url = canvas.toDataURL('image/jpeg');
            // let file = $("#file")[0];
            // file.value = image_data_url;

            // Stop the video stream
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        }
    });
    $("#post-btn13").click(function(event){
        event.preventDefault();
        let image_data_url = canvas.toDataURL('image/jpeg');
        let des=$("#post-desc13").val();
    console.log(image_data_url);
    $.ajax({
    type:"post",
    url:"save1.php",
    data:{img:image_data_url,d:des},
    success:function(res){
    //   document.write(event);
    //     window.close();

    if(res==1 || res==0){
        alert('error');
      }
   
      else{
        if (sd==1) {
            stream.getTracks().forEach(track => track.stop());
            $("#post-desc13").val('');
        }  
        $("#video").show();
        $("#click-photo").show();
        $("#show").hide();
        $('#post-modal12').fadeOut();
        $("#post-desc12").val('');
        $("#upload-post-pic").val('')
        follow(res) 
        
      }
        
    // $('#test').html("<a href="+event+">download</a>");

    }

});

    })

      $("#post-btn12").click(function(event){
        event.preventDefault();
        let formData = new FormData();
        formData.append('idesc', $("#post-desc12").val());
        formData.append('ufile', $("#upload-post-pic")[0].files[0]);  
        $.ajax({
            type:"post",
            url: "save.php",
            data: formData,
            contentType: false, 
            processData: false,
            success: function(res){
                if(res==1){
                  alert('error');
                }
                else if(res==0){
                  alert('Add photo first')
                }
                else{
                  $('#post-modal12').fadeOut();
                  $("#post-desc12").val('');
                  $("#upload-post-pic").val('')     
                    follow(res)
                  
                }
            }
        })
    }) 


    $(document).on('click', function(event) {
        if ($(event.target).is('#post-modal12')) {
            if (x==1) {
                stream.getTracks().forEach(track => track.stop());
                $("#post-desc13").val('');
                $("#video").show();
                $("#click-photo").show();
                $("#show").hide();
              $('#post-modal12').fadeOut();
              $("#post-desc12").val('');
              $("#upload-post-pic").val('')

            }
            else{
                $("#video").show();
                $("#click-photo").show();
                $("#show").hide();
              $('#post-modal12').fadeOut();
              $("#post-desc12").val('');
              $("#upload-post-pic").val('')
            }
         
        }
      });










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