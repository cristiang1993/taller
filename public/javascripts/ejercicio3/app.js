 var app= angular.module('Angulartaller', []);

 app.controller('articulos', function($scope) {
     var articulo = {
	nombre: 'FUJIFILM FinePix S8600 - negro - Cámara fotográfica digital',
	precio: 149.00
    };

 $scope.articulo1=articulo;


});