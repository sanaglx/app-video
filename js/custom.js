$(function($) {
	$(".owl-main").owlCarousel({
		items: 1,
		autoplay: false,
		nav: true,
		navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
	});

	$(".owl-comments").owlCarousel({
		nav: true,
		navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
		responsive:{
			0:{
				items:1,
			},
			767:{
				items:2,
			}
		},
	});

	$(".owl-brands").owlCarousel({
		responsive:{
			0:{
				items:1,
			},
			767:{
				items:4,
			},
			991:{
				items:7,
			}
		},
		dots: false,
	});

	$(".owl-about").owlCarousel({
			items:1,
		autoplay: false,
		nav: true,
		navText: ["<i class='fa fa-chevron-circle-left' aria-hidden='true'></i>Назад", "Вперед<i class='fa fa-chevron-circle-right' aria-hidden='true'></i>"],
		dots: false,
	});


	$('nav .open, nav > div > .fa').click(function(event) {
		$('nav div').toggleClass('vis');
	});

	$('.open-filter').click(function() {
		$('.filter').toggleClass('vis1');
	});
	$('.close').click(function() {
		$('.filter').removeClass('vis');
		$('.filter').removeClass('vis1');
	});

	try{
		$('#image500').addimagezoom({ 
			zoomrange: [3,10], 
			magnifiersize: [300,300], 
			
		// additional options 
		}) ;
		$('#multizoom1').addimagezoom({ 
			zoomrange: [3,10], 
			magnifiersize: [300,300], 
			
		// additional options 
		}) ;
	} catch(error){

	}


});
/***************************/
var nonLinearSlider = document.getElementById('nonlinear');

try{
noUiSlider.create(nonLinearSlider, {
	connect: true,
	behaviour: 'tap',
	start: [ 0, 4000 ],
	range: {
		// Starting at 500, step the value by 500,
		// until 4000 is reached. From there, step by 1000.
		'min': [ 0 ],
		'10%': [ 500, 500 ],
		'50%': [ 4000, 1000 ],
		'max': [ 10000 ]
	}
});

var nodes = [
	document.getElementById('lower-value'), // 0
	document.getElementById('upper-value')  // 1
];

// Display the slider value and how far the handle moved
// from the left edge of the slider.
nonLinearSlider.noUiSlider.on('update', 
function ( values, handle, unencoded, isTap, positions ) {
	nodes[handle].value = values[handle]
	// + ', ' + positions[handle].toFixed(2) + '%';
});
} catch(error){

}

/************************************************** */

$('.btn-main-search').click(function(){
	$(this).addClass("rubberBand");
	setTimeout(sbros,2000)
})
function sbros(){
	$('.btn-main-search').removeClass("rubberBand");
}




