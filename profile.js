$(document).ready(function(){
    $("#logoutlist").hide();
    user(); 
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
                    $("#opo").text(data.a_name);
                    $("#uname").text(data.u_name);
                    $("#logoutpost").attr("src",data.pro_pic)
                    $("#profile_image").attr("src",data.pro_pic)
                    $("#bio").text(data.pro_bio);
                    $("#p_num").text(data.p_num);
                    followlist()
                    // $("#p_flo").text(data.follower);
                    // $("#p_fli").text(data.followin);

                }
            }
        })
    };



    function followlist(){
        $.ajax({
            url:"showlist.php",
            type:"post",
            success:function(res){
                    var data1 = $.parseJSON(res);
                $("#p_flo").text(data1.follower);
                $("#p_fli").text(data1.following);
            }
        })
    }
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

        //   // Get the modal, modal content, and follower list elements
        //   const $modal = $('.follow-block');
        //   const $modalContent = $('.follow-content');
        //   const $followerList = $('#follower-list');
        //   const $modalTrigger = $('#follower-modal-trigger');
    
        //   // Sample follower data (replace with your actual data)
        //   const followers = [
        //     { id: 1, name: 'John Doe', username: 'johndoe' },
        //     { id: 2, name: 'Jane Doe', username: 'janedoe' },
        //     { id: 3, name: 'Bob Smith', username: 'bobsmith' },
        //     // ...
        //   ];
    
        //   // Generate the follower list dynamically
        //   $.each(followers, (index, follower) => {
        //     const $followerItem = $('<li>').html(`<a href="#">${follower.name} (@${follower.username})</a>`);
        //     $followerList.append($followerItem);
        //   });
    
          // Show the modal when the button is clicked
          $('.label2').on('click', function() {
            let x=$(this).data('id')
            $.ajax({
                url:"folist.php",
                type:"post",
                data:{t:x},
                success:function(res){
                    console.log(res)
                    $(".follow-content").html(res)
                        $('.follow-block').show();

                }
            })
           
          });
          
    
          // Close the modal when the close button is clicked
          $(document).on('click','.closef', function(){
            $('.follow-block').hide();
          })

          $(document).on('keyup','#follower-search',function(){
            let x=$(this).data('fl');
            let y=$(this).val();
            $.ajax({
                url:"serl.php",
                type:"post",
                data:{n:x,m:y},
                success:function(res){
                    $(".follower-list").html(res)
                }
            })
          })

        //   $('.follow-content').find('.close').on('click', () => {
        //     $('.follow-block').hide();
        //   });


        $(".clickable-image").click(function() {
            $.ajax({
                url:"edit.php",
                type:"post",
                success:function(res){
                    $("#updateUserInfoFormf").html(res);
                    $("#myModalf").css("display", "block");
                }
            })

        });
      
        // Close modal on close button click
        $(".closef").click(function() {
            $("#myModalf").css("display", "none");
        });
      
        // Close modal if clicked outside of it
        $(window).click(function(event) {
            if (event.target == $("#myModalf")[0]) {
                $("#myModalf").css("display", "none");
            }
        });
      
        // Handle form submission
        $(document).on('submit',"#updateUserInfoFormf",function(event) {
            event.preventDefault(); // Prevent default form submission behavior
            let formData = new FormData(this);
            formData.append('rname', $('#name').val());
            formData.append('rnum', $('#number').val());
            formData.append('rdob', $('#dob').val());
            formData.append('rbio', $('#bio_f').val());
            formData.append('rgen', $("#gender").val());
            const x=$("#profileImage")[0].files[0];
            if(x){
                formData.append('rfile', x); 
            }
            $.ajax({
                type:"post",
                url: "update.php",
                data: formData,
                contentType: false, 
                processData: false,
                success:function(res){
                    if(res==0){
                        user();
                        $("#myModalf").css("display", "none");

                    }
                    else{
                        alert(res);
                    }
                }
            });

            // Here you can add AJAX code to send the form data to your server
          
        });
        $('#profileImage').on('change', function() {
          const file = $(this)[0].files[0];
          const reader = new FileReader();
      
          reader.onload = function(event) {
            $('#profileImagePreview').attr('src', event.target.result);
          };
      
          reader.readAsDataURL(file);
        });
      });