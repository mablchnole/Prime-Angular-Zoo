var myApp=angular.module('myApp', []);

myApp.controller('zooController', ['$scope', '$http', function($scope, $http){
  $scope.allTheAnimals = [];
  $scope.addAnimal = function(){
    var objectToSend={
      type: $scope.newAnimal
    };
    $scope.allTheAnimals.push(objectToSend);

    $http({
      method: 'POST',
      url: '/addAnimal',
      data: objectToSend
    }).then(function(response){
      console.log('in addAnimal, response: ' + response.data);
      $scope.allTheAnimals = response.data;
    }, function myError(response){
      console.log(response.statusText);
    }); // end post call
    console.log('back from POST call');
  }; // end addAnimal function
}]);//end of controller
