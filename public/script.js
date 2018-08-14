$(document).ready(function() {
    $(".menu-icon").on("click", function(){
        $("navi ul").toggleClass("showing");
    });
});

$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $("navi").addClass('black')
    }else{
        $("navi").removeClass('black')
    }
});