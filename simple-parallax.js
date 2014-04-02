jQuery(".simpleprx").each(function(){
	jQuery(this).css('visibility', 'hidden');
});

function cubeeffects(){
	jQuery(".simpleprx").each(function(){
		scrollDisplay(this,jQuery(this).data("effect"),jQuery(this).data("delay"));
	});
}

$( window ).scroll(function() {
	cubeeffects();
});

function scrollDisplay(element,effect,timeout){
	scrollTop     = $(window).scrollTop();
	elementOffset = $(element).offset().top;
	distance      = (elementOffset - scrollTop);
	displaydistance=distance - $(window).height()*0.8;
	if (displaydistance<0)  setTimeout(function(){$(element).addClass(effect).css('visibility', 'visible')},timeout);
}

