(function () {
  'use strict';

  var app = angular.module('appSlideshow');

  app.controller('SlideshowController', function ($scope, slideshowService) {
    console.log(999);
    $scope.slide = { id: 0, imageUrl: '', caption: '' };
    $scope.slides = slideshowService.getSlides();
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;

    $scope.deleteSlide = function (id) {
      slideshowService.deleteSlide(id);
      $scope.slides = slideshowService.getSlides();
    };

  });


  // app.controller('ModalController', function ($scope, $modalInstance, slide) {
  //   $scope.slide = slide;
  //
  //   $scope.submitForm = function () {
  //     $modalInstance.close($scope.slide);
  //   };
  // });

})();
