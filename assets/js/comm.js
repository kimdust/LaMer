$(function () {
  $(".category swiper-slide:first-child").addClass("active");

  $(".category swiper-slide a").on("click", function () {
    $(".category swiper-slide").removeClass("active");
    $(this).parent().addClass("active");
  });
});
