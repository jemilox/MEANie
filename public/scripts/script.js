var myApp=angular.module( 'myApp', [] );

myApp.controller( 'whereMyPeeps', [ '$scope', '$http', function( $scope, $http ){
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
  $http({
    method: 'GET',
    url: '/getRecords',
  }).then( function( response ){
    $scope.allTheRecords = response;
    console.log( $scope.allTheRecords );
  }, function myError( response ){
    console.log( response.statusText );
  });
};

}]);
