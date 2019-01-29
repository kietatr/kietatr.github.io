//  Menu open/close
function toggleMenuButton(el) {
	el.classList.toggle("close");
	var nav = document.querySelector("nav");
	nav.classList.toggle("nav-open");
}

function closeNav() {
	var nav = document.querySelector("nav");
	nav.classList.remove("nav-open");
	var menuButton = document.querySelector(".menu-button");
	menuButton.classList.remove("close");
}

// Smooth scrolling to sections
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// Parallax.js
var Hi = document.querySelector("#Hi");
var parallaxHi = new Parallax(Hi);

// Fade in/out when scrolling
// https://www.kirupa.com/animations/creating_scroll_activated_animations.htm

var isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function() {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var sectionContents = document.querySelectorAll(".section-content *:not(.view-project)");

function scrolling(e) {
  for (var i = 0; i < sectionContents.length; i++) {
    var sectionContent = sectionContents[i];

    if (isPartiallyVisible(sectionContent)) {
      sectionContent.classList.add("active");
    } 
    else {
      sectionContent.classList.remove("active");
    }
  }
}

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}