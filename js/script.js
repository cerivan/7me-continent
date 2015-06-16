$(document).ready(function() {		
	
	
	$( ".btn-action-photo" ).click(function(){
		getImage();
	});
	$( ".btn-fbk" ).click(function(){
		
		//faceBook
		var fbLoginSuccess = function (userData) {
			alert("UserInfo: " + JSON.stringify(userData));
			console.log("UserInfo: " + JSON.stringify(userData));
			facebookConnectPlugin.getAccessToken(function(token) {
				alert("Token: " + token);
				console.log("Token: " + token);
			}, function(err) {
				alert("Could not get access token: " + err);
			});
		}

		facebookConnectPlugin.login(["public_profile"],
			fbLoginSuccess,
			function (error) { alert("" + error) }
		);
		facebookConnectPlugin.getLoginStatus(fbLoginSuccess, function (error) { alert("" + error) });
		// Fin faceBook
	});
	
	$( ".btn-twt" ).click(function(){
		//Twitter
		
		// Fin twitter
	});
	
	
});