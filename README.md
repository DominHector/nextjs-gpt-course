# 🚀 Next.js Conversational AI & Utility App

Este proyecto es una aplicación web construida con **Next.js** que integra diversas herramientas y funcionalidades, incluyendo **asistentes conversacionales, cálculo de IMC, conversor de divisas y más**.  
Además, está diseñada para ser escalable y fácilmente adaptable a futuras mejoras.

---

## 📌 **Tecnologías Utilizadas**
- **Next.js 14** - SSR, SSG e ISR para optimización del rendimiento.
- **TypeScript** - Código tipado para mayor seguridad y escalabilidad.
- **Tailwind CSS** - Estilos eficientes y personalizables.
- **Capacitor** - Para conversión a aplicación móvil (Android & iOS).
- **NextAuth.js** - Autenticación con OAuth (Google, GitHub).
- **OpenAI API** - Asistente conversacional con GPT.
- **SWR & React Query** - Manejo eficiente del estado y fetching de datos.

---

## 📂 **Estructura del Proyecto**
.
├── README.md
├── components
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── IMCCalculator
│   │   ├── IMCCalculator.module.css
│   │   └── IMCCalculator.tsx
│   └── LLMChat
│       └── LLMChat.tsx
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src
│   └── app
│       ├── about
│       │   └── page.tsx
│       ├── api
│       │   └── chat
│       │       └── route.ts
│       ├── chatme
│       │   └── page.tsx
│       ├── exchange
│       │   └── page.tsx
│       ├── favicon.ico
│       ├── globals.css
│       ├── imc
│       │   └── page.tsx
│       ├── layout.tsx
│       ├── page.tsx
│       └── projects
│           └── page.tsx
├── tailwind.config.js
└── tsconfig.json

---

## ✨ **Funciones Implementadas**
### 🗨️ **1. Asistente Conversacional (ChatGPT)**
- Conexión a **OpenAI API** con personalización del **System Role**.
- Recuerda la conversación en la sesión.
- Responde con la **personalidad de Héctor** (sarcasmo, precisión y humor).
- Interfaz responsiva con **Tailwind CSS**.

### 📊 **2. Calculadora de IMC**
- Calcula el **Índice de Masa Corporal (IMC)** basado en peso y altura.
- Muestra el estado del usuario (Peso normal, Sobrepeso, etc.).
- Interfaz intuitiva y adaptada a **modo oscuro/claro**.

### 💱 **3. Conversor de Divisas**
- Conversión de moneda usando la API gratuita **Frankfurter API**.
- Permite seleccionar **USD, EUR, GBP y JPY**.
- Resultado actualizado automáticamente con tasas de cambio en tiempo real.

### 🌐 **4. Sistema de Rutas y Navegación**
- Uso de `next/link` para navegación sin recarga.
- `app/` como **App Router** en Next.js 14.
- Páginas organizadas en módulos (`about/`, `chat/`, `imc/`, `exchange/`).

### 📱 **5. Conversión a Aplicación Móvil**
- **Integración con Capacitor** para Android & iOS.
- La app se empaqueta como una **PWA** (Progressive Web App).
- Desplegable en Play Store y App Store.

### 🚀 **6. Optimización y Despliegue**
- **Optimización SEO** con `next/head` y `Metadata API`.
- Uso de `next/image` para carga optimizada de imágenes.
- **Despliegue en Vercel** con integración automática.

---

## 📌 **Cómo Instalar y Ejecutar**
1️⃣ **Clonar el repositorio**  
git clone https://github.com/tuusuario/nextjs-gpt-course.git
cd nextjs-gpt-course

2️⃣ Instalar dependencias
npm install

3️⃣ Configurar variables de entorno (.env.local)
OPENAI_API_KEY=tu_api_key_aqui
SYSTEM_ROLE="Eres xxx, un asistente..."

4️⃣ Ejecutar el proyecto en desarrollo
npm run dev

🛠️ Futuras Mejoras
✅ Integrar soporte de voz en el asistente (Web Speech API + ElevenLabs).
✅ Persistencia del chat en LocalStorage para recordar conversaciones.
✅ Agregar notificaciones push en Android/iOS con Firebase.
✅ Modo multiusuario con perfiles personalizados.

📩 Contacto y Colaboración
¿Tienes ideas o sugerencias? 🤝
📌 LinkedIn: https://www.linkedin.com/in/h%C3%A9ctor-dom%C3%ADnguez-b594a730/