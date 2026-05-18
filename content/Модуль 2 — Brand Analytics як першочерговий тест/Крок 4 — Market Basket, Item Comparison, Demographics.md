**Мета**: Розібрати решту звітів Brand Analytics, що дають стратегічний контекст до SQP: Market Basket (cross-sell), Item Comparison (реальні конкуренти), Demographics (аудиторія). Ці звіти менш щоденні, але критичні раз на місяць.

---

## 1. Market Basket Analysis — що купують разом з нами

**Звіт показує:** які товари частіше за все купують разом з нашим ASINом у одній транзакції.

### Формат звіту

| Колонка | Значення |
|---------|----------|
| Purchased ASIN | Наш ASIN (той, що купують) |
| #1 Purchased Combined ASIN | Найчастіший попутний товар |
| #1 Combination % | % кошиків з цією парою |
| #2 Purchased Combined ASIN | Другий попутник |
| #3 Purchased Combined ASIN | Третій |

### Як це використовується у PPC

**Сценарій 1: знайти власні попутні ASINs для cross-sell.**
Якщо наш B07AAA (knife set) часто купується разом з B07EEE (knife sharpener) — обидва наші ASINs у одному бренді. Дія:
- Запустити SP Product Targeting з B07AAA → target ASIN B07EEE (рекламуємо sharpener на картці knife set)
- І навпаки: з B07EEE → target B07AAA
- Це «взаємопромоція» усередині бренду

**Сценарій 2: знайти конкурентів-компліментарів (не замінників).**
Якщо наш knife set часто купується разом з `B08XYZ — cutting board bamboo` (не наш ASIN) — це товар-комплімент. У такий ASIN можна запускати SD таргетинг для залучення cross-over аудиторії.

**Сценарій 3: захист від cannibalization.**
Якщо наш B07AAA часто купується разом з нашим же B07BBB (варіант того ж parent ASIN) — це сигнал що нам не треба рекламувати обидва на тих самих запитах. Вибираємо основний, інший — захищаємо PT-таргетингом.

### Обмеження

- Дані шуті мінімум на 30 днів — тижневі цифри ненадійні
- Для low-volume ASINs можуть бути порожні
- Не показує **чому** купують разом (комплемент, випадковість, бренд loyalty)

---

## 2. Item Comparison and Alternate Purchase

**Два підзвіти, обидва про конкурентів:**

### Item Comparison
«Які товари покупці **порівнювали** з нашим — дивилися в тому самому серфі».

Формат:
| Our ASIN | #1 Compared ASIN | % Sessions | #2 Compared ASIN | % Sessions |

### Alternate Purchase
«Купивши альтернативу — який ASIN вони купили замість нашого».

Формат:
| Our ASIN | #1 Alternate Purchase ASIN | % |

### Різниця

