
// Tengo un flotante y espero a que ocurra el evento para enviarlo arriba de html posicion (0,0)
const  botonSubir=document.getElementById("botonSubir")

botonSubir.addEventListener('click', () => { 
  window.scrollTo(0, 0)})