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
    nombre: 'bacon-eggs',
    precio: 2.23
  },
  {
    id: 1,
    nombre: 'chicken-salad',
    precio: 5.12
  },
  {
    id: 2,
    nombre: 'fish-sticks-fries',
    precio: 7.82
  },
  {
    id: 3,
    nombre: 'french-fries',
    precio: 7.82
  },
  {
    id: 4,
    nombre: 'ravioli',
    precio: 7.82
  },
  {
    id: 5,
    nombre: 'salmon-vegetables',
    precio: 7.82
  },
  {
    id: 6,
    nombre: 'spaghetti-meat-sauce',
    precio: 7.82
  },
  {
    id: 7,
    nombre: 'tortellini',
    precio: 7.82
  }
]

/////////////////////////////////////////
const contenedorPlatos = document.getElementById('contenedor-platos')

platos.forEach(plato => {
  let articulo = document.createElement('article')
  let imagen = document.createElement('picture')
  let contenedor = document.createElement('div')
  let nombre = document.createElement('h3')
  let precio = document.createElement('p')
  let boton = document.createElement('button')

  articulo.className = 'plato'
  imagen.className = 'plato__imagen'
  contenedor.className = 'plato__contenedor'
  nombre.className = 'plato__nombre'
  precio.className = 'plato__precio'
  boton.className = 'plato__boton'

  imagen.style.backgroundImage = `url('./img/assets/platos/plate__${plato.nombre}.png')`
  nombre.textContent = plato.nombre.split('-').join(' ')
  precio.textContent = plato.precio
  boton.addEventListener('click', () => agregar(plato.id))
  boton.textContent = 'Add to cart'

  contenedor.append(nombre)
  contenedor.append(precio)
  contenedor.append(boton)
  articulo.append(imagen)
  articulo.append(contenedor)

  contenedorPlatos.append(articulo)
})

/////////////////////////////////////////
function agregar(id) {
  console.log(`El plato numero ${id}, fue agregado la carrito`)
}
