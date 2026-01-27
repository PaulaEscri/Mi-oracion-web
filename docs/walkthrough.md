# Mi Oración — Landing Web Informativa

## Resumen

Se ha completado exitosamente la landing page informativa para Mi Oración, diseñada para convertir tráfico frío de Meta Ads en descargas de la app.

**Filosofía implementada**: Sin presión. Sin culpa. Sin drama.

---

## ✅ Lo que se ha construido

### 1. Estructura del Proyecto

```
mi-oracion-web/
├── app/
│   ├── layout.tsx          # Layout raíz con SEO completo
│   ├── page.tsx             # Landing principal (7 secciones)
│   ├── globals.css          # Sistema de diseño completo
│   ├── privacidad/
│   │   └── page.tsx         # Política de privacidad
│   └── soporte/
│       └── page.tsx         # Página de soporte + FAQ
├── components/
│   ├── DownloadButtons.tsx  # Botones App Store / Google Play
│   └── FeatureCard.tsx      # Cards de características
├── config/
│   └── site.ts              # Configuración centralizada
└── public/
    ├── og-image.png         # Imagen Open Graph
    └── app-icon.png         # Icono de la app
```

---

## 🎨 Sistema de Diseño

### Colores (Calm & Premium)

- **Background**: `#F8FAFC` (slate-50) — Fondo principal muy claro
- **Cards**: `#FFFFFF` — Blanco puro para tarjetas
- **Text Primary**: `#1E293B` (slate-800) — Texto principal suave
- **Text Secondary**: `#64748B` (slate-500) — Texto secundario
- **Accent**: `#3B82F6` (blue-500) — Azul sutil para CTAs
- **Accent Hover**: `#2563EB` (blue-600) — Hover state

### Tipografía

- **Font**: Inter (Google Fonts)
- **Display**: swap (optimización de carga)
- **Smoothing**: Antialiased para mejor legibilidad

### Espaciado

Sistema de espaciado consistente con escala personalizada:
- `--spacing-xs`: 0.5rem
- `--spacing-sm`: 1rem
- `--spacing-md`: 1.5rem
- `--spacing-lg`: 2rem
- `--spacing-xl`: 3rem
- `--spacing-2xl`: 4rem
- `--spacing-3xl`: 6rem

### Animaciones

Todas las animaciones son **suaves y lentas** (0.8s ease-out):
- `fadeIn` — Aparición gradual
- `slideUp` — Deslizamiento desde abajo
- `slideDown` — Deslizamiento desde arriba
- Stagger animations para hijos (delay incremental)

---

## 📄 Estructura de la Landing (7 Secciones)

### 1️⃣ Hero Section

**Objetivo**: Entender qué es Mi Oración en 5-10 segundos

**Contenido**:
- Título grande: "Mi Oración"
- Subtítulo: "Una app musulmana para tu práctica espiritual, sin presión ni culpa."
- 3 micro-bullets:
  - ✓ Calma y minimalismo
  - ✓ Diario y retos suaves
  - ✓ Privacidad total (todo offline)
- **CTAs inmediatos**: Botones App Store + Google Play

### 2️⃣ Differentiation Block

**Objetivo**: Comunicar la filosofía única

**Contenido**:
- "No todas las apps espirituales se sienten igual."
- "Mi Oración no te mide ni te juzga."
- "Si hoy no puedes, está bien. Vuelves cuando quieras."

**Diseño**: Fondo suave (card/50), texto centrado, espaciado generoso

### 3️⃣ Features (4 Cards)

**Objetivo**: Mostrar qué incluye la app (muy resumido)

**Cards**:
1. 🧭 **Qibla y horarios de oración** — Dirección correcta y horarios adaptados
2. 📓 **Diario espiritual privado** — Reflexiona sin que nadie más lo vea
3. 🌙 **Retos suaves, sin penalización** — Desafíos sin presión ni racha
4. 🤲 **Duas y recordatorios respetuosos** — Recordatorios gentiles

**Diseño**: Grid 2 columnas (responsive), cards con hover effect sutil

### 4️⃣ Privacy Block

**Objetivo**: Transmitir confianza inmediata

