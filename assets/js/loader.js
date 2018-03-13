// Operaciones de carga de los datos

let hoteles;


function cargarDatos() {
  return fetch('/data/london.json')
    .then(response => response.json())
    .then((apartamentos) => {
      hoteles = limpiarDatos(apartamentos);
      console.log('Apartamentos recibidos : ');
      console.log(hoteles);
      return hoteles;
    })
    .catch(() => {
      console.log('Ha habido un error recibiendo los hoteles');
    });
}
/*  Formato que voy a dar a cada hotel :
    hotel = { imagen => Hotel Image.src ==> No hay que limpiar
              nombreHotel => Hotel Name Url.text => Hay que limpiar, se
                             le añade una cadena que pone "se abre en una ventana nueva"
        direccionHotel => Address Link.text => En algunos hay que limpiar => "- Mostrar en el mapa"
        descripcionHotel => Hotel Description.text => no hay que limpiar
*/

function limpiarDatos(datos) {
  const hotelesLimpios = [];
  let hotelFormateado = {};

  datos.forEach((dato) => {
    hotelFormateado.imagen = dato['Hotel Image'].src;
    hotelFormateado.nombreHotel = limpiarNombreHotel(dato['Hotel Name Url'].text);
    hotelFormateado.direccionHotel = limpiarDireccionHotel(dato['Address Link'].text);
    hotelFormateado.descripcionHotel = dato['Hotel Description'].text;


    if (dato.hasOwnProperty('Reviews Core 4') && dato.hasOwnProperty('Reviews Core 2')) {
      hotelFormateado.valoracion = `${dato['Reviews Core 4'].text} ${dato['Reviews Core 2'].text}`;
    } else {
      hotelFormateado.valoracion = 'No hay valoraciones disponibles';
    }

    if (dato.hasOwnProperty('Reviews Core 3')) {
      hotelFormateado.comentarios = dato['Reviews Core 3'].text;
    } else {
      hotelFormateado.comentarios = 'No hay comentarios';
    }
    hotelesLimpios.push(hotelFormateado);
    hotelFormateado = {};
  });

  // Convertir el array en un array de arrays de 15 elementos

  return _.chunk(hotelesLimpios, 15);
}

function limpiarNombreHotel(nombre) {
  return nombre.replace(' Se abre en una ventana nueva', '');
}

function limpiarDireccionHotel(direccion) {
  return direccion.replace('- Mostrar en el mapa', '');
}