- **Item Comparison** = хто наші реальні конкуренти у очах покупця (не обов'язково ті, кого ми вважаємо)
- **Alternate Purchase** = хто переміг у боротьбі за клієнта — ми втратили цей продаж

### Як це використовується у PPC

**Item Comparison → Defensive SP Product Targeting:**
Беремо топ-5 Compared ASINs. Створюємо SP PT кампанію з цими ASINs як таргет. Мета — залишити наше оголошення на їхніх картках.

**Alternate Purchase → Critical fixes:**
Це список тих, хто забрав у нас продаж. Перший крок — відкрити їхні лістинги і знайти різницю:
- Ціна
- Рейтинг / кількість відгуків
- Фото 1 vs наші фото
- A+ Content присутній чи ні

Якщо знайдеш один фактор, який у всіх топ-5 `Alternate Purchase` кращий за нас — це **корінь проблеми**. Фіксуй його.

### Real-world приклад

Kitchen Brand. ASIN B07DDD (cutting board walnut).

Item Comparison показує топ-5 Compared ASINs:
- 4 з 5 — бюджетні bamboo cutting boards за $15-25

Alternate Purchase показує:
- 3 з 5 — те саме: bamboo cutting boards

**Висновок:** покупці, які дивляться наш walnut за $42, у 60% випадків купують bamboo за $20. Значить наша цінова категорія не матчиться з типом людей, що прийшли за `cutting board`. Треба:
- Або знижувати ціну (зменшити gap)
- Або таргетитись на вужчі «premium walnut» запити, де аудиторія готова платити
- Або переглянути позиціонування (premium handcrafted messaging у лістингу)

---

## 3. Demographics

**Показує:** вік, стать, дохід, освіту покупців бренду.

### Формат

| Segment | Покупок | % бренду |
|---------|---------|----------|
| Age 18-24 | | |
| Age 25-34 | | |
| ... | | |
| Gender Male | | |
| Gender Female | | |
| Income $0-$50K | | |
| ... | | |

### Для чого PPC-менеджеру

**Основне застосування — SBV (Sponsored Brands Video) креативи:**
- Якщо 65% покупців жінки 35-54 — у відео виразні жіночі ситуації (кухня вдома)
- Якщо 50% чоловіки 25-44 — more «performance» / «outdoor» messaging

**Друге — SD Audience targeting:**
Sponsored Display дозволяє таргетитись на behavioral audiences. Demographics показує, які саме behavioral групи найбільш релевантні.

**Третє — санітарна перевірка:**
Якщо в тебе bundle товар для jungendu а Demographics показує 80% 45+ — щось з лістингом шле неправильний сигнал (фото, опис).

### Обмеження

- Дані укрупнені, ніяких PII
- Не доступні у всіх категоріях (у дитячих товарах Amazon ховає)
- Оновлюються раз на місяць

---

## 4. Repeat Purchase Behavior

**Показує:** скільки унікальних покупців повторно купили бренд за період.

### Метрики

- % Repeat Customers
- Repeat Purchase Rate per ASIN
- Time between purchases (median)

### Застосування

**Для розрахунку LTV:**
Якщо 30% покупців повертаються через 60 днів у середньому, ми можемо дозволити ACoS вище ніж маржа на **першу покупку**, бо вона окуповується повторними.

**Формула target ACoS з LTV:**
```
target_with_LTV = target_one_time × (1 + repeat_rate × avg_repeats)
```

Приклад: target = 20%, repeat_rate = 30%, avg repeats = 1.5. target_with_LTV = 20% × (1 + 0.30 × 1.5) = 20% × 1.45 = **29%**.

**Для SD Audience retargeting:**
Якщо repeat rate висока — створити SD Audience «past purchasers» і таргетити їх новими товарами бренду.

**Попередження:** LTV логіка працює тільки якщо repeat rate > 20% стабільно і бренд має кілька SKUs. Для mono-product бренду LTV мало що додає.

---

## 5. Top Search Terms

**Показує:** топ-пошукових запитів на Amazon за період у нашій категорії.

### Використання

**Keyword harvest:**
Експортуй топ-100 запитів → cross-reference з наявними кампаніями. Ключі, які є у топ-100 ніші, але відсутні у наших кампаніях — кандидати на додавання.

**Sizing нішевих трендів:**
Порівнюй Top Search Terms за різні періоди. Новий запит, що вирвався у топ — тренд, можна зайняти раніше за конкурентів.

**Обмеження:** не дає share (наших показників) — це загальна нішева картина, не наша.

---

## 6. Пріоритизація між звітами

Не всі звіти BA потрібні однаково часто. Ось рекомендований ритм:

| Звіт | Щотижня | Щомісяця | Щокварталу | Тільки при проблемах |
|------|---------|----------|------------|-----------------------|
| Search Query Performance | ✅ | ✅ | — | — |
| Market Basket | — | ✅ | — | — |
| Item Comparison | — | ✅ | — | ✅ якщо ACoS / CR просів |
| Alternate Purchase | — | — | ✅ | ✅ якщо втрачаємо share |
| Demographics | — | — | ✅ | ✅ перед SBV запуском |
| Repeat Purchase | — | — | ✅ | — |
| Top Search Terms | — | ✅ | — | — |

SQP — **щотижня, завжди.** Решту — по потребі.

---

## Тести

### Quiz

**1.** Market Basket Analysis показує:
- a) Які ключі купили наші товари
- b) Які товари купують разом з нашим в одному кошику
- c) Ціну конкурентів
- d) Demographics покупців

**2.** Різниця Item Comparison і Alternate Purchase:
- a) Item Comparison — хто порівнював з нами (не купив); Alternate Purchase — хто купив замість нас
- b) Вони однакові
- c) Item Comparison — наші товари; Alternate — чужі
- d) Alternate Purchase — тільки платні кампанії

**3.** ASIN має repeat rate 30%, середньо 1.5 повторних покупок. target = 22%. Який target з LTV?
- a) 22%
- b) 33%
- c) 31.9% (22 × 1.45)
- d) 44%

