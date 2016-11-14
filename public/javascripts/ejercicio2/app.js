 var app= angular.module('Angulartaller', []);

 app.controller('operaciones', function($scope) {

$scope.sumar = function() { 
     $scope.total = parseInt($scope.primern) + parseInt($scope.segundon);
     };
$scope.restar = function() { 
    $scope.total = parseInt($scope.primern) - parseInt($scope.segundon); 
};
$scope.multiplicar = function() { 
    $scope.total = parseInt($scope.primern) * parseInt($scope.segundon); 
};
$scope.dividir = function() { 
    $scope.total = parseInt($scope.primern) / parseInt($scope.segundon); 
};

$scope.limpiar = function() { 
    $scope.total = ""; 
     $scope.primern = "";
      $scope.segundon = "";
};
});