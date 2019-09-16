'use strict'
jQuery(function(){
	$('.layer').on('inview',function(event,isInView,visiblePartX,visiblePartY){
		if(isInView){
   			if(visiblePartY == 'both'){
				$('.layer').addClass('is_active');
				console.log('practice');
		}
   }});

   $(window).on('load', function() {
	   console.log('load!');
   });
});