**4.** SBV креатив. Demographics показує 60% жінок 35-54. Як використовуємо?
- a) Ігноруємо, для SBV demographics неважливо
- b) Створюємо креатив, орієнтований на цей сегмент (візуал, сценарії, messaging)
- c) Збільшуємо бюджет SBV
- d) Запускаємо SD

**5.** Alternate Purchase показує що 4 з 5 топ-конкурентів мають ціну у 2× нижче за нашу. Дія?
- a) Підвищити біди PPC
- b) Порівняти позиціонування: або знизити ціну, або чітко переключитись на premium запити, де ціна виправдана
- c) Ігнорувати — наша ціна преміум
- d) Запустити знижку 70%

*Відповіді: 1-b, 2-a, 3-c, 4-b, 5-b*

---

### Практичний кейс

Kitchen Brand. ASIN B07AAA (Kitchen Knife Set).

**SQP:** на топових запитах ASIN у Сценарії 1 (скейлимо).

**Market Basket (місячно):**
- #1 Combined ASIN: наш B07EEE (Knife Sharpener), 28% co-purchases
- #2 Combined ASIN: B08XYZ (конкурент cutting board bamboo), 12%
- #3 Combined ASIN: наш B07CCC (Chef Knife Single), 8%

**Item Comparison:**
- Top-3 compared: 2 наші (B07BBB варіант і B07CCC), 1 чужий (B09QQQ — інший knife set similar price)

**Alternate Purchase:**
- #1: B09QQQ (той самий knife set конкурент), 18% втрачених продажів

**Demographics:**
- 55% жінки, 40% чоловіки (решта unknown)
- Age 25-54 — 70%
- Income $50K-$150K — 65%

**Завдання:**
1. Які PPC-дії з Market Basket?
2. Як реагувати на Item Comparison / Alternate Purchase?
3. Як використовувати Demographics?

*Розв'язок:*

1. Market Basket:
   - B07AAA + B07EEE 28% co-purchase — запустити SP PT з B07AAA → target B07EEE і навпаки (взаємопромоція наших товарів)
   - B08XYZ конкурент cutting board — SD таргетинг на цей ASIN (залучаємо людей з комплемент-аудиторії)
   - B07AAA + B07CCC 8% — зробити PT-пару, але менш агресивно (нижчі біди)

2. Item Comparison / Alternate Purchase:
   - 2 наші у Item Comparison — це внутрішня конкуренція. Треба переглянути, чи не канібалізуємо (Модуль 7 тригер #41 dual attribution). Розділити ключі: основний — B07AAA, варіації (B07BBB) — на довгий хвіст
   - B09QQQ забирає 18% продажів. Відкриваємо лістинг — порівнюємо з нашим. Ймовірно: краще фото / більше відгуків / нижча ціна. Фіксуємо + запускаємо defensive SP PT → target B09QQQ

3. Demographics:
   - 55% жінки 25-54 income middle → для SBV створюємо креатив у стилі «домашня кухня, сім'я, комфорт», не «professional chef industrial».
   - SD audience: таргетимось на поведінкові сегменти «home cooking enthusiasts», «kitchen renovation interest»

---

### Розрахункова задача

ASIN з параметрами:
- First-purchase target ACoS = 18%
- Repeat rate = 35%
- Avg repeat purchases = 2.1
- Маржа = 24%

**Порахуйте:**
1. LTV-adjusted target ACoS (за формулою)
2. Чи можна дозволити ACoS 30% для цього ASIN?
3. Що треба додатково перевірити перед використанням LTV?

*Розв'язок:*
1. target_with_LTV = 18% × (1 + 0.35 × 2.1) = 18% × 1.735 = **31.23%**
2. Так, ACoS 30% < 31.23%, формально у LTV-margin. АЛЕ в тижневому Sellerboard звіті він виглядатиме збитково — треба комунікувати з account manager що це свідомий вибір.
3. Перед використанням LTV перевірити:
   - Чи справді repeat rate стабільний 3-6 місяців (не випадкова цифра)
   - Чи маркетплейс показує такий же repeat rate (не тільки US — і CA теж, якщо продаємо в обох)
   - Чи бренд має додаткові SKUs для повторних покупок (якщо mono-product, LTV маленький)

---

## Наступний крок

У фінальному Кроці 5 зв'яжемо все у decision framework: **як за 10 хвилин BA-аналізу прийняти рішення про напрям усього тижня роботи з акаунтом**.

### [[Крок 5 — Коли PPC не рішення. Decision framework]] →