**Contenido**: 3 puntos clave
- 🔒 **Sin cuentas** — No necesitas registrarte
- ☁️ **Sin servidores** — Tus datos nunca salen de tu teléfono
- 📱 **Todo local** — Se guarda en tu dispositivo

**Diseño**: Grid 3 columnas, cards con iconos grandes, sombras suaves

### 5️⃣ Ramadan Section (Condicional)

**Objetivo**: Promocionar el Modo Ramadán

**Contenido**:
- "Este Ramadán, con más calma."
- "Activa el Modo Ramadán para una experiencia sin distracciones."
- Nota: "Pago único · No es suscripción"
- CTA → Descargar app

**Control**: Se puede ocultar/mostrar desde `config/site.ts` → `showRamadanSection`

### 6️⃣ Final CTA

**Objetivo**: Última oportunidad de conversión

**Contenido**:
- "Descarga Mi Oración gratis"
- "y acompaña tu práctica espiritual con calma."
- Botones App Store + Google Play (repetidos)

### 7️⃣ Footer (Minimal)

**Contenido**:
- Links: Política de privacidad | Soporte
- Disclaimer legal: "Mi Oración no está afiliada a ninguna institución religiosa."
- Copyright

**Diseño**: Muy limpio, sin ruido, bordes sutiles

---

## 🧩 Componentes Reutilizables

### `<DownloadButtons />`

Botones para App Store y Google Play con:
- Iconos oficiales (SVG)
- Hover animations (scale + shadow)
- Tracking-ready (preparado para analytics)
- Accesibilidad (ARIA labels)
- Responsive (stack en móvil)

**Uso**:
```tsx
<DownloadButtons className="justify-center" />
```

### `<FeatureCard />`

Card para mostrar características:
- Props: `icon`, `title`, `description`
- Hover effect (lift + shadow)
- Icon scale animation
- Rounded corners (20px)

**Uso**:
```tsx
<FeatureCard
  icon="🧭"
  title="Qibla y horarios"
  description="Encuentra la dirección correcta..."
/>
```

---

## 📱 Páginas Legales

### Política de Privacidad (`/privacidad`)

**Contenido**:
- Énfasis en privacidad total
- No recopilación de datos personales
- Todo local en el dispositivo
- Datos de ubicación procesados localmente
- Análisis anónimos (opcional)
- Contacto de soporte

**Diseño**: Prosa legible, secciones claras, link de vuelta al inicio

### Soporte (`/soporte`)

**Contenido**:
- Email de contacto con botón CTA
- FAQ expandible (4 preguntas):
  1. ¿Mi Oración es gratis?
  2. ¿Necesito crear una cuenta?
  3. ¿Mis datos están seguros?
  4. ¿Está disponible en mi idioma?

**Diseño**: Details/summary para FAQ (accesible), cards con hover

---

## 🔍 SEO y Metadata

### Configuración Completa

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: "Mi Oración — App musulmana sin presión ni culpa",
  description: "Una app espiritual para tu práctica musulmana...",
  keywords: "app musulmana, oración, islam, diario espiritual...",
  
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "...",
    description: "...",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  },
  
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"]
  },
  
  // Robots
  robots: { index: true, follow: true }
}
```

### Assets Generados

#### App Icon
![App Icon](C:/Users/paula/.gemini/antigravity/brain/4b44c460-d55b-43ec-a500-401179c20d86/mi_oracion_icon_1769454835908.png)

Icono minimalista con media luna en azul suave sobre fondo blanco.

#### Open Graph Image
![OG Image](C:/Users/paula/.gemini/antigravity/brain/4b44c460-d55b-43ec-a500-401179c20d86/og_image_1769454852076.png)

Imagen social con título, filosofía, y 3 iconos representativos.

---

## ⚙️ Configuración Centralizada

### `config/site.ts`

Todos los valores configurables en un solo lugar:

```typescript
export const siteConfig = {
  name: "Mi Oración",
  description: "...",
  
  // URLs de las tiendas (actualizar con URLs reales)
  appStoreUrl: "https://apps.apple.com/app/mi-oracion",
  playStoreUrl: "https://play.google.com/store/apps/...",
  
  // Feature flags
  showRamadanSection: true, // Toggle Ramadan section
  
  // Contacto
  supportEmail: "soporte@mioracion.app",
  
  // SEO
  seo: { ... },
  
  // Legal
  legalDisclaimer: "Mi Oración no está afiliada..."
}
```

**Ventajas**:
- Actualizar URLs sin tocar código
- Toggle features fácilmente
- Preparado para i18n futuro

---

## 🚀 Deployment

### Opción 1: Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
cd mi-oracion-web
vercel --prod
```

