# Mi Landing Page — Práctica de GitHub

Landing page personal para practicar el flujo de trabajo con Git y GitHub.

## Estructura del proyecto

```
mi-landing-page/
├── index.html        ← Estructura HTML
├── css/
│   └── styles.css    ← Todos los estilos
├── js/
│   └── main.js       ← Interactividad
├── .gitignore
└── README.md
```

## Ejercicios de GitHub para practicar

### Nivel 1 — Primeros pasos
- [ ] Inicializar el repositorio: `git init`
- [ ] Agregar archivos: `git add .`
- [ ] Primer commit: `git commit -m "feat: primer commit - landing page inicial"`
- [ ] Crear repo en GitHub y subir: `git remote add origin <url>` → `git push -u origin main`

### Nivel 2 — Ramas y cambios
- [ ] Crear una rama nueva: `git checkout -b feature/cambiar-colores`
- [ ] Cambiar el color principal en `css/styles.css` (variable `--color-primary`)
- [ ] Hacer commit del cambio y hacer push de la rama
- [ ] Abrir un Pull Request en GitHub y mergearlo

### Nivel 3 — Personalización
- [ ] Cambiar "Tu Nombre" en `index.html` por tu nombre real
- [ ] Actualizar los porcentajes de habilidades en `index.html`
- [ ] Agregar una nueva tarjeta de proyecto en la sección `#proyectos`
- [ ] Commitear cada cambio por separado con mensajes descriptivos

### Nivel 4 — GitHub Pages (publicar el sitio)
- [ ] Ir a Settings → Pages en tu repositorio
- [ ] Seleccionar branch `main` como source
- [ ] Tu sitio estará en: `https://<tu-usuario>.github.io/<nombre-repo>`

## Convención de commits recomendada

```
feat: nueva funcionalidad
fix: corrección de bug
style: cambios de estilos
docs: cambios en documentación
chore: tareas de mantenimiento
```
