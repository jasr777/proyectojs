// Manejador de elementos del DOM


// Hay que cambiar esto para poder hacerlo como se ha replanteado (array que en cada posicion tiene 15 elementos);

cargarDatos().then(() => {
  console.log('El primer hotel es');
  dibujarHoteles(hoteles,0);
  dibujarPaginacion(hoteles.length,hoteles);
});

function dibujarHoteles(hoteles,pagina, event) {
    if (event) {
        event.preventDefault();
    }
    let hotelesADibujar = hoteles[pagina];
    for (var i = 0; i < hotelesADibujar.length;i++){
        dibujarHotel(hotelesADibujar[i]);
    }
};

function dibujarHotel(hotel) {
  $('#hoteles').append(`
    <div class="card col-md-4" style="width: 18rem;">
        <div class="card-body">
            <img class="card-img-top" src="${hotel.imagen}" alt="Imagen del Hotel">
            <h5  class="card-title">${hotel.nombreHotel}</h5>
            <h6  class="card-subtitle mb-2 text-muted">${hotel.direccionHotel}</h6>
            <p   class="card-text">${hotel.descripcionHotel}</p>
            <p   class="card-text">${hotel.valoracion}</p>
            <p   class="card-text">${hotel.comentarios}</p>
        </div>
    </div>
    </div>
    `);
}

function dibujarPaginacion(elementos,hoteles) {
  $('#paginacion').append('<li class="page-item"><a class="page-link" href="#">Previous</a></li>');
  for (let i = 0; i <= elementos; i++) {
    $('#paginacion').append(`<li  class="page-item"><a onclick="dibujarHoteles(${hoteles},${i},event)" class="page-link" href="#">${i}</a></li>`);

} 
  $('#paginacion').append('<li class="page-item"><a class="page-link" href="#">Next</a></li></ul>');
}

