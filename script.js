

$("#modal").hide();

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


$("#showModal").on("click",function(){
     $("#modal").toggle();
    $("#modal").css("backdrop-filter","blur(9px)")
})

console.log(h);