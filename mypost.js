$(document).ready(function(){

    $("#logoutlist").hide();
    show();
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
                    let x="Welcome".concat(" ",data.a_name);
                    let y=data.pro_pic;
                    $("#fuser").text(x);
                    $("#logoutpost").attr("src",y)
                }
            }
        })
    };
    function show(){
        $.ajax({
            type: "post",
            url:"mypost.php",
            data:{},
            success:function(res){
                $("#p_table").html(res);  
                $(".delete").hide();
            }
        })
    }
    $("#logoutpost").click(function(){
        $("#logoutlist").slideToggle()
    })

   
        // var clicks = 0;
        // var timer = null;
    
        // $(document).on("click",".lk",function(){
        //     clicks++; // increment the counter
        //     let x=$(this).data('id1');  
        //     let y=0 
        //     let k="#-"
        //     let result1=k.concat(x) 
        //     if (clicks === 1) {
        //         $(result1).addClass('highlight');
        //         clearTimeout(timer); // cancel the single click event
        //         timer = setTimeout(function() {
        //             // single click event
        //             $.ajax({
        //                 type: "post",
        //                 url:"like.php",
        //                 data:{a:x,b:y},
        //                 success:function(res){
        //                     let v="#"
        //                     let result=v.concat(x)
        //                     $(result).text(res);
        //                 }
        //             })
        //             clicks = 0; // reset the counter
        //             $(result1).removeClass('highlight');
        //         }, 500); // wait 250ms before triggering single click event
        //     } else if (clicks === 2) {
        //         $(result1).removeClass('highlight');
        //         $(result1).addClass('highlight1');
        //         clearTimeout(timer); // cancel the single click event
        //         // double click event 


        //         let y=1  
        //         timer = setTimeout(function() {
        //             // single click event
        //             $.ajax({
        //                 type: "post",
        //                 url:"like.php",
        //                 data:{a:x,b:y},
        //                 success:function(res){
        //                     let v="#"
        //                     let result=v.concat(x)
        //                     $(result).text(res);
        //                 }
        //             })
        //             clicks = 0; // reset the counter
        //             $(result1).removeClass('highlight1');
        //         }, 500); 

        //     }
        // });

        $(document).on('click','.com',function(){
            let x=$(this).data('id');
            comment(x)
            // $.ajax({
            //     type:"post",
            //     url:"comment.php",
            //     data:{ID:x},
            //     success:function(res){
            //         $("#lm").html(res);
            //         $('.modal-container').fadeIn();
            //         $('body').css('overflow', 'hidden');
            //     }
            // })
        })

        function comment(j){
            $.ajax({
                type:"post",
                url:"comment.php",
                data:{ID:j},
                success:function(res){
                    $("#lm").html(res);
                    $('.modal-container').fadeIn();
                    $('body').css('overflow', 'hidden');
                    $(".comment-form").hide();
                    

                }
            })
        }

        $(document).on('click', function(event) {
            if ($(event.target).is('.modal-container')) {
              $('.modal-container').fadeOut();
              $('body').css('overflow', 'auto');
            }
          });

    // $(document).on('click','.comment-btn',function(event){
    //     event.preventDefault();
    //     let x=$(this).data('idi');
    //     let y=$(".comment-input").val();
    //     if(y==""){
    //         alert("please write something")
    //     }
    //     else{
    //         $.ajax({
    //             type:"post",
    //             url:"scom.php",
    //             data:{id:x,com:y},
    //             success:function(res){
    //                 let k='#c'
    //                 let result=k.concat(x)
    //                 $(result).html(res);
    //                 $(".comment-input").val('')
    //                 comment(x)

    //             }
    //         })
    //     }
    // })
        
    $("#manpo").click(function(){
        $(".delete").toggle();

    })

    $(document).on("click",".delete",function(){
            var s=$(this).data('id');
            $.ajax({
                type:"post",
                url: "delpos.php",
                data:{id:s},
                success:function(res){
                    if(res==1){
                        show();
                    }
                    else{
                        alert(res)
                    }

                }
            })
    })

    $(document).on('click','.del_com',function(){
        let x=$(this).data('id2')
        let ar=x.split(" ");
        let a=ar[0];
        let b=ar[1];
        $.ajax({
            type:"post",
            url:"delcom.php",
            data:{p_id:a,c_id:b},
            success:function(res){
                if(res=='some error 1' || res=='some error 2'){
                    alert('some error');
                }
                else{
                    let k='#c'
                    let result=k.concat(a)
                    $(result).html(res);
                    
                    comment(a)
                }

            }
        })
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