jQuery(document).ready(function(){

	var $ = jQuery;
 
 	$(".location-position").hide();
 	
	//For the location name you click on
	var location_select = $(".location-select").toArray();

	
	//For the element that contains the location information
	var location_postion = $(".location-position").toArray();

	// on Load
	$(location_postion[0]).show();
	$(location_select[0]).addClass('selected');
	
	$(".location-select").click(function(){
		
		$(".location-position").hide();
	
		var selectIndex = $(this).index();
		
		$(location_postion[selectIndex]).show();

		// toggle selected class
		$(location_select).removeClass('selected');
		$(this).addClass('selected');
		
	});
	

});