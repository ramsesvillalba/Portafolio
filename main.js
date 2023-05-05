

// función que cambia el fondo del body a los colores dominantes de la imagen a la que se le hace hover
function cambiarFondo(event) {
  const colorThief = new ColorThief(); // creamos una nueva instancia de la biblioteca ColorThief

  const img = event.target; // obtenemos la imagen a la que se le hace hover
  const imgSrc = img.src; // obtenemos la ruta de la imagen

  const colorDominante = colorThief.getColor(img); // obtenemos el color dominante de la imagen
  const colores = colorThief.getPalette(img); // obtenemos la paleta de colores de la imagen
  
  // cambiamos el fondo del body a los colores dominantes de la imagen
  document.body.style.background = `rgb(${colorDominante.join(", ")})`;
  document.body.style.transition = "background-color 0.2s ease-in-out";
  bodyred.classList.add(".circle-none")

  // cambiamos el fondo del body a los dos colores dominantes de la imagen
  // puedes ajustar la cantidad de colores que deseas obtener cambiando el número 2
  for (let i = 0; i < 2; i++) {
    const color = colores[i];
    const rgbColor = `rgb(${color.join(", ")})`;
    document.body.style.setProperty(`--color${i+1}`, rgbColor);
  }
}

// función que restaura el fondo del body a negro cuando el cursor sale de la imagen
function restaurarFondo() {
  document.body.style.background = "black";
  // bodyred.classList.remove('.circle-none')
}
