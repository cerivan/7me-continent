var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
   
   // Wait for device API libraries to load
    //
    document.addEventListener("deviceready",onDeviceReadyCamera,false);

    // device APIs are available
    //
    function onDeviceReadyCamera() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
		sessionStorage.setItem("uuid",device.uuid);	
		
    }    
       
    
	function getImage() {
		// Retrieve image file location from specified source
        navigator.camera.getPicture(storePhoto, function(message) {
				//alert('get picture failed');
			},{
				quality: 30, 
				destinationType: Camera.DestinationType.FILE_URI,
				sourceType: Camera.PictureSourceType.CAMERA
			}
        );
 
    }
    
	//enregistrement de la photo dans la session
    function storePhoto(imageData) {
		sessionStorage.setItem("imageData",imageData);
			
		console.log("image >> ", imageData);
		
		//renvoi vers soumettre
		//document.location.href("soumettre.html");
		window.open("soumettre.html",'_self');
    }
 
	//envoi de la photo en JSON
    function uploadPhoto() {
    
    	imageData = sessionStorage.getItem("imageData");
    
        var options = new FileUploadOptions();
		options.headers = {
			Connection: "close"
		}
        var options = new FileUploadOptions();
        
        options.fileKey="file";
        options.fileName=imageData.substr(imageData.lastIndexOf('/')+1);
        options.mimeType="image/jpeg";

        var params = new Object();
        
        params.lat 		 = sessionStorage.getItem("lat");
        params.lng 		 = sessionStorage.getItem("lng");
		params.uuid      = sessionStorage.getItem("uuid");
		params.ampleur   = sessionStorage.getItem("ampleur");
		params.impact    = sessionStorage.getItem("impact");
		


        options.params = params;
		options.chunkedMode  = false;
        //alert('transferring...');
		
		//console.log(options);
 
 	    var url="http://7eco.cerivan.com/app/post.php";
        var ft = new FileTransfer();
        ft.upload(imageData, url, win, fail, options,true);
		
		   	
    }
 
    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
        //alert(r.response);
        window.open("recapitulatif.html",'_self');
    }

    function fail(error) {
        alert("An error has occurred: Code = " + error.code);
    }
	 

