$(function ()
	{
		$(".aniServicios").hover(function(){
			$(this).find("p").show("slide");
		},function(){$(this).find("p").hide("slide");});

		
		var altoPantalla =screen.height;
		var altoMenu=altoPantalla-125;
		var calculoAltoServicios = (altoPantalla*53)/100;
		var altoServicios=calculoAltoServicios+altoPantalla-600;
	
		
		$(window).scroll(function() {
  		
  		
	  		var scrolltop =$(this).scrollTop();
	  		
	  		if(scrolltop > altoServicios){
	  			
	  		$(".logo img").animate({ width:180, height:180 },"fast");	

  			}
  			if(scrolltop < altoServicios){
	  			
	  			$(".logo img").animate({ width:160, height:160 },"fast");

  			}
  			if(scrolltop > altoMenu){

  				$(".Fixed").show("slow");

  			}
  			if(scrolltop < altoMenu){

  				$(".Fixed").hide("slow");

  			}
  		
  		})
	});