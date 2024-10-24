let slideIndex = 1; // Asegúrate de declarar la variable aquí

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