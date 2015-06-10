$(document).ready(function() {		
	
	
	$( ".btn-action-photo" ).click(function(){
		getImage();
	});
	$( ".btn-fbk" ).click(function(){
		
		//faceBook
		FB.init({
        appId: '1680952628801790',
        nativeInterface: CDV.FB,
        useCachedDialogs: false
    });
    FB.getLoginStatus(handleStatusChange);
    authUser();
    updateAuthElements();
		
		// Fin faceBook
	});
	
	
	
	
	
	
	
	
});