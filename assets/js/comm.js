$(function () {
  // BESTITEM 카테고리
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

  // 제품 상세페이지 가격
  $(".item_option label:first-child").addClass("active");

  $(".item_option .option_col label").on("click", function () {
    $(".item_option label").removeClass("active");
    $(this).addClass("active");
  });

  $('input[type="radio"]').change(function () {
    var selectedPrice = $(this).val();

    $(".item_price").text("₩" + selectedPrice);
  });

  // 제품 상세페이지 설명 탭
  $(document).ready(function () {
    $(".details_nav li:first-child").addClass("active");
    $(".details_return, .details_review, .details_qna").hide();
    $(".details_txt").show();

    $(".details_nav .details_col li").on("click", function () {
      $(".details_nav .details_col li").removeClass("active");
      $(this).addClass("active");

      var index = $(this).index();

      $(".details_txt, .details_return, .details_review, .details_qna").hide();

      switch (index) {
        case 0:
          $(".details_txt").show();
          break;
        case 1:
          $(".details_return").show();
          break;
        case 2:
          $(".details_review").show();
          break;
        case 3:
          $(".details_qna").show();
          break;
      }
    });
  });
});
