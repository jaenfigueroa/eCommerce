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
/////////////////////////////////////////
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
  clon.querySelector('.plato__boton').onclick = () => agregar(id)

  fragmento.appendChild(clon)
  contenedor.append(fragmento)
}

crearPlato(0)
crearPlato(1)
crearPlato(5)
crearPlato(6)
crearPlato(7)
/////////////////////////////////////////
/////////////////////////////////////////

/////////////////////////////////////////
function agregar(id) {
  console.log(`El plato numero ${id}, fue agregado la carrito`)
}

//SECCION 2///////////////////////////////
// let carrito = [
//   {
//     plato: 1,
//     nombre: platos[1].nombre,
//     precio: platos[1].precio,
//     cantidad: 3
//   }
// ]
/////////////////////////////////////////////////
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

  fragmento.appendChild(clon)
  contenedor.append(fragmento)
}
/////////////////////////////////////////////////
crearElemento(0, 5)
crearElemento(1, 3)
crearElemento(5, 10)

/////////////////////////////////////////////////
function calcularTotal() {
  let precios = document.querySelectorAll('.precio-final')

  //subtotal
  let subtotal = 0

  precios.forEach(x => {
    console.log(Number(x.textContent))

    subtotal += Number(x.textContent)
  })

  console.log('subtotal', subtotal)

  //tax
  let tax = subtotal * 0.0975
  console.log('tax', tax)
  //total
  let total = subtotal + tax
  console.log('total', total)

  document.getElementById('subtotal').textContent = subtotal.toFixed(2)
  document.getElementById('tax').textContent = tax.toFixed(2)
  document.getElementById('total').textContent = total.toFixed(2)
}
/////////////////////////////////////////////////
calcularTotal()

/////////////////////////////////////////////////
