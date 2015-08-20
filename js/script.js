$(document).ready(function() {
	
	var deviceAgent = navigator.userAgent.toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
	if (!agentID) {
		navigator.geolocation.getCurrentPosition(geoOK, geoNOK, {maximumAge: 900000});
	}else{
		$('nav').css('padding-top','15px');
		$( "body" ).addClass('ios')			
	}
	console.log('####',$('body .btn-liste-map p.titre ').width());
	
});


function geoOK(position) {
	console.log("Récupération géolocalisation OK", position);
}

function geoNOK() {
	console.log("no position detected");
}

//vérification du remplissage de l'impact et de l'ampleur de la zone
//retour true si les champs sont remplis, false sinon
function getSubmit() {
	if ($(".action-vote span.selected").length > 0 && $(".action-note span.selected").length > 0) {
		$(".btn-action-soumettre").addClass("ok");
		return true;
	} else {
		return false;
	}


}

$(document).ready(function() {		
	
	$(".action-vote span").on("click", function () {
		$(".action-vote span").removeClass("selected");
		$(this).addClass("selected");
		getSubmit();
	});

	$(".action-note span").on("click", function () {
		$(".action-note span").removeClass("selected");
		$(this).addClass("selected");
		getSubmit();
	});
	
	$(".btn-action-soumettre").on("click", function () {
		if (getSubmit() == false) return false;
		
		$(".btn-action-soumettre").addClass("encours");

		
		//enregistrement en session
	    sessionStorage.setItem("impact", $(".action-vote span.selected").attr("id"));
	    sessionStorage.setItem("ampleur", $(".action-note span.selected").attr("id"));
	    
	    $(".navbar").slideUp("fast");
	    $(".container").slideUp();
	    //envoi de toutes les informations en JSON
	    $(".btn-action-soumettre .titre").html("Envoi de la zone<br>en cours...");
	    uploadPhoto();
	    
	    //renvoi sur recapitulatif.html
		//window.open("recapitulatif.html",'_self');
		
	});




	$( ".btn-fbk" ).click(function(){
		
		//faceBook
		var fbLoginSuccess = function (userData) {
			console.log("UserInfo: " + JSON.stringify(userData));
			facebookConnectPlugin.getLoginStatus(
				function (status) {
					console.log("current status: " + JSON.stringify(status));
					
				}
			);
		};

		facebookConnectPlugin.login(["public_profile"],
			fbLoginSuccess,
			function (error) { console.log("" + error) }
		);
		
		// Fin faceBook
	});
	
	$( ".btn-twt" ).click(function(){
		//Twitter
		
		// Fin twitter
	});
	

	
});



/* function slide() {
    window.plugins.nativepagetransitions.slide({
        "href" : "accueil.html"
    });
} */
