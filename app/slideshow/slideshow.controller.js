(function () {
  'use strict';

  var app = angular.module('appSlideshow');

  app.controller('SlideshowController', function ($scope, slideshowService) {
    $scope.slide = { id: 0, imageUrl: '', caption: '' };
    $scope.slides = slideshowService.getSlides();
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;

    $scope.deleteSlide = function (id) {
      slideshowService.deleteSlide(id);
      $scope.slides = slideshowService.getSlides();
    };

  });
})();
