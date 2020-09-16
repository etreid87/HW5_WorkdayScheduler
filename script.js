$(document).ready(function(){
  
  var currentdate = new Date(); 
  var datetime = (currentdate.getMonth()+1)  + "/" 
              + currentdate.getDate() + "/"
              + currentdate.getFullYear() + " @ "
              + currentdate.getHours() + ":"
              + currentdate.getMinutes() + ":"
              + currentdate.getSeconds();

  $("#currentDay").text(datetime);

      //Assign Click Event
      $("#save").on("click", function () {
        
        console.log(this);
        var text = $(this).val();
        

        //Store Text Enrtries
        localStorage.setItem(text);
    })
    
    $("#textentry1").val(localStorage.getItem("textentry1"));
    $("#textentry2").val(localStorage.getItem("textentry2"));
    $("#textentry3").val(localStorage.getItem("textentry3"));
    $("#textentry4").val(localStorage.getItem("textentry4"));
    $("#textentry5").val(localStorage.getItem("textentry5"));
    $("#textentry6").val(localStorage.getItem("textentry6"));
    $("#textentry7").val(localStorage.getItem("textentry7"));
    $("#textentry8").val(localStorage.getItem("textentry8"));
    $("#textentry9").val(localStorage.getItem("textentry9"));
    $("#textentry10").val(localStorage.getItem("textentry10"));

});




