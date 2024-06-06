// Obtener el botón del menú hamburguesa y el menú lateral
var menuToggle = document.getElementById('menu-toggle');
var sidebar = document.getElementById('app-sidebar');

// Agregar un evento de clic al botón del menú hamburguesa
menuToggle.addEventListener('click', function() {
    // Alternar la clase 'hidden' en el menú lateral para mostrarlo u ocultarlo
    sidebar.classList.toggle('hidden');
});
