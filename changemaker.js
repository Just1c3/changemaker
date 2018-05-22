
$(document).ready(function(){
    $(".hide").hide();
    $("#calculate").on("click",function(){
        $("#cloud").show();
        $("#cloud").animate({"height":"150%", "width":"150%","left":"-30%", "top":"-25%"},1000);
        $("#cloud").delay(400).fadeOut(1000);
        $("body").delay(400).css({"background-image":"url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Cumulus_Clouds_over_Yellow_Prairie2.jpg/1200px-Cumulus_Clouds_over_Yellow_Prairie2.jpg)","background-size":"100%"});
        $("#search").show();
        $(this).hide();
    });
    $("#signin").on("click", function(){
        showenters();
    });
    $("#createacc").on("click", function(){
        showenters();
    });

});


function showenters(){
    $("#mask").show();
    $("#enter").show();
}

var Listofkinds=["Mexican","Fast Food","Thai","Indian", "American", "Burger", "Pizza", "Chinese", "Italian", "Japanese", "Sandwhich", "Sushi",
"Breakfast", "Desert", "Bakery"];