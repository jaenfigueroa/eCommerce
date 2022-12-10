const botonIrCarrito = document.getElementById('boton-ir-carrito')
const botonVolverMenu = document.getElementById('boton-volver-menu')

const seccion1 = document.getElementById('seccion-1')
const seccion2 = document.getElementById('seccion-2')
/////////////////////////////////////////

botonIrCarrito.addEventListener('click', () => {
  sonidoCambiar()

  seccion1.style.display = 'none'
  seccion2.style.display = 'initial'
})

botonVolverMenu.addEventListener('click', () => {
  sonidoCambiar()

  seccion1.style.display = 'initial'
  seccion2.style.display = 'none'
})
/////////////////////////////////////////
const platos = [
  {
    id: 0,
    nombre: 'bacon eggs',
    precio: 2.23,
    imagen: './img/assets/platos/plate__bacon-eggs.png'
  },
  {
    id: 1,
    nombre: 'chicken salad',
    precio: 5.12,
    imagen: './img/assets/platos/plate__chicken-salad.png'
  },
  {
    id: 2,
    nombre: 'fish sticks fries',
    precio: 7.82,
    imagen: './img/assets/platos/plate__fish-sticks-fries.png'
  },
  {
    id: 3,
    nombre: 'french fries',
    precio: 6.85,
    imagen: './img/assets/platos/plate__french-fries.png'
  },
  {
    id: 4,
    nombre: 'ravioli',
    precio: 5.37,
    imagen: './img/assets/platos/plate__ravioli.png'
  },
  {
    id: 5,
    nombre: 'salmon vegetables',
    precio: 9.35,
    imagen: './img/assets/platos/plate__salmon-vegetables.png'
  },
  {
    id: 6,
    nombre: 'spaghetti meat sauce',
    precio: 2.68,
    imagen: './img/assets/platos/plate__spaghetti-meat-sauce.png'
  },
  {
    id: 7,
    nombre: 'tortellini',
    precio: 4.62,
    imagen: './img/assets/platos/plate__tortellini.png'
  }
]

/////////////////////////////////////////
//CREAR ELEMENTOS DE LA LISTA DE PLATOS/////////////////////
function crearPlato(id = 0) {
  let nombre = platos[id].nombre
  let precio = platos[id].precio
  let imagen = platos[id].imagen
  ////////////////////////
  const contenedor = document.getElementById('contenedor-platos')
  const template = document.getElementById('template-platos').content

  const clon = template.cloneNode(true)
  const fragmento = document.createDocumentFragment()

  clon.querySelector('.plato__imagen').style.backgroundImage = `url(${imagen})`
  clon.querySelector('.plato__nombre').textContent = nombre
  clon.querySelector('.plato__precio').textContent = precio

  clon.querySelector(`.boton-agregar`).onclick = () => agregarAlCarrito(id)
  clon.querySelector(`.boton-quitar`).onclick = () => quitarDelCarrito(id)

  clon.querySelector(`.boton-agregar`).id = `boton-add-${id}`
  clon.querySelector(`.boton-quitar`).id = `boton-quit-${id}`

  //comporbar existencia del platp en el carrito y elegir el boton correcto/////////
  let test = comprobarPlatoEnCarrito(id)

  // console.log(test)

  if (test) {
    clon.querySelector(`.boton-agregar`).style.display = 'none'
    clon.querySelector(`.boton-quitar`).style.display = 'flex'
  } else {
    clon.querySelector(`.boton-agregar`).style.display = 'initial'
    clon.querySelector(`.boton-quitar`).style.display = 'none'
  }
  //////////////////////////////////////////////////////////////////////////

  fragmento.appendChild(clon)
  contenedor.append(fragmento)
}

///////////////////////////////////////////////////
///////////////////////////////////////////////////
function comprobarPlatoEnCarrito(idBuscado) {
  // console.log(carrito)
  // console.log(carrito.length)

  if (carrito.length > 0) {
    return carrito.some((x) => x.id === idBuscado)
  } else {
    return false
  }
}
///////////////////////////////////////////////////
///////////////////////////////////////////////////
// crearPlato(0)
// crearPlato(1)
// crearPlato(5)
// crearPlato(6)
// crearPlato(7)

function renderizarListaPlatos() {
  platos.forEach((plato) => {
    crearPlato(plato.id)
  })
}

// renderizarListaPlatos()
/////////////////////////////////////////////////////////////////////

///SECCION 2 - CREAR ELEMENTOS EN EL CARRITO/////////////////////////
function crearElemento(id = 0, cantidad = 0) {
  let imagen = platos[id].imagen
  let nombre = platos[id].nombre
  let precioUnitario = platos[id].precio

  ///////////////////////////////
  const contenedor = document.getElementById('contenedor-elementos')
  const template = document.getElementById('template-elementos').content

  const clon = template.cloneNode(true)
  const fragmento = document.createDocumentFragment()

  clon.querySelector('.elemento__imagen').style.backgroundImage = `url(${imagen})`
  clon.querySelector('.nombre').textContent = nombre
  clon.querySelector('.precio-unitario').textContent = precioUnitario
  clon.querySelector('.cantidad-elementos').textContent = cantidad
  clon.querySelector('.cantidad-elementos-plato').textContent = cantidad
  clon.querySelector('.precio-final').textContent = (precioUnitario * cantidad).toFixed(2)

  clon.querySelector('.disminuir-cantidad').onclick = () => modificarCantidad(id, 'menos')
  clon.querySelector('.aumentar-cantidad').onclick = () => modificarCantidad(id, 'mas')

  clon.querySelector('.boton-eliminar').onclick = () => quitarDelCarrito(id)

  fragmento.appendChild(clon)
  contenedor.append(fragmento)
}
/////////////////////////////////////////////////
// crearElemento(0, 5)
// crearElemento(1, 3)
// crearElemento(5, 10)

