var myApp=angular.module( 'myApp', [] );

myApp.controller( 'whereMyPeeps', [ '$scope', '$http', function( $scope, $http ){
  $scope.allTheRecords = [];

  $scope.addRecord = function(){
    event.preventDefault();
    var objectToSend ={
      name: $scope.nameIn,
      location: $scope.locationIn,
    };//end object
    $http({
      method: 'POST',
      url: '/testPost',
      data: objectToSend
  });

    $scope.nameIn ='';
    $scope.locationIn='';
};//end addRecord

$scope.getRecords = function(){
  $scope.allTheRecords = [];
  $http({
    method: 'GET',
    url: '/getRecords',
  }).then( function( response ){
    $scope.allTheRecords = response.data;
    console.log( $scope.allTheRecords );
  }, function myError( response ){
    console.log( response.statusText );
  });
};

}]);
