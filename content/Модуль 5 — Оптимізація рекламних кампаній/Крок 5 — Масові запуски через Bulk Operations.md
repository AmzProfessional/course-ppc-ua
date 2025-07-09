**Мета**: Освоїти використання Bulk Operations для масового запуску рекламних кампаній, заповнення шаблонів і перевірки результатів, щоб економити час і масштабувати PPC-діяльність.

> [!note] **Примітка**: Перегляньте відео (23:58–33:32), яке пояснює, як використовувати Bulk Operations для масового запуску кампаній, заповнення шаблонів і обробку помилок.

---
## 1. Значення Bulk Operations

> [!note] Bulk Operations дозволяють масово запускати, оптимізувати або коригувати рекламні кампанії через шаблони, що значно економить час при роботі з великою кількістю кампаній (10–15+).

**Чому це важливо?**

- **Економія часу**: Запуск 10–15 кампаній вручну займає години, тоді як Bulk Operations дозволяє зробити це за 10–20 хвилин.
- **Масштабування**: Дозволяє швидко запускати кампанії для кількох товарів, ключів або ASIN конкурентів.
- **Гнучкість**: Підтримує налаштування кампаній, груп оголошень, продуктів, ключів і таргетингу.
- **Контроль помилок**: Звіт про помилки допомагає швидко виправити проблеми в шаблоні.

**Приклад**: Через Bulk Operations можна запустити 10 Sponsored Products кампаній для ключа "baby bottle" і ASIN конкурентів за 15 хвилин, замість 1–2 годин вручну.

---
## 2. Процес використання Bulk Operations

> [!note] Bulk Operations використовує шаблон Excel для створення кампаній, де кожна строка відповідає дії (кампанія, група оголошень, продукт, таргетинг).

### Кроки створення шаблону:

1. **Завантаження шаблону**:
    - У Seller Central → Advertising → Campaign Manager → Bulk Operations → Download Template.
    - Виберіть тип кампаній (наприклад, Sponsored Products), період (наприклад, 30 днів), поставте галочку на потрібних вкладках (Campaigns, Ad Groups, Product Ads, Keywords).
    - Завантажте і відкрийте файл Excel.
2. **Заповнення шаблону**:
    - **Campaigns**:
        - **Operation**: Create.
        - **Campaign Name**: Наприклад, "SP_Keyword_Exact_BabyBottle_ASIN123".
        - **Portfolio ID**: Візьміть ID із вкладки Portfolios у завантаженому файлі (необов’язково).
        - **Start Date**: Вкажіть дату запуску (наприклад, 2025-07-10).
        - **Targeting Type**: Manual.
        - **Daily Budget**: $ 5–10.
        - **Bidding Strategy**: Down Only.
    - **Ad Groups**:
        - **Operation**: Create.
        - **Campaign Name**: Повторіть назву кампанії.
        - **Ad Group Name**: Наприклад, "SP_Keyword_Exact_BabyBottle_ASIN123".
        - **Status**: Enabled.
        - **Default Bid**: $ 1 (можна коригувати).
    - **Product Ads**:
        - **Operation**: Create.
        - **Campaign Name, Ad Group Name**: Повторіть назви.
        - **SKU**: Вкажіть SKU товару (наприклад, "SqueezeBottles346").
        - **Status**: Enabled.
    - **Keywords** (для Keyword Targeting):
        - **Operation**: Create.
        - **Campaign Name, Ad Group Name**: Повторіть назви.
        - **Keyword Text**: Наприклад, "baby bottle".
        - **Match Type**: Exact/Phrase/Broad (наприклад, Exact).
        - **Bid**: $ 0.75.
    - **Product Targeting** (для таргетингу на конкурентів):
        - **Operation**: Create.
        - **Campaign Name, Ad Group Name**: Повторіть назви.
        - **Product Targeting Expression**: Вкажіть ASIN конкурента (наприклад, "asin=B07XYZ123").
        - **Match Type**: Exact.
        - **Bid**: $ 0.50.
3. **Перевірка SKU і ASIN**:
    - Переконайтеся, що SKU активний (Seller Central → Inventory → Manage Inventory → Available > 0).
    - Для Product Targeting використовуйте ASIN конкурентів із топ-видачі за ключем.
4. **Завантаження файлу**:
    - У Bulk Operations → Upload File → Виберіть заповнений шаблон → Process Changes.
    - Очікуйте обробку (2–5 хвилин залежно від кількості кампаній).
5. **Перевірка результатів**:
    - У Bulk Operations перевірте статус (Processed або Errors).
    - Якщо є помилки, відкрийте звіт про помилки, виправте (наприклад, неправильний SKU, дата в минулому) і повторно завантажте.
6. **Додавання до портфоліо (якщо не вказано ID)**:
    - У Campaign Manager знайдіть нові кампанії за датою запуску.
    - Виберіть кампанії → Bulk Actions → Move to Portfolio → Виберіть портфоліо (наприклад, "SqueezeBottles").

### Чек-лист:

