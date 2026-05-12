$(document).ready(function () {
  // introSlider
  $(".introSlider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "ease-in-out",
  });

  $(".marzerSlider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    arrows: true,
    centerMode: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  document.querySelector(".marzerSlider .slick-prev").innerHTML =
    `<i class="fa-solid fa-angle-left"></i>`;

  document.querySelector(".marzerSlider .slick-next").innerHTML =
    `<i class="fa-solid fa-angle-right"></i>`;
});
