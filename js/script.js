var navScroll = document.getElementById('navscroll');

// what should we do when scrolling occurs
var runOnScroll =  function(navScroll) {
  // not the most exciting thing, but a thing nonetheless
  document.getElementById('navscroll').addClass("fix-search");
  return;
};

// grab elements as array, rather than as NodeList
var elements = document.querySelectorAll(".nav-scroll");
elements = Array.prototype.slice.call(elements);

// and then make each element do something on scroll
elements.forEach(function(element) {
  window.addEventListener("scroll", runOnScroll);
});
