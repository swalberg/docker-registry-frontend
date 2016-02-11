'use strict';

/**
 * @ngdoc function
 * @name docker-registry-frontend.controller:ImageController
 * @description
 * # ImageController
 * Controller of the docker-registry-frontend
 */
angular.module('image-controller', ['registry-services', 'app-mode-services'])
  .controller('ImageController', ['$scope', '$route', '$routeParams', '$location', '$log', '$filter','Manifest', 'Image', 'Ancestry', 'AppMode',
  function($scope, $route, $routeParams, $location, $log, $filter, Manifest, Image, Ancestry, AppMode){
    

    // Old code (v1 specs)
    // $scope.imageId = $route.current.params.imageId;
    // $scope.imageDetails = Image.query( {imageId: $scope.imageId} );
    // $scope.imageAncestry = Ancestry.query( {imageId: $scope.imageId} );
    $scope.appMode = AppMode.query();
    $scope.imageDetails = Manifest.query({repoUser: $scope.repositoryUser, repoName: $scope.repositoryName, tagName: $scope.tagName});
    /**
     * Calculates the total download size for the image based on
     * it's ancestry.
     */
    /*
    $scope.totalImageSize = null;
    $scope.calculateTotalImageSize = function() {
      $scope.totalImageSize = 0;
      angular.forEach($scope.imageAncestry, function (id, key) {
        // We have to use the $promise object here to be sure the result is accessible 
        Image.get( {imageId: id} ).$promise.then(function (result) {
          if (!isNaN(result.Size-0)) {    
            $scope.totalImageSize += result.Size;
          }
        });
      });
    };
    */
  }]);
