 var app= angular.module('Angulartaller', []);

 app.controller('TiendaController', function($scope) {
 
 var articulos = [{
    nombre: 'FUJIFILM FinePix S8600 - negro - Cámara fotográfica digital',
    precio: 149.00,
    imagen: 'img/fujifilm.jpg',
    stock: 5
}, {
    nombre: 'PANASONIC VIERA TX-55AS650E - Televisor LED 3D Smart TV',
    precio: 1499.00,
    imagen: 'img/tv.jpg',
    stock: 9
}, {
    nombre: 'SAMSUNG Galaxy S4 Value Edition - blanco - 16 GB - Smartphone',
    precio: 399.00,
    imagen: 'img/fujifilm.jpg',
    stock: 22,
}, {
    nombre: 'WD WD Red WD40EFRX - 4 TB - Disco duro interno - 3.5"',
    precio: 174.90,
    imagen: 'img/disco-duro.jpg',
    stock: 0,
}, {
    nombre: 'SAMSUNG Gear Fit - negro - Reloj conectado',
    precio: 199.00,
    imagen: 'img/samsung-gear.jpg',
    stock: 34,
}];


 $scope.articulo1=articulos;


});