**Мета**: Зрозуміти принцип «один child per parent в органіці» і правильно структурувати PPC для варіацій.

> [!warning] Amazon показує **лише один ASIN з parent variation** в органічній видачі за ключем. Якщо ти запускаєш ідентичні PPC-кампанії на всіх child — ти **купуєш imp у самого себе**, дробиш бюджет і зашумлюєш дані. Правильна структура = різні ASIN на різних ключах і плейсментах.

---

## 1. Як працює органічна видача для variation

### Правило «один child per parent»

Amazon A9 / A10 не показує двох ASIN з однієї variation за одним ключем одночасно. Алгоритм обирає **один** за:
- CR (session-to-purchase rate)
- Velocity (продажі за останні 14–30 днів)
- Reviews count + rating

Найсильніший ASIN (зазвичай той, де найбільше продажів) стає «showcase child». Решта:
- Майже не отримують imp з main keyword
- Отримують imp тільки з унікальних long-tail ключів
- Або через `Customers also bought` / SB banner

### Наслідки для оптимізації

| Ситуація | Що відбувається |
|----------|----------------|
| Один сильний child, інші слабкі | Слабкі child практично не мають organic — їхні продажі тільки через PPC |
| Рівномірний баланс | Жоден не домінує; Amazon «дрейфує» між ними; рейтинг нестабільний |
| Додали новий child | Отримує трафік і довіру через parent listing (перші 30 днів — стадія запуску) |

**Наслідок:** неможливо оптимізувати PPC для variation ізольовано від organic. Перш ніж запускати важкі кампанії на child — треба знати, на якому ключі він взагалі може здобути organic exposure.

---

## 2. PPC-структура для variation

Коли всі child у steady-state, структура має три рівні:

### 2.1. Sponsored Products KW (Exact) — per child, унікальні ключі

Для кожного child обрати 2–3 унікальні Exact-ключі, де саме цей child релевантний:

- Parent `knife sharpener` (generic)
- Child A: `electric knife sharpener` — тільки child A (він electric)
- Child B: `manual knife sharpener` — тільки child B
- Child C: `professional knife sharpener set` — тільки child C (має extra accessories)

**Чому не один ключ на всіх:** тоді між child'ами відбувається внутрішній аукціон — один і той самий impression міг би дати один кліковий результат, а замість цього витрачає 3 кліки на 3 child'ів з низькою CR на кожному.

### 2.2. SP Broad / Auto — на parent-level

Parent generic ключі (`knife sharpener`, `sharpener for knives`) **не дублювати на child'ах**. Один Broad campaign або Auto campaign з таргетингом на parent ASIN покриває весь variation — Amazon сам обере, який child показати під кожен запит.

### 2.3. Sponsored Display / Sponsored Brands — parent-level

- SD (Product Targeting) — parent-level, використовує parent showcase для картки
- SB (Brand ads) — parent-level, може показувати кілька child у карусель

### Розподіл плейсментів

Щоб уникнути імітації одного аукціону на кількох child:

| Тип кампанії | ToS | RoS | PP |
|--------------|-----|-----|-----|
| SP KW Exact (child-specific) | +10–20% | baseline | baseline |
| SP Broad (parent-level) | baseline | +10% | baseline |
| SP Auto | baseline | baseline | +5% |
| SD / SB | — | — | — |

**Правило:** один унікальний ключ → один active аукціон у твоєму акаунті. Якщо треба перевірити — Advertising reports → Search Term report → filtered by portfolio → перевір ST, який трапляється у кількох кампаніях одночасно.

---

## 3. Зв'язок з Модулем 3 Крок 4 (harvest structure)

Коли через Cerebro / Competitor Review (Крок 1 цього модуля) знайшли новий релевантний ключ:

1. Додати у **Broad harvest** (Модуль 3 Крок 4).
2. Запустити через parent (якщо ключ generic) або через конкретний child (якщо specific).
3. Після 4+ тижнів і ≥2 orders на цьому ST — винести в Exact per тому child, де найвищий CR.

Цей цикл запобігає дублюванню Exact на кількох child і тримає структуру чистою.

---

## 4. Чек-лист: ревізія variation PPC (раз на місяць)

- [ ] У Cerebro перевірити organic ranks per child за топ-ключами → знайти, який child showcase.
- [ ] У Amazon Search з різних адрес (LA / NY) — підтвердити showcase child.
- [ ] У Seller Central Campaigns → знайти кампанії, де таргетуються кілька child на один ключ → розділити або дезактивувати.
- [ ] У Advertising → Search Term report: знайти ST, які крутяться у >1 кампанії — додати в negative в усіх, крім best-fit.

---

## Тести

### Quiz

**1.** Amazon показує в органічній видачі за ключем `knife sharpener`:
- a) Всі child з variation одночасно
- b) Один showcase child з parent (найсильніший за CR/velocity)
- c) Лише parent-level
- d) Випадково

**2.** У тебе 3 child, всі в steady-state, сильно різні по характеристиках. Ключ `electric knife sharpener` релевантний лише одному з них. Куди запускати SP KW Exact на цей ключ?
- a) На всі 3 child (широко)
- b) Тільки на релевантний child
- c) На parent-level Auto
- d) Не запускати

**3.** Чому не варто дублювати parent generic ключ (`knife sharpener`) на всіх child одночасно?
- a) Amazon заблокує акаунт
- b) Між child'ами відбувається внутрішній аукціон і бюджет дробиться на ASIN з нижчим CR
- c) Це призведе до підвищеного CPC від Amazon
- d) Нічого, це нормально

