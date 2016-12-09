$(document).ready(($) => {



// Animated Banner Heading Text

var animationDelay = 2500;

animateHeadline($('.cd-headline'));

function animateHeadline($headlines) {
	$headlines.each(function(){
		var headline = $(this);
		//trigger animation
		setTimeout(function(){ hideWord( headline.find('.is-visible') ) }, animationDelay);
		//other checks here ...
	});
}

function hideWord($word) {
	var nextWord = takeNext($word);
	switchWord($word, nextWord);
	setTimeout(function(){ hideWord(nextWord) }, animationDelay);
}

function takeNext($word) {
	return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
}

function switchWord($oldWord, $newWord) {
	$oldWord.removeClass('is-visible').addClass('is-hidden');
	$newWord.removeClass('is-hidden').addClass('is-visible');
}





// Particle Rendering on Heading

$(function() {
    // $('a.page-scroll').bind('click', function(event) {
    //     var $anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $($anchor.attr('href')).offset().top
    //     }, 1500, 'easeInOutExpo');
    //     event.preventDefault();
    // });


    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      var particleNum = 30;
    }

    particlesJS('particles', {
      particles: {
        color: '#74B4E8',
        shape: 'circle',
        resize: true,
        opacity: 1,
        size: 2.5,
        size_random: true,
        nb: particleNum || 100,
        line_linked: {
          enable_auto: true,
          distance: 250,
          color: '#74B4E8',
          opacity: 0.5,
          width: 2,
          condensed_mode: {
            enable: false,
            rotateX: 600,
            rotateY: 600
          }
        },
        anim: {
          enable: true,
          speed: 2
        }
      },
      interactivity: {
        enable: false
      },
      retina_detect: true
    });
});


skills.forEach((skill) => {
	$('.skills-gallery').append(
		`<div class='skill'>
			<div class='skill-icon' style="background: url(icons/${skill.img_url}); background-size:contain; background-position: center; background-repeat: no-repeat"></div>
			<p>${skill.name}</p>
		</div>`
	)
})





})
