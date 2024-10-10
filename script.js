let isConfirmed = false;

function confirmAttendance() {
    if (!isConfirmed) {
        alert("¡Gracias por confirmar!");
        document.getElementById("confirmButton").classList.add("disabled");
        document.getElementById("confirmButton").disabled = true;
        isConfirmed = true;

        setTimeout(function() {
            alert("Se está reiniciando la tarjeta.");
            location.reload(); // Recarga la página para reiniciar la tarjeta
        }, 2000); // Reinicia después de 3 segundos
    }
}

function cancelAttendance() {
    alert("¡Lamentamos que no puedas asistir!");
}

function moveButton() {
    const button = document.getElementById('confirmButton');
    const randomX = Math.floor(Math.random() * 300) - 150;  // Movimiento horizontal aleatorio
    const randomY = Math.floor(Math.random() * 100) - 50;   // Movimiento vertical aleatorio
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function detectMobile() {
    const button = document.getElementById('confirmButton');
    
    if ('ontouchstart' in document.documentElement) {
        // Si es un dispositivo móvil, usar touchstart en lugar de mouseover
        button.addEventListener('touchstart', moveButton);
    } else {
        // Para computadoras, seguir usando mouseover
        button.addEventListener('mouseover', moveButton);
    }
}

// Ejecutar la detección de dispositivos móviles al cargar la página
window.onload = detectMobile;


