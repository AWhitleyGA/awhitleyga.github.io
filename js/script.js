var navScroll = document.getElementById('navscroll');

// what should we do when scrolling occurs
var runOnScroll =  function(navScroll) {
  // not the most exciting thing, but a thing nonetheless
  if (document.body.scrollTop > 220) {
  document.getElementById('navscroll').classList.add("fix-nav");
  return;
  }
  else {
    document.getElementById('navscroll').classList.remove("fix-nav")
  }
};

// grab elements as array, rather than as NodeList
var elements = document.querySelectorAll(".nav-scroll");
elements = Array.prototype.slice.call(elements);

window.addEventListener("scroll", runOnScroll);
