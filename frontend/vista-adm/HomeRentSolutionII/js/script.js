function showPage(pageId, event) {
    // Ocultar todas las páginas
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Mostrar página seleccionada
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Actualizar nav activo (si el evento proviene de un enlace del menú)
    if (event && event.target) {
        const navItem = event.target.closest('.nav-item');
        if (navItem) {
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            navItem.classList.add('active');
        }
    }

    // Actualizar título de la página
    const titles = {
        'home': 'Home Admin',
        'propiedades': 'Gestión de Propiedades',
        'propiedad-form': 'Crear / Editar Propiedad',
        'usuarios': 'Gestión de Usuarios',
        'usuario-form': 'Crear / Editar Usuario'
    };

    const titleElement = document.getElementById('page-title');
    if (titleElement) {
        titleElement.textContent = titles[pageId] || 'Panel Admin';
    }
}