**Ventajas**:
- Zero-config para Next.js
- CDN global automático
- SSL gratis
- Preview deployments
- Analytics integrado

### Opción 2: Netlify

```bash
# Build
npm run build

# Deploy carpeta .next
netlify deploy --prod --dir=.next
```

### Opción 3: Export Estático

```bash
# Modificar next.config.ts
export default {
  output: 'export'
}

# Build
npm run build

# Deploy carpeta 'out' a cualquier hosting
```

---

## 📊 Performance

### Build Results

✅ **TypeScript**: Compila sin errores  
✅ **Build**: Exitoso (Exit code: 0)  
✅ **Pages**: 3 páginas estáticas generadas
- `/` (landing)
- `/privacidad`
- `/soporte`

### Optimizaciones Implementadas

- ✅ Static generation (SSG)
- ✅ Font optimization (Inter con display: swap)
- ✅ CSS purging (TailwindCSS v4)
- ✅ Minimal JavaScript
- ✅ Smooth animations (CSS-only)
- ✅ Responsive images ready

---

## 🎯 Próximos Pasos

### Antes de Lanzar

1. **Actualizar URLs de las tiendas**
   - Editar `config/site.ts`
   - Reemplazar placeholders con URLs reales de App Store y Google Play

2. **Configurar Analytics**
   - Añadir Google Analytics 4
   - Añadir Meta Pixel para tracking de conversiones
   - Event tracking en botones de descarga

3. **Testing Manual**
   - Abrir `http://localhost:3000` en navegador
   - Verificar todas las secciones
   - Probar responsive (móvil, tablet, desktop)
   - Verificar links de navegación
   - Probar FAQ expandibles

4. **SEO Final**
   - Añadir `metadataBase` en `layout.tsx` con dominio real
   - Verificar OG image se ve bien en Facebook Debugger
   - Verificar Twitter Card preview

### Mejoras Futuras (Opcional)

- [ ] Añadir i18n (next-intl) para múltiples idiomas
- [ ] Integrar CMS headless para contenido editable
- [ ] A/B testing de copy y CTAs
- [ ] Añadir testimonios (si se decide)
- [ ] Video demo de la app
- [ ] Blog para SEO orgánico

---

## 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev          # http://localhost:3000

# Build
npm run build        # Producción
npm run start        # Servidor de producción local

# Linting
npm run lint         # ESLint

# Type checking
npx tsc --noEmit     # Verificar TypeScript
```

---

## 📝 Notas Importantes

### ⚠️ URLs Placeholder

Los links de App Store y Google Play son **placeholders**. Debes actualizarlos en `config/site.ts` antes del lanzamiento.

### 🌙 Sección Ramadán

Actualmente **siempre visible**. Para ocultarla:
```typescript
// config/site.ts
showRamadanSection: false
```

### 🎨 Lint Warning

Hay un warning de CSS sobre `@theme` (TailwindCSS v4). Es **normal y esperado**, no afecta la funcionalidad.

### 📧 Email de Soporte

El email `soporte@mioracion.app` es un placeholder. Actualízalo con tu email real.

---

## ✨ Resultado Final

Una landing page:
- ✅ **Limpia** — Sin ruido visual
- ✅ **Elegante** — Diseño premium y calmado
- ✅ **Honesta** — Sin promesas exageradas
- ✅ **Calmada** — Animaciones suaves, espaciado generoso
- ✅ **Sin ruido** — Sin popups, banners, o carruseles
- ✅ **Coherente** — Alineada con la filosofía de la app
- ✅ **Optimizada** — Pensada para convertir tráfico frío en descargas

**Filosofía cumplida**: Sin presión. Sin culpa. Sin drama. ✨
