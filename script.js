

$("#content>div").hide();
$("#user").show();


$("#sidebar>button").on("click", function () {
    $("#content>div").hide();
   $($(this).attr("for")).show();
   $("#sidebar").toggle(900,function(){
    $("#content").css("width","100%")
})
});


$(".fa-solid").on("click",function(){
    $("#sidebar").toggle(900,function(){
        $("#content").css("width","100%")
    })
})

