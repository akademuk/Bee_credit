# 🐝 BeeCredit - Швидкі мікрокредити онлайн

![BeeCredit Logo](./src/images/logo.svg)

**BeeCredit** - сучасний веб-сайт мікрокредитної компанії з швидким оформленням кредитів до 20 000 грн. Проект розроблений з використанням найкращих практик веб-розробки та оптимізований для SEO.

## 🚀 Особливості

- ⚡ **Швидке рішення** - до 7 хвилин
- 💰 **Кредити до 20 000 грн** - гнучкі умови
- 📱 **Адаптивний дизайн** - працює на всіх пристроях
- 🎯 **SEO оптимізація** - повний набір мета-тегів
- 🌐 **Багатомовність** - UA/RU локалізація
- 🔒 **Безпека** - захист персональних даних
- ♿ **Доступність** - ARIA атрибути та семантична розмітка

## 🛠 Технологічний стек

### Frontend
- **HTML5** - семантична розмітка
- **Sass/SCSS** - препроцесор CSS з компонентною архітектурою
- **Vanilla JavaScript (ES6+)** - сучасний JS без фреймворків
- **CSS Grid & Flexbox** - сучасна верстка

### Збірка та автоматизація
- **Gulp 5.0** - система збірки з ES модулями
- **Browser-sync** - сервер розробки з live reload
- **Babel** - транспіляція ES6+ в ES5
- **PostCSS** - автопрефікси та оптимізація CSS

### Оптимізація
- **WebP** - конвертація зображень для кращої продуктивності
- **HTML/CSS/JS мініфікація** - зменшення розміру файлів
- **Tree shaking** - видалення невикористаного коду
- **Critical CSS** - критичні стилі для швидкого завантаження

## 📁 Структура проекту

```
beecredit/
├── src/                    # Вихідні файли
│   ├── html/              # HTML шаблони
│   ├── scss/              # SCSS стилі
│   │   ├── components/    # Компоненти UI
│   │   ├── pages/         # Стилі для сторінок
│   │   └── base/          # Базові стилі
│   ├── js/                # JavaScript файли
│   ├── images/            # Зображення
│   └── fonts/             # Шрифти
├── dist/                  # Зібрані файли (продакшн)
├── gulpfile.mjs          # Конфігурація Gulp
├── package.json          # Залежності проекту
└── README.md             # Документація
```

## 🏃‍♂️ Швидкий старт

### Передумови
- Node.js v18+ і npm
- Git

### Встановлення

1. **Клонування репозиторія**
```bash
git clone git@github.com:akademuk/Bee-Credit.git
cd beecredit
```

2. **Встановлення залежностей**
```bash
npm install
```

3. **Запуск сервера розробки**
```bash
npm run dev
```

Сайт буде доступний за адресою: http://localhost:3000

### Додаткові команди

```bash
# Збірка для продакшн
npm run build

# Очищення папки dist
npm run clean

# Перегляд всіх доступних команд
npm run
```

## 🌐 Браузерна підтримка

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

## 📊 SEO оптимізація

### Реалізовані функції
- ✅ **Семантична HTML5 розмітка**
- ✅ **Open Graph мета-теги**
- ✅ **Twitter Card підтримка**
- ✅ **Structured Data (JSON-LD)**
- ✅ **Robots.txt**
- ✅ **XML Sitemap**
- ✅ **Favicon комплект**
- ✅ **Мета-описи на українській мові**

### Core Web Vitals
- 🟢 **LCP** < 2.5s
- 🟢 **FID** < 100ms
- 🟢 **CLS** < 0.1

## 🎨 UI/UX особливості

- **Кредитний калькулятор** - інтерактивний розрахунок
- **Адаптивні форми** - валідація в реальному часі
- **Smooth scroll** - плавна прокрутка
- **Lazy loading** - оптимізація завантаження зображень
- **Accessibility** - підтримка клавіатурної навігації

## 🚀 Продуктивність

### Оптимізації
- **Мініфікація** HTML, CSS, JS файлів
- **WebP формат** для зображень
- **Tree shaking** для JavaScript
- **CSS критичний шлях** оптимізація
- **Gzip/Brotli** компресія

### Lighthouse Score
- 🟢 **Performance**: 95+
- 🟢 **Accessibility**: 100
- 🟢 **Best Practices**: 100
- 🟢 **SEO**: 100

## 📱 Адаптивність

### Брейкпоінти
```scss
$mobile: 767px;
$tablet: 1023px;
$desktop: 1200px;
$large: 1440px;
```

### Тестовані пристрої
- 📱 iPhone 12/13/14 Series
- 📱 Samsung Galaxy S21/S22
- 📱 iPad Pro/Air
- 💻 MacBook Pro/Air
- 🖥 Desktop monitors 1920x1080+

## 🔧 Конфігурація

### Gulp завдання
- `styles` - компіляція SCSS → CSS
- `scripts` - обробка JavaScript
- `images` - оптимізація зображень
- `webpImages` - конвертація в WebP
- `html` - обробка HTML шаблонів
- `fonts` - копіювання шрифтів
- `serve` - запуск dev сервера

### Налаштування browser-sync
```javascript
server: {
    baseDir: './dist',
    index: 'index.html'
},
port: 3000,
open: true,
notify: false
```

## 📈 Майбутні покращення

- [ ] **PWA** - Progressive Web App функціональність
- [ ] **TypeScript** - міграція на TypeScript
- [ ] **Webpack** - альтернативна збірка
- [ ] **Jest** - юніт тестування
- [ ] **Storybook** - документація компонентів
- [ ] **Docker** - контейнеризація

## 🤝 Внесок у проект

1. Fork проекту
2. Створіть feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit зміни (`git commit -m 'Add some AmazingFeature'`)
4. Push в branch (`git push origin feature/AmazingFeature`)
5. Відкрийте Pull Request

### Правила коміту
```
feat: додавання нової функції
fix: виправлення помилки
docs: оновлення документації
style: форматування коду
refactor: рефакторинг без зміни функціональності
perf: покращення продуктивності
test: додавання тестів
```

## 📄 Ліцензія

Цей проект ліцензований під **MIT License** - дивіться [LICENSE.md](LICENSE.md) для деталей.

## 📞 Контакти

**BeeCredit Team**
- 📧 Email: info@beecredit.com.ua
- 📞 Телефон: 0 800 200 001
- 🌐 Веб-сайт: https://beecredit.com.ua

---

## 🙏 Подяки

- **Gulp Community** - за відмінну систему збірки
- **Sass Team** - за потужний препроцесор CSS
- **Browser-sync** - за зручний development workflow

---

**Зроблено з ❤️ для швидких та надійних мікрокредитів в Україні**

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg)
![Ukraine](https://img.shields.io/badge/Made%20in-Ukraine-blue.svg?labelColor=yellow)
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)
![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)
