# Appium Test Automation

Проект для автоматизированного тестирования мобильных приложений с использованием Appium и WebdriverIO.

## 📊 Allure Reports

### Просмотр отчётов локально

1. **Запуск тестов:**
   ```bash
   npm run android-test
   # или
   npm run ios-test
   ```

2. **Генерация отчёта:**
   ```bash
   npm run allure:generate
   ```

3. **Открытие отчёта:**
   ```bash
   npm run allure:open
   ```

4. **Запуск сервера с отчётом:**
   ```bash
   npm run allure:serve
   ```

### Просмотр отчётов в GitHub

После каждого запуска CI/CD в GitHub Actions:

1. **GitHub Pages** (только для main ветки):
   - Отчёты автоматически публикуются на: `https://{ваш-username}.github.io/{название-репозитория}/allure-report`
   - Для активации GitHub Pages перейдите в Settings → Pages → Source: GitHub Actions

2. **Artifacts** (для всех веток):
   - Перейдите в раздел Actions вашего репозитория
   - Выберите нужный workflow run
   - Скачайте artifact с именем `allure-report`
   - Распакуйте и откройте `index.html` в браузере

### Настройка GitHub Pages

1. Перейдите в **Settings** → **Pages**
2. В разделе **Source** выберите **GitHub Actions**
3. Отчёты будут доступны по адресу: `https://{username}.github.io/{repository-name}/allure-report`

## 🚀 Запуск тестов

```bash
# Android тесты
npm run android-test

# iOS тесты  
npm run ios-test
```

## 📁 Структура проекта

- `config/` - конфигурационные файлы WebdriverIO
- `test/` - тестовые файлы
- `app/` - мобильные приложения для тестирования
- `allure-results/` - результаты тестов для Allure
- `allure-report/` - сгенерированный HTML отчёт
