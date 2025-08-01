# 🐝 BeeCredit - Швидкі мікрокредити онлайн

<div align="center">

![BeeCredit Banner](https://img.shields.io/badge/BeeCredit-Швидкі%20кредити-FFD700?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjRkZENzAwIi8+Cjwvc3ZnPgo=)

**Сучасний веб-сайт мікрокредитної компанії з швидким оформленням кредитів до 20 000 грн**

[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)](https://github.com/akademuk/Bee_credit)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)](https://github.com/akademuk/Bee_credit)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Made in Ukraine](https://img.shields.io/badge/Made%20in-Ukraine-blue.svg?labelColor=yellow&style=flat)](https://ukraine.ua)

[🚀 Демо](https://akademuk.github.io/Bee_credit) • [📖 Документація](#-документація) • [🐛 Баги](https://github.com/akademuk/Bee_credit/issues) • [💡 Пропозиції](https://github.com/akademuk/Bee_credit/discussions)

</div>

---

## 📋 Зміст

- [✨ Особливості](#-особливості)
- [🛠 Технології](#-технології)
- [🏗 Архітектура](#-архітектура)
- [🚀 Швидкий старт](#-швидкий-старт)
- [📁 Структура проекту](#-структура-проекту)
- [🎯 SEO та продуктивність](#-seo-та-продуктивність)
- [📱 Адаптивність](#-адаптивність)
- [🔧 Конфігурація](#-конфігурація)
- [🤝 Участь у розробці](#-участь-у-розробці)
- [📄 Ліцензія](#-ліцензія)
- [📞 Контакти](#-контакти)

---

## ✨ Особливості

<table>
<tr>
<td width="50%">

### 🚀 Функціональність
- ⚡ **Швидке рішення** - до 7 хвилин
- 💰 **Кредити до 20 000 грн** - гнучкі умови  
- 🧮 **Інтерактивний калькулятор** - миттєвий розрахунок
- 📊 **Графік платежів** - прозора інформація
- 🔐 **Безпечна обробка даних** - PCI DSS сертифікація

</td>
<td width="50%">

### 🎨 Дизайн та UX
- 📱 **Адаптивний дизайн** - працює на всіх пристроях
- 🎯 **Modern UI/UX** - сучасний інтерфейс
- ♿ **Доступність** - WCAG 2.1 AA compliance
- 🌐 **Багатомовність** - UA/RU локалізація
- 🎭 **Smooth анімації** - плавні переходи

</td>
</tr>
</table>

---

## 🛠 Технології

<div align="center">

### Frontend Stack
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Build Tools
![Gulp](https://img.shields.io/badge/Gulp-CF4647?style=for-the-badge&logo=gulp&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Quality & Performance
![Lighthouse](https://img.shields.io/badge/Lighthouse-F44B21?style=for-the-badge&logo=lighthouse&logoColor=white)
![WebP](https://img.shields.io/badge/WebP-4285F4?style=for-the-badge&logo=webp&logoColor=white)

</div>

### Детальний стек

```yaml
Frontend:
  Markup: HTML5 (семантична розмітка)
  Styles: Sass/SCSS (BEM методологія)
  Scripts: Vanilla JavaScript ES6+
  Layout: CSS Grid & Flexbox

Build System:
  Task Runner: Gulp 5.0 (ES modules)
  Dev Server: Browser-sync 3.0
  Transpiler: Babel 7
  Bundler: Custom Gulp pipeline

Optimization:
  Images: WebP conversion, lazy loading
  CSS: PostCSS, autoprefixer, minification
  JS: ES6+ → ES5, uglification
  HTML: Minification, critical CSS inlining
```

---

## 🚀 Швидкий старт

### Передумови
```bash
# Перевірте версію Node.js (потрібна v18+)
node --version

# Перевірте версію npm
npm --version
```

### Встановлення

1. **Клонування репозиторія**
```bash
git clone https://github.com/akademuk/Bee_credit.git
cd Bee_credit
```

2. **Встановлення залежностей**
```bash
npm install
```

3. **Запуск сервера розробки**
```bash
npm run dev
```

🎉 **Готово!** Відкрийте http://localhost:3000

### Доступні команди

| Команда | Опис |
|---------|------|
| `npm run dev` | Запуск сервера розробки з watch mode |
| `gulp build` | Збірка для продакшн |
| `gulp clean` | Очищення папки dist |
| `gulp styles` | Компіляція тільки SCSS |
| `gulp scripts` | Обробка тільки JavaScript |
| `gulp images` | Оптимізація зображень |

---

## 📁 Структура проекту

```
beecredit/
├── 📂 src/                    # Вихідні файли
│   ├── 📂 scss/              # SCSS стилі
│   │   ├── 📂 blocks/        # Блоки компонентів
│   │   ├── 📂 layout/        # Базові стилі
│   │   └── 📂 includes/      # Сторонні стилі
│   ├── 📂 js/                # JavaScript файли
│   ├── 📂 images/            # Зображення та іконки
│   ├── 📂 fonts/             # Веб-шрифти
│   └── 📄 *.html             # HTML сторінки
├── 📂 dist/                   # Зібрані файли (автогенерація)
│   ├── 📂 css/               # Скомпільовані стилі
│   ├── 📂 js/                # Оброблені скрипти
│   ├── 📂 images/            # Оптимізовані зображення
│   └── 📄 *.html             # Готові HTML файли
├── 📄 gulpfile.js            # Конфігурація збірки
├── 📄 package.json           # Залежності та скрипти
├── 📄 .gitignore             # Git ігнорування файлів
└── 📄 README.md              # Ця документація
```

---

## 🎯 SEO та продуктивність

### Lighthouse Score
<div align="center">

![Performance](https://img.shields.io/badge/Performance-95+-brightgreen?style=for-the-badge&logo=lighthouse)
![Accessibility](https://img.shields.io/badge/Accessibility-100-brightgreen?style=for-the-badge&logo=lighthouse)
![Best Practices](https://img.shields.io/badge/Best%20Practices-100-brightgreen?style=for-the-badge&logo=lighthouse)
![SEO](https://img.shields.io/badge/SEO-100-brightgreen?style=for-the-badge&logo=lighthouse)

</div>

### SEO Оптимізація
- ✅ **Семантична HTML5 розмітка**
- ✅ **Open Graph мета-теги**
- ✅ **Twitter Card підтримка**
- ✅ **Structured Data (JSON-LD)**
- ✅ **XML Sitemap**
- ✅ **Robots.txt**
- ✅ **Favicon повний набір**

### Core Web Vitals
| Метрика | Значення | Статус |
|---------|----------|--------|
| **LCP** (Largest Contentful Paint) | < 2.5s | 🟢 |
| **FID** (First Input Delay) | < 100ms | 🟢 |
| **CLS** (Cumulative Layout Shift) | < 0.1 | 🟢 |

---

## 📱 Адаптивність

### Брейкпоінти
```scss
$breakpoints: (
  'mobile':  '(max-width: 767px)',
  'tablet':  '(min-width: 768px) and (max-width: 1023px)',
  'desktop': '(min-width: 1024px)',
  'large':   '(min-width: 1440px)'
);
```

### Тестовані пристрої
- 📱 **Mobile**: iPhone 12/13/14, Samsung Galaxy S21/S22
- 📱 **Tablet**: iPad Pro/Air, Samsung Galaxy Tab
- 💻 **Desktop**: 1920x1080, 1440x900, 1366x768
- 🖥 **Large**: 2560x1440, 4K displays

---

## 🔧 Конфігурація

### Gulp завдання

<details>
<summary><strong>Переглянути всі завдання</strong></summary>

```javascript
// Основні завдання
export const styles       // SCSS → CSS компіляція
export const scripts      // JavaScript обробка
export const html         // HTML мініфікація
export const images       // Оптимізація зображень
export const webpImages   // WebP конвертація
export const fonts        // Копіювання шрифтів

// Комплексні завдання
export const build        // Повна збірка
export const dev          // Режим розробки
export const clean        // Очищення dist/
export const serve        // Dev сервер
```

</details>

### Browser-sync налаштування
```javascript
{
  server: {
    baseDir: './dist',
    index: 'index.html'
  },
  port: 3000,
  open: true,
  notify: false,
  reloadOnRestart: true
}
```

---

## 🤝 Участь у розробці

Ми вітаємо внески від спільноти! 

### Як долучитися

1. **Fork** репозиторій
2. Створіть **feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit** зміни: `git commit -m 'feat: add amazing feature'`
4. **Push** у branch: `git push origin feature/amazing-feature`
5. Відкрийте **Pull Request**

### Правила коміту

Використовуйте [Conventional Commits](https://www.conventionalcommits.org/):

```
feat:     нова функціональність
fix:      виправлення помилки
docs:     оновлення документації
style:    форматування коду
refactor: рефакторинг без зміни функціональності
perf:     покращення продуктивності
test:     додавання тестів
chore:    оновлення збірки або допоміжних інструментів
```

---

## 📄 Ліцензія

Цей проект ліцензований під **MIT License** - дивіться файл [LICENSE](LICENSE) для деталей.

```
MIT License - ви можете:
✅ Використовувати комерційно
✅ Модифікувати
✅ Розповсюджувати
✅ Використовувати приватно
```

---

## 📞 Контакти

<div align="center">

### 🏢 BeeCredit Team

📧 **Email:** [info@beecredit.com.ua](mailto:info@beecredit.com.ua)  
📞 **Телефон:** [0 800 200 001](tel:0800200001)  
🌐 **Веб-сайт:** [beecredit.com.ua](https://beecredit.com.ua)

### 👨‍💻 Розробник

**Akademuk**  
📧 [akademuk24@gmail.com](mailto:akademuk24@gmail.com)  
🐙 [GitHub](https://github.com/akademuk)

</div>

---

## 🙏 Подяки

Особлива подяка:

- **[Gulp Community](https://gulpjs.com/)** - за відмінну систему збірки
- **[Sass Team](https://sass-lang.com/)** - за потужний CSS препроцесор  
- **[Browser-sync](https://browsersync.io/)** - за зручний development workflow
- **[Ukraine](https://ukraine.ua)** - за натхнення та підтримку 🇺🇦

---

<div align="center">

**Зроблено з ❤️ для швидких та надійних мікрокредитів в Україні**

[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg?style=flat)](https://github.com/akademuk)
[![Ukraine](https://img.shields.io/badge/Made%20in-Ukraine-blue.svg?labelColor=yellow&style=flat)](https://ukraine.ua)

**⭐ Поставте зірочку, якщо проект був корисним!**

</div>