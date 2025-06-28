// 穴埋め形式です。空いている箇所を埋めて実装してください

$(function () {
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $(".toggle-btn").on("click", function () {
    $(".top-header").toggleClass("open");
  });

  $(".sub-toggle-btn").on("click", function () {
    $(".sub-header").toggleClass("open");
  });

  /*=================================================
  fade in（画面に表示されたタイミングで処理を実行）
  ===================================================*/
  $(window).scroll(function () {
    $(".about-contents").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + 200) {
        $(this).addClass("fade-in");
      }
    });
 
    $(".works-visual").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + 400) {
        $(this).addClass("fade-in");
      }
    });

    $(".event-detail").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + 350) {
        $(this).addClass("fade-in");
      }
    });
 
    $(".access-container").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + 300) {
        $(this).addClass("fade-in");
      }
    });
 
    $(".commit-container").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + 400) {
        $(this).addClass("fade-in");
      }
    });

    $(".works-container").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + 400) {
        $(this).addClass("fade-in");
      }
    });

    $(".garage-wrapper").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + 400) {
        $(this).addClass("fade-in");
      }
    });

 
  
 
    


  /*=================================================
  slide-left（画面に表示されたタイミングで処理を実行）
  ===================================================*/

    $(".section-title").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + 40) {
        $(this).addClass("slide-left");
      }
    });
 
  });
});







