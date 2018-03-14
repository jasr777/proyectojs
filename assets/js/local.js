// Gestion de localStorage
let favoritos = [];
let estadoFormulario = {};


function guardarFavorito(nombreHotel, btn) {
  if (favoritos.length === 0) {
    console.log(btn);
    const hotelesAuxiliar = _.flatten(hotelesFront);
    const fav = hotelesAuxiliar.find(hotel => hotel.nombreHotel === nombreHotel);
    favoritos.push(fav);
    console.log(fav);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    $(btn).addClass('disabled');
    $('#fav-item').removeClass('disabled');
    $('#favoritos').removeClass('disabled');
  }
  if (favoritos.findIndex(hotel => nombreHotel === hotel.nombreHotel) < 0) {
    console.log(btn);
    const hotelesAuxiliar = _.flatten(hotelesFront);
    const fav = hotelesAuxiliar.find(hotel => hotel.nombreHotel === nombreHotel);
    favoritos.push(fav);
    console.log(fav);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    $(btn).addClass('disabled');
  }
}

function cargarFavoritos() {
  favoritos = JSON.parse(localStorage.getItem('favoritos'));
  hotelesFront = _.chunk(favoritos.slice(0), 15);
  console.log(favoritos);
}


function guardarFormulario() {
  estadoFormulario.valoraciones = $('#valoraciones').prop('checked');
  estadoFormulario.comentarios = $('#comentarios').prop('checked');
  estadoFormulario.topten = $('#topten').prop('checked');
  estadoFormulario.busqueda = $('#valorBusqueda').val();
  console.log(estadoFormulario);
  localStorage.setItem('formulario', JSON.stringify(estadoFormulario));
}

function cargarFormulario() {
  estadoFormulario = JSON.parse(localStorage.getItem('formulario'));

  if (estadoFormulario.valoraciones) {
    $('#valoraciones').prop('checked', true);
  }
  if (estadoFormulario.comentarios) {
    $('#comentarios').prop('checked', true);
  }
  if (estadoFormulario.topten) {
    $('#topten').prop('checked', true);
  }
  if (estadoFormulario.busqueda.length > 0) {
    $('#valorBusqueda').val(estadoFormulario.busqueda);
  }
}
