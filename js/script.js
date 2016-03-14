$(document).ready(function() {
  $('.single-item').slick({
    dots: true,
	slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
  });
});

$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});