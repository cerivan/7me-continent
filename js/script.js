$(document).ready(function() {		
	
	
	$( ".btn-action-photo" ).click(function(){
		getImage();
	});
	$( ".btn-fbk" ).click(function(){
		
		//faceBook
		var fbLoginSuccess = function (userData) {
			alert("UserIf: " + JSON.stringify(userData));
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
		
		// Fin faceBook
	});
	
	$( ".btn-twt" ).click(function(){
		//Twitter
		
		// Fin twitter
	});
	$(".nav navbar-nav li").eq(3).click(function(){
		onDeviceReady();
		function onDeviceReady() {
			navigator.geolocation.getCurrentPosition(onSuccess, onError);
		}



		function onSuccess(position) {
		var longitude = position.coords.longitude;
		var latitude = position.coords.latitude;
		function initialize() {
			var mapProp = {
				center:new google.maps.LatLng(latitude,longitude),
			zoom:5,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		  };
		  var map=new google.maps.Map(document.getElementsByClassName("map-recap"),mapProp);
		}
		google.maps.event.addDomListener(window, 'load', initialize);
		}

		function onError() { alert('onError!'); }
	});
	
	
	
	
});