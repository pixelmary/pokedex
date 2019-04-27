## Tabla de contenidos
[1. Lógica del ejercicio
](#logica)[2. Estructura de las carpetas
](#estructura)1. Estilos
1. Javascript
1. HTML
1. Clases
1. Métodos


## <a name="logica">Lógica del ejercicio</a>
### Enunciado
Esta práctica consiste en construir una pequeña aplicación que conecte con la API Pokeapi. Tras la conexión nos traeremos un listado de pokemons que se mostrarán en tarjetas y contendrán una serie de datos sobre ellos (Nombre, ID, Imagen, Tipo y Evolución). La aplicación consta de un buscador, que filtra los pokémons por nombre, además podemos hacer click sobre cada uno de ellos ocultando los demás para inspeccionarlos con detalle.
### Cómo se ha resuelto el problema
Para resolver el enunciado anterior hemos trabajado con Vanilla JS. Tras estudiar el problema propuesto hemos decidido construir la aplicación basándonos en la creación de dos clases Javascript que darán toda la operatividad y nos facilitarán el manejo de la información, un archivo JS principal que "conecte" nuestras clases, un archivo HTML que nos aporte la estructura de nuestra aplicación y contenga la plantilla de cada una de nuestras tarjetas y los archivos css que nos permitan dar estilo visual nuestra estructura.
## <a name="estructura">Estructura de las carpetas</a>
Nuestra aplicación consta de 3 carpetas:
#### 1. SCSS (Archivos Sass)
Contiene todos los archivos scss utilizados para construir nuestra aplicación. En el caso de subir nuestra aplicación a un servidor remoto no necesitaríamos subir esta carpeta ya que el resultado de cada uno de sus archivos se compila en un archivo CSS normal que será el que interprete nuestro navegador.

Generalmente y en aplicaciones más grandes estos archivos se suelen ordenar en un patrón llamado 7/1 (7 carpetas con nuestras "pequeñas porciones" de scss, 1 archivo general que importe todas las partes ), en nuestro caso y al tratarse de una aplicación pequeña no hemos seguido ese patrón ya que no era necesario.

##### _card
