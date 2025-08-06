window.addEventListener('load', () => {
  console.log('Archivo vistaModal')

  const dashboard = document.querySelector('#filas-dashboard')
  const contenido = dashboard.children
  const filas = []

  console.log(contenido.item(0))
  console.log(contenido.length)

  for (let i = 0; i < contenido.length; i++) {
    filas.push(contenido[i])
  }

  filas.forEach(el => {
    el.addEventListener('click', () => {
      console.log(el.textContent.trim())
    })
  })
  
})