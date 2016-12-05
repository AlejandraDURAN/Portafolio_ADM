
$(document).ready(function(){
	// menu
	$('.navicon').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('navicon--active');
		$('.toggle').toggleClass('toggle--active');
	});

	  $("#myCarousel").carousel({interval: 2000});
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#myCarousel").carousel(3);
    });
    $(".item5").click(function(){
        $("#myCarousel").carousel(4);
    });
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });

});

//caratula

(function() {
    var lineMaker = new LineMaker({
            parent: { element: document.body, position: 'append' },
            position: 'fixed',
            lines: [
                {top: 0, left: '0', width: '20vw', height: '100vh', color: '#F8D9E8', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 0, direction: 'TopBottom' }},
                {top: 0, left: '20vw', width: '20vw', height: '100vh', color: '#fff', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 150, direction: 'BottomTop' }},
                {top: 0, left: '40vw', width: '20vw', height: '100vh', color: '#F8D9E8', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 300, direction: 'TopBottom' }},
                {top: 0, left: '60vw', width: '20vw', height: '100vh', color: '#fff', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 450, direction: 'BottomTop' }},
                {top: 0, left: '80vw', width: '20vw', height: '100vh', color: '#F8D9E8', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 600, direction: 'TopBottom' }}
            ]
    });

    //skill bars
    
    setTimeout(function() {
        lineMaker.animateLinesOut();
    }, 500);
})();

var posicion = $("#abilities").position().top;
    var done = false;

        $(window).scroll(function(){

            if (done) {
                return;
            }

            var scrollTop = $(window).scrollTop();

            if( (scrollTop > posicion ) ){

                $('.skillbar').each(function(){
                $(this).find('.skillbar-bar').animate({
                width:$(this).attr('data-percent')
                }, 2000);
            });
                    
            done = true;
            }

        });

        
    


