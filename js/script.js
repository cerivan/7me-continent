$(document).ready(function() {		
	
	
	$( ".btn-action-photo" ).click(function(){
		getImage();
	});
	$( ".btn-fbk" ).click(function(){
		
		//faceBook
		var fbLoginSuccess = function (userData) {
			alert("UserInfo: " + JSON.stringify(userData));
			facebookConnectPlugin.getAccessToken(function(token) {
				alert("Token: " + token);
			}, function(err) {
				alert("Could not get access token: " + err);
			});
			postJson(JSON.stringify(userData)));
		}

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
function postJson(jsonTosend); {
	urlToSend = "http://7eco.cerivan.com/app/post.php";
	  $.ajax({
            url: urlToSend,
			data : jsonTosend,
			dataType : "json",
            timeout: 3000,
            success: function(data) {
              alert(data); },
            error: function() {
              alert('La requête n\'a pas abouti'); }
        }); 
	
	
	
	
}