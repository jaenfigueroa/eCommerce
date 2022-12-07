const botonIrCarrito = document.getElementById('boton-ir-carrito')
const botonVolverMenu = document.getElementById('boton-volver-menu')

const seccion1 = document.getElementById('seccion-1')
const seccion2 = document.getElementById('seccion-2')
/////////////////////////////////////////

botonIrCarrito.addEventListener('click', () => {
  seccion1.style.display = 'none'
  seccion2.style.display = 'initial'
})

botonVolverMenu.addEventListener('click', () => {
  seccion1.style.display = 'initial'
  seccion2.style.display = 'none'
})
