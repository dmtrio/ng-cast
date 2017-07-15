angular.module('video-player')
.service('youTube', function($http) {
    
  this.search = function(query, cb) {
    console.log('youTube.search called ');
    return $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: window.YOUTUBE_API_KEY,
        type: 'video',
        max: '5',
        part: 'id,snippet',
        q: query
      }
    }).then(function (data) {
      cb(data.data.items);
    });
  // .error( function () {
  //   console.log('Search error');
  // });
  
    
    // var config = { key: window.YOUTUBE_API_KEY, q: query, maxResults: 5, part: 'snippet', type: 'video' };
    
    // $http.get('https://www.googleapis.com/youtube/v3/videos', config  
    // // return $http({
    // //   method: 'GET',
    // //   url: 'https://www.googleapis.com/youtube/v3/search',
    // //   params: {
    // //     key: window.YOUTUBE_API_KEY,
    // //     q: query,
    // //     max: 5,  
    // //     part: 'snippet'
    // //   }
      
    //   ).then(function successCallback(response) {
    //     () => console.log('success', response);
    // // this callback will be called asynchronously
    // // when the response is available
    //   }, function errorCallback(response) {
    //     () => console('error', response);
    // // called asynchronously if an error occurs
    // // or server returns response with an error status.
    //   });
  }; 
  
});