**4.** Ти знайшов, що один ST крутиться у 3 різних кампаніях. Що зробити?
- a) Залишити — хай конкурують
- b) Додати в negative у 2, залишити в best-fit кампанії
- c) Зупинити всі 3 кампанії
- d) Підняти бід у всіх 3

*Відповіді: 1-b, 2-b, 3-b, 4-b*

---

### Практичний кейс

Акаунт PetStuff. Parent ASIN B07PET0000 (dog collar, 3 child):
- B07PET1111 — small size, Margin 28%, 340 orders/міс, Organic rank 5 за `small dog collar` і 9 за `dog collar`
- B07PET2222 — medium size, Margin 26%, 420 orders/міс, Organic rank 4 за `medium dog collar` і 3 за `dog collar` (showcase)
- B07PET3333 — large size, запущений 2 тижні тому, Margin 30%, 25 orders всього, Organic rank 45 за `large dog collar`

Поточна структура PPC: одна спільна кампанія SP KW Exact `dog collar` на всіх 3 child, бід $0.65. Окремих campaign per child нема. Поточний ACoS кампанії 42%, target ACoS 26%. Тригер #43 (chronic bleed) спрацював у Manual Review.

**Завдання:**
1. Чому ACoS 42% при нормальній маржі?
2. Яка правильна PPC-структура?
3. Чи можна bulk-правилом "chronic bleed → pause" запаузити кампанію `dog collar` Exact?
4. Що з B07PET3333?

*Розв'язок:*

1. **Причина 42% ACoS:** спільна Exact-кампанія на `dog collar` для всіх 3 child = Amazon бачить 3 ASIN за одним ключем, а в органіці showcase тільки **B07PET2222**. Клік іде на будь-який з 3, CR на small/large значно нижчий (вони не релевантні для «generic» запиту). **Внутрішня канібалізація бюджету.**

2. Правильна структура:
   - SP KW Exact `dog collar` → ТІЛЬКИ B07PET2222 (showcase), бід $0.65 (утримувати як зараз).
   - SP KW Exact `small dog collar` → B07PET1111, бід $0.55.
   - SP KW Exact `large dog collar` → НЕ запускати поки B07PET3333 у фазі запуску (див. пункт 4).
   - SP Broad parent-level `dog collar for dogs` — можна залишити, хай Amazon distribute.
   - Раз перенесли child-specific ключі — очікуваний ACoS спільної `dog collar` Exact впаде до 25–30% (тільки одного child).

3. **Ні**, тригер #43 спрацював, але це **структурна проблема**, не економічна. Паузити не можна — втратиш organic exposure на головному ключі. Skill 3 в такому випадку дає варіант `Restructure`, а не `Pause`. Менеджер обирає.

4. B07PET3333 — запущений 14 днів тому. На цьому етапі ACoS ще не інформативний (лише 25 orders всього), тому ручне рішення — кампанія на `large dog collar` з бідом $0.90 (1.5× target), цілі: перші 10 продажів, ранк до топ-20 за 30 днів. Після досягнення цілей — приєднати до стандартного тижневого bulk з тегом маржі.

---

### Розрахункова задача

Variation має 4 child. Дані за тиждень (SP KW Exact `generic keyword`, всі 4 child у одній кампанії):

| Child | Impressions | Clicks | Orders | CR | Spend | Sales |
|-------|-------------|--------|--------|----|----|------|-------|
| A | 8,000 | 180 | 12 | 6.7% | $126 | $360 |
| B | 8,000 | 140 | 4 | 2.9% | $98 | $120 |
| C | 8,000 | 90 | 1 | 1.1% | $63 | $30 |
| D | 8,000 | 60 | 0 | 0% | $42 | $0 |
| Разом | 32,000 | 470 | 17 | 3.6% | **$329** | **$510** |

**Порахуйте:**
1. ACoS всієї кампанії.
2. Якщо залишити тільки Child A (найсильніший), скільки реально втрачається «хороших» orders?
3. Приблизний ACoS після реструктуризації (тільки A, бід той самий, умовно 180 clicks → 12 orders з CR 6.7%).
4. Скільки коштувала канібалізація (spend на C+D / total spend)?

*Розв'язок:*

1. ACoS = 329 / 510 × 100 = **64.5%** (жахливо для target 26%).
2. Orders від B+C+D = 4+1+0 = **5 orders**. З них якісних (CR >3%) — 4 від B. Тобто реально залишаючи Child A втрачаємо 5 orders, але звільняємо $203 spend.
3. Після restructure (тільки A): spend ~$126, sales ~$360. ACoS = 126 / 360 = **35%**. Все ще вище target 26%, але значно менше 64.5%. Для того щоб дійти до 26% — бід A треба знизити на ~25% за правилами Модуля 5. Або додати RoS modifier.
4. Канібалізація: spend на C+D = $63+$42 = $105. $105 / $329 = **31.9%** бюджету **йшов на child, які практично не конвертили**. Third of money wasted.

Висновок: одна кампанія на всіх child = 31.9% burn rate. Реструктуризація + окремі ключі per child усувають це.

---

## Наступний крок

У Кроці 4 — **сезонність і тренди**: 12-місячні SV-графіки в Helium 10, калькулятор свят, lead time 14–21 день, і пороги виявлення сезонного піку vs просто росту ніші.

### [[Крок 4 — Сезонність і тренди]] →
