**Мета**: Зібрати Модуль 2 в один робочий потік — на реальних даних провести mini-audit SP-кампанії, застосувати target ACoS, вивести список дій і написати звіт менеджеру.

---

## 1. Що робимо

Ви отримуєте «папку акаунту» з трьома файлами:
- Search Term Report (STR) — агрегат за 4 тижні
- Placement Report — за 4 тижні
- Sellerboard Товари — Margin, COG, Net Profit
- (+ скріншот пошуку Amazon на головному ключі)

Ваше завдання — за 40–60 хвилин:
1. Порахувати target ACoS ASINа.
2. Знайти проблеми в STR і плейсментах.
3. Запропонувати 5–8 конкретних дій.
4. Оформити як короткий звіт менеджеру.

Це точно та ж логіка, що у production — Skill 2 формує цей звіт автоматично з bulk-файлу. Тут робимо вручну, щоб **зрозуміти**, що саме автоматика робить і чому.

## 2. Набір даних для кейсу

**ASIN:** B07KITCHEN — 8" chef kitchen knife. Marketplace: Amazon.com.

**Sellerboard Товари (за тиждень W4):**
| Metric | Value |
|--------|-------|
| Sales | $1 820 |
| Net Profit | $346 |
| Margin | **19.0%** |
| Units | 52 |

**PPC Dashboard по портфоліо [15%] B07KITCHEN:**
| Metric | Value |
|--------|-------|
| Break-even ACoS | **14%** |
| Spend W4 | $412 |
| Portfolio ACoS W4 | **32.8%** |

**STR (top-10 ST за 4-week aggregate):**

| # | Customer Search Term | Match | Clicks | Orders | Spend | Sales | ACoS |
|---|---------------------|-------|--------|--------|-------|-------|------|
| 1 | kitchen knife | broad | 210 | 18 | $245 | $628 | 39.0% |
| 2 | chef knife | broad | 95 | 14 | $108 | $490 | 22.0% |
| 3 | chef knife 8 inch | broad | 48 | 9 | $52 | $315 | 16.5% |
| 4 | kitchen knife set | broad | 34 | 0 | $28 | $0 | — |
| 5 | cheap kitchen knife | broad | 22 | 0 | $13 | $0 | — |
| 6 | japanese knife | phrase | 28 | 1 | $30 | $38 | 78.9% |
| 7 | sharp kitchen knife | broad | 40 | 7 | $44 | $245 | 18.0% |
| 8 | [BrandX] knife | broad | 19 | 0 | $15 | $0 | — |
| 9 | chef knife professional | broad | 31 | 5 | $37 | $175 | 21.1% |
| 10 | toy knife | broad | 18 | 0 | $9 | $0 | — |

**Placement Report (агрегат 4w по SP-Broad-Main):**

| Placement | Clicks | Orders | Spend | Sales | ACoS | CR |
|-----------|--------|--------|-------|-------|------|----|
| Top of Search | 260 | 34 | $340 | $1 245 | 27.3% | 13.1% |
| Rest of Search | 180 | 8 | $150 | $280 | 53.6% | 4.4% |
| Product Pages | 105 | 4 | $60 | $140 | 42.9% | 3.8% |

Поточні modifiers: ToS 0%, PP 0%. Base bid $1.35.

**Конкуренти у видачі по `kitchen knife`:** Brand-X (ціна $28, reviews 2300, активний купон), ваша позиція sponsored #5, організм #12.

## 3. Воркфлоу

### Крок 3.1 — Target ACoS

```
target = max(Margin, BE-ACoS), cap 30, floor 10
target = max(19, 14) = 19%
```

Між cap і floor, залишаємо **19%**.

### Крок 3.2 — Аналіз STR

Пройдіться по 10 ST і класифікуйте:

| ST | Рішення | Обґрунтування |
|----|---------|---------------|
| kitchen knife | знизити бід у broad | ACoS 39% > target 19% × 1.5 = 28.5%. Але це основний ключ, не негативити. |
| chef knife | винести в exact | Orders 14, ACoS 22% — трохи вище target 19%, але у exact CPC нижче, дотягнемо. |
| chef knife 8 inch | винести в exact | Orders 9, ACoS 16.5% < target. Класичний winner. |
| kitchen knife set | negative exact | 34 clicks, 0 orders, Spend $28 — пройдено обидва пороги. Ще ваш ASIN не сет. |
| cheap kitchen knife | negative phrase `cheap` | 22 clicks, 0 orders. `cheap` як концепт — засмічення. |
| japanese knife | negative exact | ACoS 78.9%, 1 order випадковий. Ваш ASIN не japanese. |
| sharp kitchen knife | винести в exact | Orders 7, ACoS 18% ≤ target. Winner. |
| [BrandX] knife | negative phrase `BrandX` | 19 clicks, 0 orders. Брендовий запит конкурента. |
| chef knife professional | винести в exact | Orders 5, ACoS 21% близько до target, у exact дотягнемо. |
| toy knife | negative exact | 18 clicks, 0 orders. Нерелевантно. |

### Крок 3.3 — Аналіз плейсментів

- **ToS** (ACoS 27.3%, CR 13.1%) — дорого, але дає 34 із 46 orders (74%). **Не знижувати**.
- **RoS** (ACoS 53.6%, CR 4.4%) — палить. Знижувати базу.
- **PP** (ACoS 42.9%, CR 3.8%) — окремо знизити через modifier.

### Крок 3.4 — Біди

Base bid $1.35 → занадто високий, бо RoS палить при ньому. Формула max healthy:

```
max_bid = target × AOV × CR
AOV = 1820 / 52 = $35
Avg CR (blended) = 46 / 545 = 8.4%
max_bid = 0.19 × 35 × 0.084 = $0.56
```

Поточний $1.35 — більше ніж удвічі перевищує теоретичну стелю. Логічна послідовність:

- Base bid: $1.35 → **$0.95** (−30%).
- ToS modifier: 0% → **+40%** (зберегти фактичний бід на ToS).
- PP modifier: 0% → **−40%**.

Фінальні біди:
- ToS: 0.95 × 1.40 = **$1.33** (майже як було)
- RoS: **$0.95** (знижено на 30%)
- PP: 0.95 × 0.60 = **$0.57** (знижено на 58%)

### Крок 3.5 — Конкуренти

Brand-X — сильніший у ціні і reviews, + активний купон. На головному `kitchen knife` не варто намагатись перебити. Натомість — виноси exact на вужчих ключах (`chef knife 8 inch`, `sharp kitchen knife`), де bid race слабший.

## 4. Звіт менеджеру (шаблон)

> **ASIN:** B07KITCHEN
> **Period:** 4 weeks
> **Target ACoS:** 19% (Margin 19%, BE-ACoS 14%)
> **Portfolio ACoS W4:** 32.8% (1.7× target — diagnosis: over-bidding + non-converting ST)
>
> **Root causes:**
> 1. Base bid $1.35 у 2.4× вище теоретичної стелі ($0.56 by target × AOV × CR).
> 2. RoS і PP палять (ACoS 54% / 43%) — ToS добре (ACoS 27%, CR 13%).
> 3. У broad-кампанії активні 5 нерелевантних/брендових ST, які за 4w спалили $93 з нуль orders.
>
> **Actions:**
> 1. Base bid SP-Broad-Main: $1.35 → $0.95 (−30%).
> 2. Placement modifiers: ToS +40%, PP −40%.
> 3. Створити SP-Exact-Winners і винести: `chef knife`, `chef knife 8 inch`, `sharp kitchen knife`, `chef knife professional`. Стартовий бід $0.80–0.95.
> 4. У SP-Broad-Main додати: neg exact `kitchen knife set`, `japanese knife`, `toy knife`; neg phrase `cheap`, `[BrandX]`. Також neg exact на 4 винесених winner-ST.
> 5. Brand-X — не піднімати біди на `kitchen knife`; тиск — на нішеві exact.
> 6. Re-check через 7 днів: ACoS, order-count, ToS share.
>
> **Expected:** ACoS 32.8% → 22–25% за 2 тижні. Spend W4 $412 → ~$300.

---

## Тести

### Quiz

**1.** Target ACoS: Margin 19%, BE-ACoS 14%. Скільки?
- a) 14%
- b) 17% (середнє)
- c) 19%
- d) 30%

**2.** Portfolio ACoS = 32.8%, target = 19%. У якому стані кампанія?
- a) Норма
- b) Трохи вище, моніторити
- c) Chronic bleed (>1.5× target), потребує зниження бідів
- d) Катастрофа, паузнути все

