// Manejador de elementos del DOM

cargarDatos().then(() => {
  dibujarHoteles(hotelesFront, 0);
  // dibujarPaginacion(hotelesFront.length, hotelesFront);
  dibujarResultadosEncontrados();
});


function dibujarHoteles(hoteles, pagina, event) {
  $('#paginacion').html('');
  setTimeout(() => {
    console.log('Dibujar hoteles ');
    console.log(hoteles);
    console.log(pagina);
    if (event) {
      $('#hoteles').html('');
      event.preventDefault();
    }
    dibujarPaginacion(hotelesFront.length);
    const hotelesADibujar = hotelesFront[pagina];
    for (let i = 0; i < hotelesADibujar.length; i++) {
      dibujarHotel(hotelesADibujar[i]);
    }
  }, 2000);
}

function dibujarHotel(hotel) {
  $('#hoteles').append(`
    <div class="container py-3">
      <div class="card">
        <div class="row ">
          <div class="col-md-4">
              <img src="${hotel.imagen}" class="rounded">
          </div>
          <div class="col-md-8 px-3">
            <div class="card-block px-3">              
              <h4 class="card-title">${hotel.nombreHotel}</h4>
              <h6  class="card-subtitle mb-2 text-muted">${hotel.direccionHotel}</h6>
              <p   class="card-text">${hotel.descripcionHotel}</p>
              <p   class="card-text">${hotel.valoracion}</p>
              <p   class="card-text">${hotel.comentarios}</p>
              <button onclick="guardarFavorito('${hotel.nombreHotel}',this)" type="button" class="fav-btn btn btn-primary float-right">Añadir a Favoritos</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

      `);
}
// [TODO]  : Pagina siguiente / anterior
function dibujarPaginacion(elementos) {
  console.log('Elementos vale : ');
  console.log(elementos);
  $('#paginacion').html('');
  /*   $('#paginacion').append('<li class="page-item"><a onclick="dibujarHoteles(hoteles,class="page-link" href="#">Previous</a></li>'); */

  for (let i = 0; i < elementos; i++) {
    $('#paginacion').append(`<li  class="page-item"><a onclick="dibujarHoteles(hotelesFront,${i},event)" class="page-link" href="#">${i}</a></li>`);
  }
  /* $('#paginacion').append('<li class="page-item"><a class="page-link" href="#">Next</a></li></ul>'); */
}

function dibujarResultadoBusquedas(resultadoBusqueda) {
  console.log('dibujando...');
  $('#hoteles').html('');
  dibujarHoteles(resultadoBusqueda, 0, '');
  $('#paginacion').html('');
  dibujarPaginacion(resultadoBusqueda.length, resultadoBusqueda);
}


function dibujarResultadosEncontrados() {
  $('#resultados').html('');
  $('#resultados').append(`<h6>Se encontraron ${_.flatten(hotelesFront).length} resultados</h6>`);
}

