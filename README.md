## Tabla de contenidos
[1. Lógica del ejercicio
](#logica)
* [Enunciado](#enunciado)
* [Cómo se ha resuelto el problema](#resuelto)

[2. Estructura del ejercicio
](#estructura)
* [SCSS (Archivos Sass)](#sass)
* [CSS (Hoja de estilos)](#css)
* [HTML (Estructura de la aplicación)](#html)
* [Javascript (Funcionalidad de la aplicación)](#js)

[3. Funcionalidad de la aplicación
](#funcionalidad)



## <a name="enunciado">1. Lógica del ejercicio</a>
### <a name="enunciado">Enunciado</a>
Esta práctica consiste en construir una pequeña aplicación que conecte con la API Pokeapi. Tras la conexión nos traeremos un listado de pokemons que se mostrarán en tarjetas y contendrán una serie de datos sobre ellos (Nombre, ID, Imagen, Tipo y Evolución). La aplicación consta de un buscador, que filtra los pokémons por nombre, además podemos hacer click sobre cada uno de ellos ocultando los demás para inspeccionarlos con detalle.
### <a name="resuelto">Cómo se ha resuelto el problema</a>
Para resolver el enunciado anterior hemos trabajado con Vanilla JS. Tras estudiar el problema propuesto hemos decidido construir la aplicación basándonos en la creación de dos clases Javascript que darán toda la operatividad y nos facilitarán el manejo de la información, un archivo JS principal que "conecte" nuestras clases, un archivo HTML que nos aporte la estructura de nuestra aplicación y contenga la plantilla de cada una de nuestras tarjetas y los archivos css que nos permitan dar estilo visual nuestra estructura.
## <a name="estructura">2. Estructura del ejercicio</a>
Nuestra aplicación consta de 3 carpetas y un index.html:
#### <a name="sass">SCSS (Archivos Sass)</a>
Contiene todos los archivos scss utilizados para construir nuestra aplicación. En el caso de subir nuestra aplicación a un servidor remoto no necesitaríamos subir esta carpeta ya que el resultado de cada uno de sus archivos se compila en un archivo CSS normal que será el que interprete nuestro navegador.

Generalmente y en aplicaciones más grandes estos archivos se suelen ordenar en un patrón llamado 7/1 (7 carpetas con nuestras "pequeñas porciones" de scss, 1 archivo general que importe todas las partes ), en nuestro caso y al tratarse de una aplicación pequeña no hemos seguido ese patrón ya que no era necesario.

* **_card**. Contiene los estilos de la plantilla que utilizaremos para dibujar las tarjetas.
* **_components**. Contiene los estilos de todos los pequeños componentes de nuestra aplicación (notones, campos de formualrio...)
* **_layout**. Contiene los estilos base de la estructura de nuestra aplicación
* **_mixins**. Incluye los mixins que utilizaremos en nuesttos archivos scss (Media queries, prejifos de navegadores...)
* **_placeholders**. Contiene todas las herencias que utilizaremos en nuestras clases.
* **_variables**. Incluye las variables scss de nuestra aplicación (colores, fuentes...)
* **_pokeapi**. Esta será el archivo principal con el cual importemos todos nuestros archivos parciales sass.

#### <a name="css">CSS (Hoja de estilos)</a>
Sass es un preprocesador de estilos CSS que nos permite trabajar fácilmente los estilos de nuestras páginas webs "por partes" y añadirles cierta funcionalidad para más tarde compilarlos en un único archivo css que unificará toda la parte visual y hará que nuestro navegador pueda interpretarlo. Esta dará como resultado un único archivo css, que se muestra en estar carpeta.
#### <a name="html">HTML (Estructura de la aplicación)</a>
Este archivo esta formado por index.html. Contiene el código HTML que construye la estructra base de nuestra aplicación, y la estrutura de la tarjeta que utilizaremos como plantilla.

*Estructura base (header, main y card-wrapper)*
kkkktrozo de estructura

*Estructura de la plantilla (template)*
kkkkkkkkkktrozo de estructura

#### <a name="js">Javascript (Funcionalidad de la aplicación)</a>
Es la carpeta que aloja nuestros archivos js, separados en 3 bloques de código esenciales.
* Pokedex.js
* Pokemon.js
* pokeapi.js

Comentamos más adelante cada una para desarrollarla con más claridad en la sección Funcionalidad de la aplicación.

## <a name="funcionalidad">3. Funcionalidad de la aplicación</a>
#### <a name="pokedex">Pokedex.js</a>
Contiene la clase que inicializa nuestra aplicación. En el constructor de la misma le pasamos la url de la API a la que debemos conectar, instanciamos un objeto Array en el que guardaremos los pokemons que traigamos de la API para poder operar con ellos más fácilmente e inicializamos la llamada a la API.

El método init().
Por medio de init hacemos la llamada a la pokeapi en el momento que instaciamos nuestra clase Pokedex. La llamada se realiza mediante un try/catch para detectar el éxito o el fracaso a la hora de conectar con la url de la api.

En el método try utilizamos la nueva funcionalidad fetch() que permite llamadas asincronas para traernos los datos, una vez conectados a la url utilizamos los callbacks .then para operar con esos datos.

El primer callback nos trae los datos de la api en formato json.
--------codigo

El segundo, nos permite operar con esos datos, en nuestro caso recorremos el array pokemons.results (trae un paquete de 20 objetos pokemon cada vez) y creamos nuestro propio objeto pokemon para introducirlo mediante push() en el array que hemos creado vacío en el constructor de nuestra clase.

Mediante catch detectamos el fallo en caso de errores y podemos utilizar una función que se ejecute en caso de fallo en la conexión con la api.

-- 
_______________________

María Hojas Sánchez
