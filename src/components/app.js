angular.module('video-player')


.component('app', {
  templateUrl: 'src/templates/app.html', 
  
  controller: function() {
    this.selectVideo = function(clickedVideo) {
      this.currentVideo = clickedVideo;
    };

    this.searchResults = function() {
      //getter for data
    };

    this.onClick = function() {
      //search
    };

    this.currentVideo = window.exampleVideoData[0];
    // console.log('current video ', this.currentVideo);
    this.videos = window.exampleVideoData;

    this.selectVideo = this.selectVideo.bind(this);
  },
  //$scope.videos: window.exampleVideoData,
});





