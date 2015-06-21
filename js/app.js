// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

/*    .controller('imageController', function($scope, $cordovaCamera, $cordovaFile) {
      $scope.images = [];

      $scope.addImage = function() {
        console.log("add image");

        $scope.images = [];

        $scope.addImage = function() {
// 2
          var options = {
            destinationType : Camera.DestinationType.FILE_URI,
            sourceType : Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY
            allowEdit : false,
            encodingType: Camera.EncodingType.JPEG,
            popoverOptions: CameraPopoverOptions
          };
// 3
          $cordovaCamera.getPicture(options).then(function(imageData) {

// 4
            onImageSuccess(imageData);

            function onImageSuccess(fileURI) {
              createFileEntry(fileURI);
            }

            function createFileEntry(fileURI) {
              window.resolveLocalFileSystemURL(fileURI, copyFile, fail);
            }

// 5
            function copyFile(fileEntry) {
              var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);
              var newName = currentdate.getDate() + "_"
                  + (currentdate.getMonth()+1)  + "_"
                  + currentdate.getFullYear() + "_"
                  + currentdate.getHours() + "_"
                  + currentdate.getMinutes() + "_"
                  + currentdate.getSeconds();

              window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(fileSystem2) {
                    fileEntry.copyTo(
                        fileSystem2,
                        newName,
                        onCopySuccess,
                        fail
                    );
                  },
                  fail);
            }
// 6
            function onCopySuccess(entry) {
              $scope.$apply(function () {
                $scope.images.push(entry.nativeURL);
              });
            }

            function fail(error) {
              console.log("fail: " + error.code);
            }

            function makeid() {
              var text = "";
              var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

              for (var i=0; i < 5; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
              }
              return text;
            }

          }, function(err) {
            console.log(err);
          });
        }

      }

      $scope.urlForImage = function(imageName) {
        console.log("get correct path for image");
      }
    });*/


function ClicBouton3(){
  alert("The user clicked me!...");
}

/*function capturePhoto(){
  // Take picture using device camera and retrieve image as base64-encoded string
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
    destinationType: destinationType.DATA_URL });
}*/

function callAnotherPage($scope)
{
  //alert("Inside callAnotherPage");
  window.location = $scope;
}

$( document ).ready(function() {
    function displayPhoto() {
        // Uncomment to view the image file URI
        //console.log(imagePath);
        //alert(imageURI);


        // Get image handle
        //
        // var preview = document.getElementById('preview');

        // Unhide image elements
        //
        //preview.style.display = 'block';
        var dataImage = sessionStorage.getItem('path')
        //alert(dataImage);
        // Show the captured photo
        // The in-line CSS rules are used to resize the image
        //
        //preview.src = "data:image/jpeg;base64," + dataImage;//dataImage;//"file:///storage/emulated/0/Android/data/com.ionicframework.septiemecontinent2819418/cache/1433257980474.jpg";
        // alert(imagePath);
        /*var dataImage = localStorage.getItem('imgData');
         document.getElementById('preview').src = "data:image/jpeg;base64," + imagePath;//dataImage;*/
        znPht = $(".zone-photo").width();
        newSrc = "<img id='preview' src='data:image/jpeg;base64," + dataImage + "' alt='' class='img-responsive'/>";
        $(".zone-photo").append(newSrc);

        $("#preview").css("width" ,  znPht);
        $(".photo-layer").css("width" ,  znPht);

        $( window ).resize(function() {
            znPht = $(".zone-photo").width();
            $("#preview").css("width" ,  znPht);
            $(".photo-layer").css("width" ,  znPht);
        });
   }
    displayPhoto();

});


function getBase64Image(img) {
  // Create an empty canvas element
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  // Copy the image contents to the canvas
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  // Get the data-URL formatted image
  var dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}