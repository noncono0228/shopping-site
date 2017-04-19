$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
       {
        loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});

$(function(){
    $(document).ready(function(){

      $("#sp_menu_btn").click(function () {
        $(this).next().slideToggle();
      });

    });
  });

$(document).ready(function(){
  $("#next_icon_category").click(function(){
    if($(this).hasClass("rotate")){
       $(this).removeClass("rotate");
    }else{
      $(this).addClass("rotate");
    }
    $(".categories").slideToggle();
  });
});

$(document).ready(function(){
  $("#next_icon_category2").click(function(){
    if($(this).hasClass("rotate")){
       $(this).removeClass("rotate");
    }else{
      $(this).addClass("rotate");
    }
    $(".categories").slideToggle();
  });
});

$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});
