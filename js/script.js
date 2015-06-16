$(document).ready(function() {		
	
	
	$( ".btn-action-photo" ).click(function(){
		getImage();
	});
	$( ".btn-fbk" ).click(function(){
		
		//faceBook
		

		facebookConnectPlugin.login(["public_profile"],
			function (success) { alert("s :" + success) },
			function (error) { alert("" + error) }
		);
		facebookConnectPlugin.getLoginStatus(function (success) { alert("s :" + success) }, function (error) { alert("" + error) })
		// Fin faceBook
	});
	
	$( ".btn-twt" ).click(function(){
		//Twitter
		
		// Fin twitter
	});
	
	
});