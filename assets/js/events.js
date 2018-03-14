
$(document).ready(() => {
  $('#valorBusqueda').val('');
  /*   $('#valoraciones').prop('checked', false);
  $('#comentarios').prop('checked', false);
  $('#topten').prop('checked', false);
  $('#favoritos').prop('checked', false); */


  if (localStorage.getItem('formulario') != null) {
    cargarFormulario();
  }

  if (localStorage.getItem('favoritos') != null) {
    cargarFavoritos();
  }
});

$('#buscar').click((event) => {
  event.preventDefault();
  searchFlag = true;
  // hotelesFront = buscar($('#valorBusqueda').val());
  buscar($('#valorBusqueda').val());
  dibujarResultadoBusquedas(hotelesFront);
  dibujarResultadosEncontrados();
  console.log('Los resultados de la busqueda son ');
  console.log(hotelesFront);
});

$('#valorBusqueda').change(() => {
  if ($('#valorBusqueda').val().length == 0) {
    $('#hoteles').html('');
    hotelesFront = hoteles.slice(0);
    dibujarHoteles(hotelesFront, 0, '');
    dibujarPaginacion(hotelesFront.length, hotelesFront);
    dibujarResultadosEncontrados();
  }
});
$('#valoraciones').click(() => {
  if (!searchFlag) {
    hotelesFront = hoteles.slice(0);
  }
  if ($('#valoraciones').prop('checked')) {
    $('#comentarios').prop('checked', false);
    $('#topten').prop('checked', false);
    $('#favoritos').prop('checked', false);
    $('#hoteles').html('');
    mejorValorados();
    dibujarHoteles(hotelesFront, 0, '');
    dibujarPaginacion(hotelesFront.length, hotelesFront);
    dibujarResultadosEncontrados();
  } else {
    searchFlag = false;
    $('#hoteles').html('');
    hotelesFront = hoteles.slice(0);
    dibujarHoteles(hotelesFront, 0, '');
    dibujarPaginacion(hotelesFront.length, hotelesFront);
    dibujarResultadosEncontrados();
  }
});

$('#comentarios').click(() => {
  if (!searchFlag) {
    hotelesFront = hoteles.slice(0);
  }

  // hotelesFront = hoteles.slice(0);
  if ($('#comentarios').prop('checked')) {
    $('#valoraciones').prop('checked', false);
    $('#topten').prop('checked', false);
    $('#favoritos').prop('checked', false);
    $('#hoteles').html('');
    ordenarPorComentarios();
    dibujarHoteles(hotelesFront, 0, '');
    console.log('hoteles length');
    console.log(hotelesFront.length);
    dibujarPaginacion(hotelesFront.length, hotelesFront);
    dibujarResultadosEncontrados();
  } else {
    searchFlag = false;
    $('#hoteles').html('');
    hotelesFront = hoteles.slice(0);
    dibujarHoteles(hotelesFront, 0, '');
    console.log('hoteles length');
    console.log(hotelesFront.length);
    dibujarPaginacion(hotelesFront.length, hotelesFront);
    dibujarResultadosEncontrados();
  }
});

$('#topten').click(() => {
  if (!searchFlag) {
    hotelesFront = hoteles.slice(0);
  }

  console.log('topten');
  if ($('#topten').prop('checked')) {
    $('#valoraciones').prop('checked', false);
    $('#comentarios').prop('checked', false);
    $('#favoritos').prop('checked', false);
    $('#hoteles').html('');
    topTen();
    dibujarHoteles(hotelesFront, 0, '');
    dibujarPaginacion(hotelesFront.length, hotelesFront);
    dibujarResultadosEncontrados();
  } else {
    searchFlag = false;
    $('#hoteles').html('');
    hotelesFront = hoteles.slice(0);
    dibujarHoteles(hotelesFront, 0, '');
    dibujarPaginacion(hotelesFront.length, hotelesFront);
    dibujarResultadosEncontrados();
  }
});


// Extras :

$('#favoritos').click(() => {
  searchFlag = false;
  if ($('#favoritos').prop('checked')) {
    if (localStorage.getItem('favoritos') != null) {
      $('#valoraciones').prop('checked', false);
      $('#topten').prop('checked', false);
      $('#hoteles').html('');
      console.log(hotelesFront);
      cargarFavoritos();
      dibujarHoteles(hotelesFront, 0, '');
      dibujarPaginacion(hotelesFront.length, hotelesFront);
      dibujarResultadosEncontrados();
      $('button').remove('.fav-btn');
    } else {
      $('#resultados').html('');
      $('#hoteles').html('');
      $('#paginacion').html('');
      $('#hoteles').append('<h2 class="center-block">No se han registrado hoteles favoritos </h2>');
    }
  } else {
    $('#hoteles').html('');
    searchFlag = false;

    hotelesFront = hoteles.slice(0);
    dibujarHoteles(hotelesFront, 0, '');
    console.log('hoteles length');
    console.log(hotelesFront.length);
    dibujarPaginacion(hotelesFront.length, hotelesFront);
    dibujarResultadosEncontrados();
  }
});
/*  --- Pendiente de implementar
$('#valoracionmin').change(() => {
  obtenerRangoValoracion($('#valoracionmin').val(), $('#valoracionmax').val())
  dibujarHoteles(hotelesFront,0,'');
  dibujarResultadosEncontrados();

});

$('#valoracionmax').change(() => {
  dibujarHoteles(hotelesFront, 0, '');
  dibujarResultadosEncontrados();
}); */