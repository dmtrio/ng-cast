angular.module('video-player')


.component('app', {
  templateUrl: 'src/templates/app.html', 
  
  controller: function() {
    this.selectVideo = function() {

    };
    this.searchResults = function() {

    };

    this.onClick = function() {

    };

    this.currentVideo = window.exampleVideoData[0];
    console.log('current video ', this.currentVideo);
    this.videos = window.exampleVideoData;
  },
  //$scope.videos: window.exampleVideoData,
});





