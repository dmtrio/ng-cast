angular.module('video-player')
.component('videoList', {
  templateUrl: 'src/templates/videoList.html',
  
  bindings: {
    videos: '<',
    onClick: '='
  },

  controller: function() {
    
  }
});




// .controller('video-list', ['', function($scope) {
//   $scope.videos = window.exampleVideoData;

//   //map function to call each video list entry
  
// }]);



