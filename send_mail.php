<?php
// Comprobamos si el formulario fue enviado por POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Obtener los datos del formulario
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $telefono = trim($_POST['telefono']);
    $message = trim($_POST['message']);

    // Validación simple para asegurar que los datos no estén vacíos
    if (empty($name) || empty($email) || empty($telefono) || empty($message)) {
        echo "Todos los campos son obligatorios.";
        exit;
    }

    // Configuración del correo
    $to = "destinatario@dominio.com";  // Reemplaza con el correo de destino
    $subject = "Nuevo mensaje de contacto"; // Asunto del correo
    $body = "Nombre: $name\n";
    $body .= "Correo Electrónico: $email\n";
    $body .= "Teléfono: $telefono\n";
    $body .= "Mensaje: $message\n";

    // Encabezados del correo
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "¡Mensaje enviado con éxito!";
    } else {
        echo "Hubo un error al enviar el mensaje.";
    }
} else {
    echo "Método no permitido.";
}
?>
