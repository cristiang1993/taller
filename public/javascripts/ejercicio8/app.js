var app = angular.module('Angulartaller', []);

app.controller('TiendaController', function ($scope) {

    var articulos = [{
        index:1,
        nombre: 'FUJIFILM FinePix S8600 - negro - Cámara fotográfica digital',
        precio: 149.00,
        imagen: '/javascripts/images/fotosejercicio5/camara.jpg',
        stock: 5,
        descripcion: "Fiel a su larga tradición en el segmento de las cámaras compactas de zoom largo, Fujifilm ha aprovechado esta prolífica jornada de novedades para introducir nada menos que cinco modelos en su catálogo FinePix S. Con un diseño y unas prestaciones muy similares entre todos ellos, es el alcance de la óptica el que se encarga de marcar diferencias en este quinteto, que entre muchas otras cosas también comparte un sensor CCD de 14 megapíxeles."
    }, {
        index:2,
        nombre: 'PANASONIC VIERA TX-55AS650E - Televisor LED 3D Smart TV',
        precio: 1499.00,
        imagen: '/javascripts/images/fotosejercicio5/televisor.jpg',
        stock: 9,
        descripcion: "Un sofisticado modelo con una calidad de imagen excepcional, HEXA-Processing Engine y un amplia gama de funciones clasificacion energetica A++"
    }, {
        index:3,
        nombre: 'SAMSUNG Galaxy S4 Value Edition - blanco - 16 GB - Smartphone',
        precio: 399.00,
        imagen: '/javascripts/images/fotosejercicio5/celular.jpg',
        stock: 22,
        descripcion:"Disfruta de una vida más sencilla y divertida. El nuevo GALAXY S4 se convertirá en tu mejor amigo. Gracias a él podrás estar más cerca de los tuyos y capturar todos esos momentos que compartes con ellos. Cada una de sus funciones ha sido pensada para hacerte la vida más fácil, incluso se preocupa por tu salud y bienestar. GALAXY S4 ha llegado para ti."
    }, {
        index:4,
        nombre: 'WD Red WD40EFRX - 4 TB - Disco duro interno - 3.5"',
        precio: 174.90,
        imagen: '/javascripts/images/fotosejercicio5/discoduro.jpg',
        stock: 0,
        descripcion: "Disco duro interno de 4000 GB Serial ATA III WD Red es un reflejo de la más amplia compatibilidad-pruebas de los socios NAS en el mercado,Tecnología exclusiva NASware 2.0,Interfaz: SATA 6 GB/s,Especificaciones de desempeño: Velocidad de rotación IntelliPower, 64 MB búfer,Compatibilidad con : Windows/Mac/Linux"
    }, {
        index:5,
        nombre: 'SAMSUNG Gear Fit - negro - Reloj conectado',
        precio: 199.00,
        imagen: '/javascripts/images/fotosejercicio5/reloj.png',
        stock: 34,
        descripcion: "A través del sensor de frecuencia cardíaca, el Gear Fit de Samsung te ofrece un entrenador en tiempo real que te ayuda y motiva a alcanzar tus objetivos y mejorar tu estado físico.Es posible que ciertas aplicaciones y servicios de Samsung para la salud o entrenamiento disponibles para dispositivos de Samsung no sean compatibles con las tablets de Samsung."
    }];


    $scope.articulo1 = articulos;


});