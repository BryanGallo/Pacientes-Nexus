# Pacientes Nexus

Aplicación web para **seguimiento de pacientes**, desarrollada con React y TypeScript.

> **Nota:** Este proyecto está en desarrollo. Es una **primera versión** y **no está completo**. Pueden faltar funcionalidades, persistencia de datos o integración con backend.

## Tecnologías

- **React 19** + **TypeScript**
- **Vite** (build y dev server)
- **Tailwind CSS** (estilos)
- **Zustand** (estado global)
- **React Hook Form** (formularios)

## Estructura principal

- `src/components/` — Componentes: formulario de pacientes, lista y tarjetas
- `src/store/` — Estado global (Zustand)
- `src/types/` — Tipos (`Patient`, `DraftPatient`)
- `src/ui/` — Componentes de UI (p. ej. manejo de errores)

## Cómo ejecutar

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Vista previa del build
npm run preview
```
