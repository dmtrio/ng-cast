angular.module('video-player')

.component('search', {
  templateUrl: 'src/templates/search.html', 
  
  bindings: {
    query: '=',
    result: '='
  },

  controller: function($scope) {
    
    
  }
});


//property query to be picked up from input field
