# HomeRentSolution-frontend

Frontend de **Home Rent Solution**, plataforma chilena de arriendo de propiedades por períodos determinados.

Proyecto de la asignatura **DSY1104 Desarrollo Full Stack II** — Ingeniería en Informática, Duoc UC.
Esta versión corresponde a la **Evaluación Parcial 1**: estructura y diseño visual del sitio.

## Tecnologías

- **HTML5** con etiquetas semánticas (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3** en hojas de estilo externas, escritas a mano con Flexbox (sin frameworks)
- **JavaScript** para la validación del formulario de contacto y la navegación del panel de administración

## Cómo verlo

No necesita instalación ni servidor.

1. Clona o descarga el repositorio.
2. Abre `frontend/index-main.html` en el navegador para ver el sitio público.
3. Para el panel de administración, abre `frontend/index-adm.html` o entra desde **Iniciar sesión → Ingresar**.

## Estructura

~~~
HomeRentSolution-frontend/
├── docs/
│   ├── ERS - Home Rent Solution - v1.1.docx
│   └── Anexo 2 - Planilla de Requerimientos - Home Rent Solution.xlsx
└── frontend/
    ├── assets/
    │   ├── css/
    │   │   ├── estilos.css          Estilos del sitio público
    │   │   └── estilos-adm.css      Estilos del panel de administración
    │   ├── img/
    │   └── js/
    │       ├── contacto.js          Validación del formulario de contacto
    │       └── script.js            Navegación entre secciones del panel
    ├── index-main.html              Inicio del sitio público
    ├── propiedades.html
    ├── detalle-propiedad.html
    ├── reservas.html
    ├── registro.html
    ├── login.html
    ├── nosotros.html
    ├── blog.html
    ├── detalle-blog-1.html
    ├── detalle-blog-2.html
    ├── contacto.html
    └── index-adm.html               Panel de administración
~~~

## Vistas

### Sitio público

| Vista                | Archivo                                      | Responsable    |
|----------------------|----------------------------------------------|----------------|
| Inicio               | `index-main.html`                            | Víctor Urra    |
| Propiedades          | `propiedades.html`                           | Víctor Urra    |
| Detalle de propiedad | `detalle-propiedad.html`                     | Víctor Urra    |
| Mis reservas         | `reservas.html`                              | Víctor Urra    |
| Registro de usuario  | `registro.html`                              | Víctor Urra    |
| Inicio de sesión     | `login.html`                                 | Víctor Urra    |
| Nosotros             | `nosotros.html`                              | Jhohan Ramírez |
| Blog                 | `blog.html`                                  | Jhohan Ramírez |
| Detalle blog 1 y 2   | `detalle-blog-1.html`, `detalle-blog-2.html` | Jhohan Ramírez |
| Contacto             | `contacto.html`                              | Jhohan Ramírez |

### Panel de administración

Todo el panel está en `index-adm.html`. El menú lateral cambia entre cinco secciones sin recargar la página.

| Sección                 | Responsable      |
|-------------------------|------------------|
| Home del panel          | Noemí Paillallao |
| Listado de propiedades  | Noemí Paillallao |
| Formulario de propiedad | Noemí Paillallao |
| Listado de usuarios     | Noemí Paillallao |
| Formulario de usuario   | Noemí Paillallao |

## Documentación

En la carpeta `docs/`:

- **ERS** — Especificación de Requisitos del Software.
- **Planilla de requerimientos** — los 11 requerimientos del proyecto (7 funcionales y 4 no funcionales).

## Equipo

- Noemí Paillallao
- Jhohan Ramírez
- Víctor Urra
