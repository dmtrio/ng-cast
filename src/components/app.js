angular.module('video-player')


.component('app', {
  templateUrl: 'src/templates/app.html', 
  
  controller: function(youTube) {
    
    
    this.searchResults = function(videos) {
      
      this.currentVideo = videos[0];
      this.videos = videos;
      
    };
    
    youTube.search('', this.searchResults.bind(this));
    
    this.result = function(query) {
      console.log('called');
      youTube.search(query, this.searchResults.bind(this));
    }.bind(this);
    
    this.key = window.YOUTUBE_API_KEY;

    this.query = '';
    
    this.selectVideo = function(clickedVideo) {
      this.currentVideo = clickedVideo;

    }.bind(this);
  },
});





