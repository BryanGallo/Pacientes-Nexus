# Pacientes Nexus - Seguimiento de Pacientes

**Pacientes Nexus** es una aplicación web profesional y moderna diseñada para el **seguimiento y administración de pacientes**. Permite a los usuarios llevar un control detallado de las citas, síntomas y datos de contacto, garantizando que la información persista incluso después de cerrar el navegador.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Zustand](https://img.shields.io/badge/Zustand-5.x-orange)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwindcss)

## 🚀 Características

- **Gestión Completa (CRUD):** Añade, visualiza, edita y elimina registros de pacientes de forma intuitiva.
- **Persistencia de Datos:** Integración con `localStorage` mediante Zustand para que no pierdas tu información al recargar la página.
- **Validación Avanzada de Formularios:** Uso de `React Hook Form` para validaciones en tiempo real (campos obligatorios, formato de email, fechas no pasadas).
- **Interfaz Responsiva:** Diseño elegante y adaptable a dispositivos móviles y escritorio gracias a Tailwind CSS.
- **Notificaciones Interactivas:** Feedback visual inmediato para cada acción (éxito al guardar, eliminar o actualizar) con `React Toastify`.
- **Generación de IDs Únicos:** Uso de la API nativa `crypto.randomUUID()` para asegurar identificadores únicos por paciente.

## 🛠️ Stack Tecnológico

- **Frontend:** [React 19](https://react.dev/) con [TypeScript](https://www.typescriptlang.org/).
- **Estado Global:** [Zustand](https://zustand-demo.pmnd.rs/) (con Middleware de persistencia y DevTools).
- **Manejo de Formularios:** [React Hook Form](https://react-hook-form.com/).
- **Estilos:** [Tailwind CSS 4](https://tailwindcss.com/).
- **Notificaciones:** [React Toastify](https://fkhadra.github.io/react-toastify/).
- **Herramienta de Construcción:** [Vite](https://vitejs.dev/).

## 📂 Estructura del Proyecto

```text
src/
├── components/     # Componentes de la interfaz (Formulario, Lista, Tarjetas)
├── store/          # Lógica de estado global con Zustand
├── types/          # Definiciones de tipos y interfaces de TypeScript
├── ui/             # Componentes de UI reutilizables (Manejo de errores, etc.)
├── App.tsx         # Componente principal y layout básico
└── main.tsx        # Punto de entrada de la aplicación
```

## ⚙️ Instalación y Uso

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clonar el repositorio:**

    ```bash
    git clone <url-del-repositorio>
    cd PacientesNexus
    ```

2. **Instalar dependencias:**

    ```bash
    npm install
    ```

3. **Ejecutar en modo desarrollo:**

    ```bash
    npm run dev
    ```

    La aplicación estará disponible en `http://localhost:5173`.

4. **Construir para producción:**
    ```bash
    npm run build
    ```

## 📝 Notas Adicionales

Este proyecto demuestra el uso de patrones modernos en React, como la separación de la lógica de estado (Zustand) de los componentes de la interfaz, y la implementación de una experiencia de usuario fluida y libre de errores mediante validaciones robustas.

---
