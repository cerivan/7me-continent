$(document).ready(function() {		
	
	
	$( ".btn-action-photo-click" ).click(function(){
		getImage();
	});
	$( ".btn-fbk" ).click(function(){
		
		//faceBook
		var fbLoginSuccess = function (userData) {
			alert("UserInfo: " + JSON.stringify(userData));
			facebookConnectPlugin.getLoginStatus(
				function (status) {
					alert("current status: " + JSON.stringify(status));
					
				}
			);
		};

		facebookConnectPlugin.login(["public_profile"],
			fbLoginSuccess,
			function (error) { alert("" + error) }
		);
		
		// Fin faceBook
	});
	
	$( ".btn-twt" ).click(function(){
		//Twitter
		
		// Fin twitter
	});
	

	
});



function slide() {
    window.plugins.nativepagetransitions.slide({
        "href" : "accueil.html"
    });
}
