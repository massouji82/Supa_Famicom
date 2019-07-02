$(document).ready(function(){
	let count = 0;
	
	$('.buy').on('click', function(){
		count++;
		$('.handlevogn').html(count).css({
			'color': '#228B22',
			'border': 'solid #228B22 2px'
		});
		if(count===1){
			$('#full').toggleClass('fa-shopping-cart fa-cart-arrow-down');
		}
	});
});

// scroll functions
let scrollTimeOut = true,
    lastYPos = 0,
    yPos = 0,
    yPosDelta = 5,
    nav = $('nav.navbar'),
    navHeight = nav.outerHeight(),
    setNavClass = function() {
        scrollTimeOut = false;
        yPos = $(window).scrollTop();
        // add/remove class to navbar when scrolling to hide/show
        if(Math.abs(lastYPos - yPos) >= yPosDelta) {
            if (yPos > lastYPos && yPos > navHeight){
                nav.addClass('hide-nav');
            } else {
                nav.removeClass('hide-nav');
            }
            lastYPos = yPos;
        }
    };

$(window).scroll(function(e){
    scrollTimeOut = true;
});

setInterval(function() {
    if (scrollTimeOut) {
        setNavClass();
    }

}, 500);
