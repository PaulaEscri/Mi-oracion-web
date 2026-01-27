# Cómo Probar la Página Web — NIYYAH

## 🚀 Inicio Rápido

### Opción 1: Servidor de Desarrollo (Ya está corriendo)

El servidor de desarrollo ya está activo. Simplemente:

1. **Abre tu navegador** (Chrome, Firefox, Safari, Edge)
2. **Ve a**: http://localhost:3000
3. ✅ ¡Listo! Deberías ver la landing page de NIYYAH

---

## 🔄 Si Necesitas Reiniciar el Servidor

Si por alguna razón necesitas detener y reiniciar el servidor:

### Detener el servidor:
```bash
# En la terminal donde está corriendo, presiona:
Ctrl + C
```

### Iniciar el servidor:
```bash
cd c:\Users\paula\Desktop\Visual_Code\mi-oracion-app\mi-oracion-web
npm run dev
```

Espera a ver el mensaje:
```
✓ Ready in [tiempo]ms
```

Luego abre: http://localhost:3000

---

## 🧪 Qué Probar

### 1. Hero Section
- ✅ Título grande "NIYYAH"
- ✅ Subtítulo "Mi Oración"
- ✅ 3 micro-bullets con checkmarks
- ✅ Botones de descarga (App Store + Google Play)

### 2. Sección de Diferenciación
- ✅ "No todas las apps espirituales se sienten igual"
- ✅ Mensaje de permiso: "Si hoy no puedes, está bien"

### 3. Features (4 Cards)
- ✅ 🧭 Qibla y horarios
- ✅ 📓 Diario espiritual
- ✅ 🌙 Retos suaves
- ✅ 🤲 Duas y recordatorios
- ✅ Hover effect en las cards

### 4. Privacidad
- ✅ 3 cards: Sin cuentas, Sin servidores, Todo local
- ✅ Iconos grandes y claros

### 5. Ramadán (Condicional)
- ✅ Sección con fondo azul suave
- ✅ "Este Ramadán, con más calma"
- ✅ Nota de pago único

### 6. CTA Final
- ✅ "Descarga NIYYAH gratis"
- ✅ Botones de descarga repetidos

### 7. Footer
- ✅ Links a Privacidad y Soporte
- ✅ Disclaimer legal
- ✅ Copyright con NIYYAH

### 8. Navegación
- ✅ Click en "Política de privacidad" → debe ir a `/privacidad`
- ✅ Click en "Volver al inicio" → debe regresar a `/`
- ✅ Click en "Soporte" → debe ir a `/soporte`
- ✅ FAQ expandibles funcionan

---

## 📱 Probar Responsive

### Desktop
- Abre http://localhost:3000 en tamaño normal

### Tablet
1. Abre DevTools (F12)
2. Click en el icono de dispositivo móvil (Toggle device toolbar)
3. Selecciona "iPad" o similar
4. Verifica que todo se vea bien

### Móvil
1. En DevTools, selecciona "iPhone" o "Galaxy S20"
2. Verifica que:
   - Los botones se apilan verticalmente
   - Las cards se muestran en 1 columna
   - El texto es legible
   - Los espacios son adecuados

---

## 🎨 Verificar Diseño

### Colores
- ✅ Fondo claro (#F8FAFC)
- ✅ Cards blancas
- ✅ Texto oscuro suave (#1E293B)
- ✅ Azul sutil en CTAs (#3B82F6)

### Animaciones
- ✅ Fade in al cargar
- ✅ Slide up en secciones
- ✅ Hover effects suaves
- ✅ Todo debe sentirse calmado (no brusco)

### Espaciado
- ✅ Mucho espacio en blanco
- ✅ Secciones bien separadas
- ✅ Texto respirable

---

## 🐛 Solución de Problemas

### "No puedo acceder a localhost:3000"

**Solución 1**: Verifica que el servidor esté corriendo
```bash
# Deberías ver algo como:
# ✓ Ready in 1821ms
# - Local: http://localhost:3000
```

**Solución 2**: Prueba con la IP local
```
http://127.0.0.1:3000
```

**Solución 3**: Verifica que el puerto no esté ocupado
```bash
# Detén el servidor (Ctrl+C) y reinicia
npm run dev
```

### "Veo errores en la consola del navegador"

1. Abre DevTools (F12)
2. Ve a la pestaña "Console"
3. Si ves errores, toma captura y revisa

### "Los cambios no se reflejan"

El servidor de desarrollo tiene **hot reload** automático:
- Guarda el archivo
- Espera 1-2 segundos
- La página se recargará automáticamente

Si no funciona:
```bash
# Ctrl+C para detener
npm run dev  # Reiniciar
```

---

## 🌐 Probar en Otros Dispositivos (Misma Red)

Si quieres probar en tu teléfono o tablet:

1. **Encuentra tu IP local**:
   ```bash
   ipconfig
   # Busca "IPv4 Address" en tu adaptador de red
   # Ejemplo: 192.168.1.100
   ```

2. **En tu dispositivo móvil**:
   - Conéctate a la misma WiFi
   - Abre el navegador
   - Ve a: `http://[TU_IP]:3000`
   - Ejemplo: `http://192.168.1.100:3000`

---

## 📊 Build de Producción (Opcional)

Para probar cómo se verá en producción:

```bash
# 1. Crear build
npm run build

# 2. Iniciar servidor de producción
npm run start

# 3. Abrir
http://localhost:3000
```

La versión de producción es más rápida y optimizada.

---

## ✅ Checklist de Prueba Completa

- [ ] Hero se ve correctamente (NIYYAH grande)
- [ ] Todas las secciones están presentes (7 en total)
- [ ] Botones de descarga funcionan (abren URLs)
- [ ] Links de navegación funcionan
- [ ] FAQ se expanden/colapsan
- [ ] Responsive funciona (móvil, tablet, desktop)
- [ ] Animaciones son suaves
- [ ] No hay errores en consola
- [ ] Colores coinciden con el diseño
- [ ] Espaciado es generoso
- [ ] Tipografía es legible

---

## 🎯 Próximo Paso: Deploy

Una vez que todo se vea bien localmente, puedes hacer deploy:

```bash
# Opción 1: Vercel (recomendado)
npm i -g vercel
vercel --prod

# Opción 2: Build estático
npm run build
# Subir carpeta .next a tu hosting
```

---

**¿Necesitas ayuda?** Revisa `walkthrough.md` para más detalles técnicos.
