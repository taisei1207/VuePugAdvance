'use strict'
jQuery(function(){
	$('.eyecatch').on('inview',function(event,isInView,visiblePartX,visiblePartY){
		// if(isInView){
   		// 	if(visiblePartY == 'both'){
		// 		$('.eyecatch').addClass('is_active');
		// 		console.log('practice');
		// }
   });

   $('.eyecatch').on('inview', function(event, isInView) {
	if (isInView) {
	  // element is now visible in the viewport
	//   console.log('実行');
	  $('.eyecatch').addClass('is_active');
	} else {
	  // element has gone out of viewport
	}
  });

   $(window).on('load', function() {
	   console.log('load!');
   });
});
