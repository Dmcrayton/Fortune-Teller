
$("button").click(function(){
   var yourName = $(".yourName").val();
    var dogName = $(".dogName").val();
     var dogAge = $(".dogAge").val();
$("h2").text("hi "+ yourName + " ," + " "+ dogName +" "+ "will " + "be " + (parseInt(dogAge)+ 31)

);
});