//CALCULAR Y MOSTRAR SUBTOTAL, TAX, TOTAL ///////////////////////
function calcularTotal() {
  let precios = document.querySelectorAll('.precio-final')

  //subtotal
  let subtotal = 0

  precios.forEach((x) => {
    // console.log(Number(x.textContent))

    subtotal += Number(x.textContent)
  })

  // console.log('subtotal', subtotal)

  //tax
  let tax = subtotal * 0.0975
  // console.log('tax', tax)
  //total
  let total = subtotal + tax
  // console.log('total', total)

  document.getElementById('subtotal').textContent = subtotal.toFixed(2)
  document.getElementById('tax').textContent = tax.toFixed(2)
  document.getElementById('total').textContent = total.toFixed(2)
}

//RENDERIZAR LOS ELEMENTOS DEL CARRITO/////////////////////////
// let carrito = [
//   {
//     id: 6,
//     cantidad: 4
//   },
//   {
//     id: 2,
//     cantidad: 3
//   },
// ]

let carrito = []
///////////////////////////////////////////////////
function renderizarElementos() {
  carrito.forEach((elemento) => {
    let id = elemento.id
    let cantidad = elemento.cantidad

    crearElemento(id, cantidad)
    calcularTotal()
  })
}

///////////////////////////////////////////////////
renderizarElementos()
///////////////////////////////////////////////////
function modificarCantidad(id, accion) {
  sonidoCambiar()

  ///////////////////////////////////////////////////
  const contenedor = document.getElementById('contenedor-elementos')
  let elementos = document.querySelectorAll('.elemento')

  elementos.forEach((x) => {
    contenedor.removeChild(x)
  })
  ///////////////////////////////////////////////////

  carrito.forEach((x) => {
    if (x.id === id) {
      if (accion === 'mas') x.cantidad++
      if (accion === 'menos' && x.cantidad > 0) x.cantidad--
    }
  })

  renderizarElementos()

  guardarEnLocalStorage()
}

///////////////////////////////////////////////////
///////////////////////////////////////////////////
function agregarAlCarrito(id) {
  sonidoAgregar()

  document.getElementById(`boton-add-${id}`).style.display = 'none'
  document.getElementById(`boton-quit-${id}`).style.display = 'flex'

  /////////////////////////
  let test = verificarExistencia(id)

  if (!test) {
    carrito.push({
      id: id,
      cantidad: 1
    })
  }

  actualizarCarrito()

  //mostrar la tablar de subtotal, tax, y total
  document.getElementById('contenedor-resultados').style.display = 'flex'
  document.getElementById('aviso-carrito-vacio').style.display = 'none'
}

function quitarDelCarrito(id) {
  sonidoQuitar()

  // console.log(`el elemento ${id}, se quito del carrito`)

  document.getElementById(`boton-add-${id}`).style.display = 'initial'
  document.getElementById(`boton-quit-${id}`).style.display = 'none'

  /////////////////////////
  let test = verificarExistencia(id)

  if (test) {
    carrito = carrito.filter((x) => x.id !== id)
  }

  actualizarCarrito()

  comprobarCarritoVacio()
}

function comprobarCarritoVacio() {
  if (carrito.length === 0) {
    document.getElementById('contenedor-resultados').style.display = 'none'
    document.getElementById('aviso-carrito-vacio').style.display = 'initial'
  } else {
    document.getElementById('contenedor-resultados').style.display = 'flex'
    document.getElementById('aviso-carrito-vacio').style.display = 'none'
  }
}
//IR AL CARRITO///////////////////////
function actualizarCarrito() {
  //eliminar elementos existentes
  const contenedor = document.getElementById('contenedor-elementos')
  let elementos = document.querySelectorAll('.elemento')

  elementos.forEach((x) => {
    contenedor.removeChild(x)
  })

  //renderizar los elementos actualizados
  renderizarElementos()

  //////////////// actualizar numero del pop rojo del carrito
  actualizarPopCarrito()

  guardarEnLocalStorage()
}

//////////////////////////
function verificarExistencia(id) {
  return carrito.some((x) => x.id === id)
}
////////////////////////
function actualizarPopCarrito() {
  document.getElementById('popCarrito').textContent = carrito.length
}

////////////////////////////
function guardarEnLocalStorage() {
  // console.log('se GUARDO el carrito en local storage')

  localStorage.setItem('carrito', JSON.stringify(carrito))
}

function obtenerDatosLocalStorage() {
  // console.log('se OBTUVO el carrito guardado del local storage')

  let carritoObtenido = JSON.parse(localStorage.getItem('carrito')) || []

  carrito = carritoObtenido

  return carritoObtenido
}

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

/* obtener el carrito del local storage */
obtenerDatosLocalStorage()

/* renderizar los platos en la lista de carrito y actualizar los precios*/
renderizarElementos()

/* actualizar el pop - numero en el carrito */
actualizarPopCarrito()

/* comprobar el carito vacio - ocultar/mostrar el aviso de carrito vacio */
comprobarCarritoVacio()

/* renderizar la lista de los platos , por primera vez */
renderizarListaPlatos()

window.addEventListener('load', () => {
  console.log('se termino de cargar toda la pagina!')

  document.getElementById('body').classList.remove('hidden')
  document.getElementById('pantalla-carga').style.display = 'none'
})

function sonidoAgregar() {
  document.getElementById('audio-agregar1').play()
}

// sonidoAgregar()

function sonidoQuitar() {
  document.getElementById('audio-quitar2').play()
}

function sonidoCambiar() {
  document.getElementById('audio-cambiar').play()
}
// sonidoQuitar()
