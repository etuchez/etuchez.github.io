window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

let slideIndex = 1;

showSlides(slideIndex);

// Función para avanzar a la siguiente diapositiva
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Función para mostrar la diapositiva actual
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Función que muestra las diapositivas
function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    // Resetea el índice si excede el número de diapositivas
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Oculta todas las diapositivas y quita la clase activa de los puntos
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Muestra la diapositiva actual y marca el punto activo
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}

// Cambiar automáticamente las diapositivas cada 5 segundos
setInterval(() => {
    plusSlides(1);
}, 5000); // Cambia a la siguiente diapositiva cada 5 segundos

// Seleccionar todas las secciones que queremos observar
const sections = document.querySelectorAll('.section');

// Crear un IntersectionObserver para observar cuándo las secciones entran en la vista
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Agregar la clase 'show' cuando la sección entra en la vista
            entry.target.classList.add('show');
            // Si no necesitas observar más la sección, puedes dejar de observarla
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Ejecutar el efecto cuando el 10% de la sección sea visible
});

// Observar cada sección
sections.forEach(section => {
    observer.observe(section);
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío normal del formulario

    // Mostrar el mensaje de éxito
    document.getElementById('statusMessage').textContent = '¡Mensaje enviado exitosamente!';

    // Limpiar los campos del formulario
    this.reset();

    // Redirigir al usuario al principio de la página después de 2 segundos
    setTimeout(function() {
        document.getElementById('statusMessage').textContent = ''; // Limpiar el mensaje
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Regresar al principio del sitio
    }, 2000);
});

var root = document.querySelector(".nav-links")

root.addEventListener("click",e=>{
  var t = e.target,
      li = t.closest("li")
  if(li){
    root.querySelectorAll("li").forEach(each=>each.classList.remove("active1")) 
    li.classList.add("active1")
  }
})

const images = document.querySelectorAll('.image');
let currentIndex = 0; // Índice de la imagen actual

// Función para aplicar el foco cíclicamente a las imágenes
function autoFocus() {
    resetFocus(); // Quitar la clase 'activo' de todas las imágenes
    images[currentIndex].classList.add('activo'); // Agregar la clase 'activo' a la imagen actual
    currentIndex = (currentIndex + 1) % images.length; // Cambiar al siguiente índice cíclicamente
}

// Función para quitar el foco de todas las imágenes
function resetFocus() {
    images.forEach(image => image.classList.remove('activo'));
}

// Iniciar el foco automático al cargar la página y cambiar cada 3 segundos (3000 ms)
autoFocus();
setInterval(autoFocus, 3000); // Cambia 3000 a otro valor si prefieres otro intervalo de tiempo

// Mostrar botón al hacer scroll
window.addEventListener("scroll", function() {
    const backToTopButton = document.getElementById("backToTop");
    
    // Determina la visibilidad del botón al salir de la sección inicial
    if (window.scrollY > window.innerHeight) {
        backToTopButton.classList.add("visible");
    } else {
        backToTopButton.classList.remove("visible");
    }
});
