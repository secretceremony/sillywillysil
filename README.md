# Vite Vue Website

A simple portfolio website built using **Vue 3**, **Vite**, and **Vuetify** with multiple pages and a working contact form powered by **EmailJS**.

## ✨ Features

- ⚡ Fast development with Vite
- 🎨 Material Design styling with Vuetify
- 📄 Multiple pages: About, Portfolio, Commission
- 📬 Email contact form using EmailJS
- 🔗 Navigation bar and footer components

## 📁 Project Structure

```
src/
├── App.vue                # Root component
├── main.js                # App entry point
├── router/                # Vue Router config
├── components/
│   ├── Navbar.vue
│   ├── Footer.vue
│   └── ContactForm.vue
├── pages/
│   ├── About.vue
│   ├── Portfolio.vue
│   └── Commission.vue
└── plugins/
    └── vuetify.js         # Vuetify setup
```

## 🚀 Setup & Development

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## 📦 Deployment

You can deploy this project easily on platforms like:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- GitHub Pages (with a Vite config tweak)

## 🔧 EmailJS Setup

To make the contact form work:

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create a **service**, **template**, and get your **public key**
3. Replace the values in `ContactForm.vue`:
   ```js
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.form, 'YOUR_PUBLIC_KEY')
   ```

> ✅ Tip: Use `.env` files to hide your keys in production.

## 🧱 Built With

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Vuetify 3](https://vuetifyjs.com/)
- [EmailJS](https://www.emailjs.com/)

---

## 📄 License

MIT License © 2025 Your Name
```

---