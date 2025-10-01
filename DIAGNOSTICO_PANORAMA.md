# 🔍 Diagnóstico de Panoramas - Vizor3D

## URLs de Acceso

- **Home:** http://localhost:5174/
- **Noiseless:** http://localhost:5174/noiseless_sample01
- **SampleAI:** http://localhost:5174/sampleai

## Checklist de Errores Comunes

### ✅ Archivos verificados:

- [x] Imágenes en `/public/images/projects/Sampleai/` (9 archivos)
- [x] Componente P_Sampleai.tsx sin errores de compilación
- [x] Rutas correctas en router

### 🔍 Errores a verificar en Browser:

#### 1. Console (F12 → Console)

Busca estos mensajes:

**Error típico 1:**

```
pannellum is not defined
```

**Solución:** Verificar que react-pannellum esté instalado

**Error típico 2:**

```
Cannot read properties of undefined (reading 'viewer')
```

**Solución:** El componente intenta usar Pannellum antes de que cargue

**Error típico 3:**

```
Failed to load scene: [sceneId]
```

**Solución:** La escena no fue agregada correctamente con addScene()

#### 2. Network (F12 → Network → Filter: Img)

Verifica que estas imágenes carguen correctamente:

**Escena 1 (inicial):**

- ✅ `/images/projects/Sampleai/Sample_AI09_01.jpg`

**Escenas adicionales (cargadas con addScene):**

- ⏳ `/images/projects/Sampleai/Sample_AI09_02.jpg`
- ⏳ `/images/projects/Sampleai/Sample_AI09_03.jpg`
- ⏳ `/images/projects/Sampleai/Sample_AI09_04.jpg`
- ⏳ `/images/projects/Sampleai/Sample_AI09_05.jpg`
- ⏳ `/images/projects/Sampleai/Sample_AI09_06.jpg`
- ⏳ `/images/projects/Sampleai/Sample_AI09_07.jpg`
- ⏳ `/images/projects/Sampleai/Sample_AI09_08.jpg`
- ⏳ `/images/projects/Sampleai/Sample_AI09_09.jpg`

**Nota:** Las escenas adicionales solo cargan cuando haces click en un hotspot.

### 🎯 Comportamiento Esperado:

1. **Al cargar la página:**

   - ✅ Aparece Sample_AI09_01.jpg
   - ✅ Se ven 8 hotspots (círculos/íconos)
   - ✅ Console muestra: "Selected: ..." cuando interactúas con sidebar

2. **Al hacer click en hotspot:**

   - ✅ Transición de 1 segundo (sceneFadeDuration)
   - ✅ Carga la nueva escena
   - ✅ Network muestra la carga de la nueva imagen
   - ✅ Aparecen los hotspots de la nueva escena

3. **Navegación completa:**
   - ✅ Puedes ir de Scene 1 → Scene 2 → ... → Scene 9
   - ✅ Puedes volver usando los hotspots "Back to Scene X"

## 🐛 Problemas Conocidos:

### Problema: "Hotspots aparecen pero no cambia escena"

**Causa:** `addScene()` usa `imageSource` en lugar de `panorama`
**Solución:** Verificar que use `panorama:` en la configuración

### Problema: "404 Not Found en imágenes"

**Causa:** Ruta incorrecta o nombre de archivo incorrecto
**Solución:** Verificar que `/images/projects/Sampleai/` coincida con `/public/images/projects/Sampleai/`

### Problema: "TypeError: Cannot read property 'viewer'"

**Causa:** Pannellum no se inicializó antes de llamar addScene
**Solución:** Usar setTimeout con 100-500ms de delay

## 📝 Comandos útiles:

```powershell
# Ver estructura de archivos
Get-ChildItem -Recurse "public\images\projects\Sampleai"

# Verificar servidor
npm run dev

# Limpiar cache y reinstalar
Remove-Item -Recurse -Force node_modules
npm install
```

## 🔧 Siguientes Pasos:

1. Abrir http://localhost:5174/sampleai en Chrome
2. Presionar F12 para DevTools
3. Ir a Console tab
4. Ir a Network tab
5. Recargar la página (Ctrl+R)
6. Compartir cualquier error que aparezca
