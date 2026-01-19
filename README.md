# 🏞️ Caltrucafort - Casa Rural con Restaurante

Sitio web moderno y multiidioma para Caltrucafort, una casa de campo con restaurante y servicio de habitaciones por noche.

## 🌐 Características Principales

- ✅ **Multiidioma**: Soporte completo para Español, Inglés y Catalán
- ✅ **SEO Optimizado**: Sitemap, robots.txt, meta tags y Open Graph
- ✅ **Responsive**: Diseño completamente adaptable a todos los dispositivos
- ✅ **Rendimiento**: Optimizado para velocidad de carga
- ✅ **Accesibilidad**: Cumple con estándares WCAG
- ✅ **Menú de Navegación**: Selector de idioma integrado
- ✅ **Diseño Moderno**: Basado en componentes Astro

## 📁 Estructura del Proyecto

```
src/
├── components/
│   └── Navigation.astro      # Navegación con selector de idioma
├── layouts/
│   └── Layout.astro          # Layout principal con footer
├── pages/
│   ├── index.astro           # Redirección a /es/
│   ├── es/, en/, ca/         # Páginas por idioma
├── styles/
│   └── global.css            # Estilos globales y variables CSS
└── i18n.ts                   # Sistema de traducciones
```

## 🚀 Instalación y Uso

```bash
npm install
npm run dev
npm run build
npm run preview
```

## 🎨 Estilos

Sistema de variables CSS coherente con colores, espaciado, tipografía y componentes reutilizables.

## 🌍 Multiidioma

Sistema completo de traducciones con soporte para español, inglés y catalán usando `src/i18n.ts`.

## 🔍 SEO Optimizado

- Meta tags dinámicos
- Open Graph
- Sitemap.xml automático
- robots.txt
- hreflang para multiidioma
- URLs semánticas

## 📱 Responsive Design

Diseño completamente responsive con breakpoints en 768px y 480px.

## 👥 Autor

Creado para Caltrucafort - Casa Rural y Restaurante

---

**Versión**: 1.0.0
