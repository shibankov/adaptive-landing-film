$(document).ready(function(){
  /*МЕНЮ БУРГЕР*/
  $('.header__burger').click(function(event){
    $('.header__burger,.header__menu').toggleClass('active');
    /*Доделать чтобы не было прокрутки при выезжающем меню*/
    $('.wrapper','body').toggleClass('lock');
  });
  /*ПАРАЛЛАХ*/ 
  $('.main-screen').parallax({imageSrc: 'img/main-screen/01.jpg'});
  /*СЛИК СЛАЙДЕР*/ 
  $('.slider__body').slick({
    dots:true,
    arrows:false,
    accessibility:false,
    adaptiveHeight:true,
    slidesToShow:1,
    slidesToScroll:1,
    speed:500,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnFocus:true,
    pauseOnHover:true,
    pauseOnDotsHover:true,
    waitForAnimate:false,
    centerMode:false,
  });
});
/*map*/
function initMap() {
  // The location of Uluru
  var uluru = {lat:53.20066, lng:45.00464};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 8, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
/*wow*/
new WOW().init();
}