**3.** Base bid $1.35. ToS дає 74% orders і CR 13%. Правильна тактика:
- a) Знизити базу, підсилити ToS modifier
- b) Знизити ToS modifier, бо дорого
- c) Підняти базу, ToS без змін
- d) Паузнути кампанію

**4.** ST `kitchen knife set`: 34 clicks, 0 orders, Spend $28. Ваш ASIN — один ніж. Дія:
- a) Залишити
- b) Negative exact у broad
- c) Винести в exact
- d) Підняти бід

**5.** У конкурента ціна нижча на 20% і ×9 reviews. Правильна стратегія по головному ключу:
- a) Перебити бідом
- b) Не воювати на головному, тиснути на exact у нішевих ключах
- c) Skip PPC, чекати
- d) Підняти ціну, щоб відбудуватися за позиціонуванням

*Відповіді: 1-c, 2-c, 3-a, 4-b, 5-b*

---

### Практичний кейс

Новий акаунт, ASIN B07CUTBOARD:
- Margin = 11%, BE-ACoS = 16%
- AOV = $28, avg CR 7%
- Поточний base bid SP-Broad $1.10
- ACoS W4 = 41%, Spend W4 = $165, Orders 12

STR топ-5:
| ST | Match | Clicks | Orders | Spend | ACoS |
|----|-------|--------|--------|-------|------|
| cutting board | broad | 120 | 9 | $95 | 38% |
| bamboo cutting board | broad | 55 | 6 | $48 | 22% |
| plastic cutting board | broad | 25 | 0 | $14 | — |
| knife sharpener | broad | 18 | 0 | $10 | — |
| wood cutting board | broad | 22 | 2 | $18 | 45% |

(Ваш товар — bamboo cutting board)

**Завдання:**
1. Target ACoS?
2. Які 3 дії зробите у першу чергу?
3. Новий base bid?

*Розв'язок:*

1. Target = max(11, 16) = **16%**, cap/floor не застосовуються.

2. Дії:
   - `bamboo cutting board` (6 orders, ACoS 22%, близько до target) → **винести в exact**, бід $0.70. У broad — negative exact.
   - `knife sharpener` (18 clicks, 0 orders, Spend $10 — на порозі) → **negative phrase `sharpener`**, не ваш товар.
   - `plastic cutting board` (25 clicks, 0 orders) → **negative phrase `plastic`**, ваш товар bamboo.

3. Max healthy bid = 0.16 × 28 × 0.07 = **$0.31**. Поточний $1.10 — у 3.5× вище. Базовий знизити агресивно: $1.10 → **$0.75** (−32%), і паралельно ToS +30%, PP −40%, щоб зберегти ToS і прикрутити слабші плейсменти. Через 7 днів, якщо ACoS не впаде до 20–22%, знижувати ще до **$0.55**.

---

### Розрахункова задача

Дано ASIN B07PAN:
- Sales W4: $2 460
- Net Profit W4: $418
- Spend W4: $586
- PPC Sales W4: $1 275
- BE-ACoS (з PPC Dashboard): 18%

**Порахуйте:**
1. Margin (%)
2. Target ACoS
3. ACoS (%)
4. TACoS (%)
5. %PPC у загальних продажах
6. Оцінка стану кампанії (у нормі / серйозно / критично).

*Розв'язок:*
1. Margin = 418/2460 × 100 = **17.0%**
2. target = max(17, 18) = **18%** (cap 30, floor 10 — не застосовуються)
3. ACoS = 586/1275 × 100 = **45.96%**
4. TACoS = 586/2460 × 100 = **23.82%**
5. %PPC у sales = 1275/2460 × 100 = **51.83%**
6. ACoS 46% > target 18% × 2 = 36% — **критично** (chronic bleed). Half of sales на PPC — залежність від реклами висока. Priority-1: зниження base bid на 30%, виніс winner-ST в exact, жорсткі negatives. Рекомендація — форвард-лінк до Module 5 Step 2 для детальних placement-правил і Module 6 Step 2 для тригерів цього рівня (🔴 тригер #2 — різкий WoW перепад, якщо ACoS стрибнув з 22% минулого тижня).

---

## Наступний крок

Модуль 3 — **Дослідження ключових слів і формування структури кампаній**. Ви навчитесь планувати розкладку SP / SB / SD під конкретний ASIN з самого початку, а не після того, як запустили і зламалось.

### Модуль 3 — Дослідження ключових слів та формування структури

> [!note] **Отримайте код доступу у свого куратора для наступного модуля**
