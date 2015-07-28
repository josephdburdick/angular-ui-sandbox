(function(){
  'use strict';

  var app = angular.module('appSlideshow');

  app.factory('slideshowService', function(){
    var slides = [
        { id: 1, imageUrl: 'http://lorempixel.com/400/200', caption: 'lass aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam maximus elementum enim non ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi non nisi elit. Aenean lacinia ipsum non massa mattis, quis mattis ante finibus. Phasellus eu arcu quis sem semper varius. Vivamus rhoncus, nunc ut sagittis dictum, urna eros rutrum dolor, id consectetur elit lacus ut elit. Nunc pharetra vehicula vulputate. '},
        { id: 2, imageUrl: 'http://placehold.it/400/300', caption: ' orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam maximus elementum enim non ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi non nisi elit. Aenean lacinia ipsum non massa mattis, quis mattis ante finibus. Phasellus eu arcu quis sem semper varius. Vivamus rhoncus, nunc ut sagittis dictum, urna eros rutrum dolor, id consectetur elit lacus ut elit. Nunc pharetra vehicula vulputate. '},
        { id: 3, imageUrl: 'http://lorempixel.com/400/200', caption: ', per inceptos himenaeos. Nam maximus elementum enim non ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi non nisi elit. Aenean lacinia ipsum non massa mattis, quis mattis ante finibus. Phasellus eu arcu quis sem semper varius. Vivamus rhoncus, nunc ut sagittis dictum, urna eros rutrum dolor, id consectetur elit lacus ut elit. Nunc pharetra vehicula vulputate. '},
        { id: 4, imageUrl: 'http://placehold.it/400/400', caption: ' amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam maximus elementum enim non ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi non nisi elit. Aenean lacinia ipsum non massa mattis, quis mattis ante finibus. Phasellus eu arcu quis sem semper varius. Vivamus rhoncus, nunc ut sagittis dictum, urna eros rutrum dolor, id consectetur elit lacus ut elit. Nunc pharetra vehicula vulputate. '}
    ];
    var getSlides = function(){
      return slides;
    };
    var deleteSlide = function(id){
      console.log(id);
      for (var i=0; i < slides.length; i++){
        if (slides[i].id === id){

          slides.splice(i, 1);
          console.log(slides);

          return;
        }
      }
    };

    return {
      addSlide: addSlide,
      getSlides: getSlides,
      deleteSlide: deleteSlide
    }
  });

})();
