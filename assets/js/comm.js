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

  // 리뷰 더보기
  $(".review_all").addClass("clamped");

  $(".read-more-btn").click(function () {
    var $reviewAll = $(".review_all");

    if ($reviewAll.hasClass("clamped")) {
      $reviewAll.removeClass("clamped");
      $(this).text("접기");
    } else {
      $reviewAll.addClass("clamped");
      $(this).text("더보기");
    }
  });

  // 마이페이지 탭
  $(document).ready(function () {
    $(".mypage_tab li:first-child").addClass("active");
    $(".mypage_order, .mypage_info").hide();
    $(".mypage_main").show();

    $(".mypage_tab .mypage_col li").on("click", function () {
      $(".mypage_tab .mypage_col li").removeClass("active");
      $(this).addClass("active");

      var index = $(this).index();

      $(".mypage_main, .mypage_order, .mypage_info").hide();

      switch (index) {
        case 0:
          $(".mypage_main").show();
          break;
        case 1:
          $(".mypage_order").show();
          break;
        case 2:
          $(".mypage_info").show();
          break;
      }
    });
  });

  // GSAP 스크롤트리거
  gsap.registerPlugin(ScrollTrigger);

  if ($(window).width() > 1280) {
    function fadeInOnScroll(element) {
      gsap.from(element, {
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 80%",
          markers: true,
          scrub: true,
        },
      });
    }
  } else {
    function fadeInOnScroll(element) {
      gsap.from(element, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 70%",
          end: "bottom 70%",
          markers: true,
          scrub: true,
        },
      });
    }
  }

  fadeInOnScroll(".bestitem");
  fadeInOnScroll(".benefits");
  fadeInOnScroll(".blueheart");
  fadeInOnScroll(".instagram");

  // 제품 카테고리별
  document.addEventListener("DOMContentLoaded", function () {
    const categoryLinks = document.querySelectorAll(
      "#categoryContainer .mySwiper a"
    );
    const items = document.querySelectorAll(".item ul li");

    // 카테고리 클릭 이벤트 추가
    categoryLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        // 선택된 카테고리 이름 가져오기
        const categoryName = e.target.innerText.trim();

        // 모든 아이템 숨기기
        items.forEach(function (item) {
          item.style.display = "none";
        });

        // 선택된 카테고리에 해당하는 아이템만 표시
        items.forEach(function (item) {
          const itemCategories = item.getAttribute("data-category").split(" ");

          // 선택된 카테고리가 아이템의 카테고리 중 하나에 포함되는 경우 표시
          if (
            itemCategories.includes(categoryName) ||
            categoryName === "전체"
          ) {
            item.style.display = "block";
          }
        });
      });
    });
  });
});
