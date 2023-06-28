new kursor({
  type: 4,
  removeDefaultCursor: true,
  color: "#696eff",
  // el: ".kursor",
});
SmoothScroll({
  // Scrolling Core
  frameRate: 150, // [Hz]
  animationTime: 800, // [px]
  stepSize: 120, // [px]

  // Acceleration
  accelerationDelta: 50, // 50
  accelerationMax: 2, // 3

  // Keyboard Settings
  keyboardSupport: true, // option
  arrowScroll: 50, // [px]

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,

  // Other
  touchpadSupport: false, // ignore touchpad by default
  fixedBackground: true,
  excluded: "",
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  if (window.innerWidth > 769) {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }
};
$(window).on("load", function () {
  $("#preloader").fadeOut();
  $("#preloader").addClass("opacity-0", 2500);
});
const c = new countUp.CountUp("stat-1", 10);
const d = new countUp.CountUp("stat-2", 69);
const e = new countUp.CountUp("stat-3", 170);
var $test = $("#gallery-1");
$test.waypoint(function () {
  c.start();
  d.start();
  e.start();
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: 1000,
  // nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
var myCarousel = document.querySelector("#carouselExampleControls");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 4000,
});
let fy = $(".footer-year");

let x = new Date().getFullYear();

$("#footer-year").text(x);
