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

  $(".item_option label:first-child").addClass("active");

  $(".item_option .option_col label").on("click", function () {
    $(".item_option label").removeClass("active");
    $(this).addClass("active");
  });

  $('input[type="radio"]').change(function () {
    var selectedPrice = $(this).val();

    $(".item_price").text("₩" + selectedPrice);
  });

  $(".details_nav li:first-child").addClass("active");

  $(".details_nav .details_col li").on("click", function () {
    $(".details_nav .details_col li").removeClass("active");
    $(this).addClass("active");
  });
});
