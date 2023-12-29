$(function () {
  $(".category swiper-slide:first-child").addClass("active");

  $(".category swiper-slide a").on("click", function () {
    $(".category swiper-slide").removeClass("active");
    $(this).parent().addClass("active");
  });

  if ($(window).width() > 1280) {
    $(".category_1280 li:first-child").addClass("active");

    $(".category_1280 .category_list a").on("click", function () {
      $(".category_1280 .category_list li").removeClass("active");
      $(this).parent().addClass("active");
    });
  }
});
