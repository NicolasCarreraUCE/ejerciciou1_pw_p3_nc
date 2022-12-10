const correcto = () => {
    document.getElementById('imagenInicial').src = 'img/pcolor.jpg'
    document.getElementById('mensaje').innerHTML = 'Felicitaciones, has seleccionado la opción correcta'
    document.getElementById('textoInicial').style.color = 'yellow'
}

const incorrecto = () => {
    document.getElementById('imagenInicial').src = 'img/pcolor.jpg'
    document.getElementById('mensaje').innerHTML = 'Pokémon incorrecto, la respuesta es: excadrill'
    document.getElementById('textoInicial').style.color = 'red'
}

const resetear = () => {
    document.getElementById('imagenInicial').src = 'img/pnegro.jpg'
    document.getElementById('mensaje').innerHTML = ''
    document.getElementById('textoInicial').style.color = 'black'
}
