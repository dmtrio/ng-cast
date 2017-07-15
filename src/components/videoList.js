angular.module('video-player')
.component('videoList', {
  templateUrl: 'src/templates/videoList.html',
  
  bindings: {
    videos: '<',
    select: '=',
    onClick: '='
  },

  controller: function() {
    console.log(this);
    
  }
});




// .controller('video-list', ['', function($scope) {
//   $scope.videos = window.exampleVideoData;

//   //map function to call each video list entry
  
// }]);