- [ ]  Завантажити шаблон із Bulk Operations, вибрати Sponsored Products.
- [ ]  Заповнити вкладки Campaigns, Ad Groups, Product Ads, Keywords/Product Targeting.
- [ ]  Перевірити SKU (Available > 0) і ASIN конкурентів.
- [ ]  Завантажити файл, перевірити статус (Processed/Errors).
- [ ]  Виправити помилки, якщо є, і додати кампанії до портфоліо.

---

## 3. Практичне завдання

#### **Завдання**: Створіть шаблон Bulk Operations для запуску двох Sponsored Products кампаній: одна на ключ, друга на ASIN конкурента.

**Інструкція**:

1. У Seller Central → Advertising → Campaign Manager → Bulk Operations → Download Template.
2. Виберіть Sponsored Products, період 30 днів, вкладки: Campaigns, Ad Groups, Product Ads, Keywords, Product Targeting.
3. **Заповнення шаблону**:
    - **Кампанія 1 (Keyword Targeting)**:
        - Campaigns: Operation=Create, Campaign Name="SP_Keyword_Exact_BabyBottle_ASIN123", Portfolio ID=(з вкладки Portfolios), Start Date=2025-07-10, Targeting Type=Manual, Daily Budget=$ 5, Bidding Strategy=Down Only.
        - Ad Groups: Operation=Create, Campaign Name=повторити, Ad Group Name="SP_Keyword_Exact_BabyBottle_ASIN123", Status=Enabled, Default Bid=$ 1.
        - Product Ads: Operation=Create, Campaign Name/Ad Group Name=повторити, SKU=SqueezeBottles346, Status=Enabled.
        - Keywords: Operation=Create, Campaign Name/Ad Group Name=повторити, Keyword Text="baby bottle", Match Type=Exact, Bid=$ 0.75.
    - **Кампанія 2 (Product Targeting)**:
        - Campaigns: Operation=Create, Campaign Name="SP_Product_ASIN123_B07XYZ123", Portfolio ID=(з вкладки Portfolios), Start Date=2025-07-10, Targeting Type=Manual, Daily Budget=$ 5, Bidding Strategy=Down Only.
        - Ad Groups: Operation=Create, Campaign Name=повторити, Ad Group Name="SP_Product_ASIN123_B07XYZ123", Status=Enabled, Default Bid=$ 1.
        - Product Ads: Operation=Create, Campaign Name/Ad Group Name=повторити, SKU=SqueezeBottles346, Status=Enabled.
        - Product Targeting: Operation=Create, Campaign Name/Ad Group Name=повторити, Product Targeting Expression="asin=B07XYZ123", Match Type=Exact, Bid=$ 0.50.
4. Перевірте SKU (SqueezeBottles346) у Inventory → Available > 0.
5. Завантажте файл у Bulk Operations → Upload File → Process Changes.
6. Перевірте статус через 5 хвилин, виправте помилки (якщо є).
7. Додайте кампанії до портфоліо "SqueezeBottles", якщо не вказали Portfolio ID.
8. Запишіть результати:
    - Опис кампаній (назви, ключ/ASIN, бюджет, ставки).
    - Обґрунтування вибору ключів/ASIN.

**Результат**:

- Кампанія 1: "SP_Keyword_Exact_BabyBottle_ASIN123, ключ ‘baby bottle’ (exact), SKU=SqueezeBottles346, бюджет $ 5, ставка $ 0.75, Down Only."
- Кампанія 2: "SP_Product_ASIN123_B07XYZ123, ASIN конкурента B07XYZ123, SKU=SqueezeBottles346, бюджет $ 5, ставка $ 0.50, Down Only."
- Обґрунтування: "Ключ ‘baby bottle’ обрано через високу релевантність, ASIN конкурента — із топ-видачі для конкуренції."

---

## 4. Ключові поради для Account Manager’ів

- **Перевіряйте SKU/ASIN**: Неправильний SKU або ASIN призведе до помилок у запуску.
- **Використовуйте шаблон**: Зберігайте чистий шаблон для швидкого заповнення.
- **Тестуйте невеликими групами**: Починайте з 2–5 кампаній, щоб відпрацювати процес.
- **Аналізуйте помилки**: Завжди перевіряйте звіт про помилки, виправляйте дату, SKU або формат ASIN.
- **Додавайте до портфоліо**: Якщо не вказали Portfolio ID, додавайте кампанії вручну після запуску.

---

## 5. Рефлексія та завершення модуля

- **Перевірте себе**:
    - Чи можете заповнити шаблон Bulk Operations для запуску кампаній?
    - Чи вмієте перевіряти SKU і виправляти помилки в звіті?
    - Чи готові масштабувати кампанії через Bulk Operations?
- **Досягнення**: Ви завершили Модуль 5, опанувавши створення та оптимізацію Sponsored Products, Sponsored Brands і Sponsored Display кампаній, а також масові запуски через Bulk Operations.

**Наступні кроки**: Застосовуйте отримані навички для запуску та оптимізації PPC-кампаній. Аналізуйте метрики (ACoS, CTR, Conversion Rate) щотижня та масштабуйте ефективні кампанії.

### [[Крок 1 — Введення в глибоку перевірку та оптимізацію]] →