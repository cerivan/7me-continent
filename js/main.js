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
		//Transitions
		var options = {
			  "direction"        : "up", // 'left|right|up|down', default 'left' (which is like 'next')
			  "duration"         :  500, // in milliseconds (ms), default 400
			  "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
			  "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
			  "androiddelay"     :  150, // same as above but for Android, default 70
			  "winphonedelay"    :  250, // same as above but for Windows Phone, default 200,
			  "fixedPixelsTop"   :    0, // the number of pixels of your fixed header, default 0 (iOS and Android)
			  "fixedPixelsBottom":   60  // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
			};
			window.plugins.nativepagetransitions.slide(
			  options,
			  function (msg) {console.log("success: " + msg)}, // called when the animation has finished
			  function (msg) {alert("error: " + msg)} // called in case you pass in weird values
			);
		//Fin Transitions
		
    }    
       
    
	function getImage() {
		// Retrieve image file location from specified source
        navigator.camera.getPicture(uploadPhoto, function(message) {
				alert('get picture failed');
			},{
				quality: 50, 
				destinationType: Camera.DestinationType.FILE_URI,
				sourceType: Camera.PictureSourceType.CAMERA
			}
        );
 
    }
 
    function uploadPhoto(imageData) {
    
        var options = new FileUploadOptions();
		options.headers = {
			Connection: "close"
		}
        var options = new FileUploadOptions();
        
        options.fileKey="file";
        options.fileName=imageData.substr(imageData.lastIndexOf('/')+1);
        options.mimeType="image/jpeg";

        var params = new Object();
        
		params.value1 = "test";
		params.value2 = "param";
        options.params = params;
		options.chunkedMode = false;
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
    }

    function fail(error) {
        alert("An error has occurred: Code = " + error.code);
    }
	 

