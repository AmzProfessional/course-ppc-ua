---
title: Наскрізний кейс курсу — бренд KitchenEdge
version: 1
---

## Як користуватися цим документом

Цей кейс — один бренд з 5 ASIN, який проходить через усі 9 модулів курсу. Ви зустрічаєте ці самі ASIN у тестах, практичних кейсах, розрахункових задачах і домашках кожного модуля.

Ідея проста: у реальній роботі ви не аналізуєте «абстрактну кампанію №7», а ведете **конкретний акаунт тижнями**. Тут ви робите те саме — бачите один бренд під різними кутами.

> [!note] Дані фіксовані. Не треба їх «генерувати» — використовуйте цифри з цього документа. Якщо якась вправа у модулі просить «згенеруйте», вона сама дасть потрібні додаткові цифри, а базовий портрет ASIN — звідси.

---

## Бренд: KitchenEdge

**Ніша:** Kitchen knives & sharpening accessories
**Маркетплейси:** Amazon US + Amazon CA (обидва активні)
**Вік бренду:** 1.5 року (січень 2025 — зараз)
**Статус:** mature, не launch phase, але ще не legacy
**Місячний ad spend (US+CA):** $9 800 в середньому (ранж $8–12K залежно від сезону)
**Власник:** приватний US-based seller (середнього розміру, 3 брендовані лінійки, KitchenEdge — основна)
**Reviews total (parent):** 2 400+ (середній rating 4.4)

**Позиціонування:** середньо-преміум, не боротьба за найдешевше, але й не Wüsthof. Ціна на 15–25% вище масового Китаю, якість за рахунок кращої сталі і packaging.

---

## 5 ASIN бренду

```
KitchenEdge Portfolio
│
├── Parent ASIN A (8-inch chef knife) ──── Strong performer
│   └── Child ASIN B (6-inch chef knife) ── Variant, слабший
│
├── ASIN C (cutting board set) ────────── Mid-performer
├── ASIN D (kitchen shears) ────────────── Struggling (problem case)
└── ASIN E (knife sharpener) ───────────── Complement, маленька ніша
```

---

### ASIN A — KitchenEdge 8" Chef Knife (Premium Damascus)

| Поле | Значення |
|------|----------|
| **ASIN** | B0CKE00001 |
| **Тип** | Parent + 1 child variant (B) |
| **Category** | Home & Kitchen → Cutlery → Chef's Knives |
| **Price US** | $54.99 |
| **Price CA** | C$72.99 |
| **COG (landed)** | $13.40 |
| **FBA fee + referral** | ~$10.60 US / ~C$13.80 CA |
| **Margin US** | 26% |
| **Margin CA** | 24% |
| **BE-ACoS US** | ~26% |
| **BE-ACoS CA** | ~24% |

**4-тижневий baseline (US):**

| Метрика | Значення |
|---------|----------|
| Sales | $42 800 |
| Units | 778 |
| Sessions | 18 400 |
| USP (CR) | 4.23% |
| Refund rate | 2.1% |
| Reviews / Rating | 1 420 / 4.5 |

**4-тижневий baseline (CA):**

| Метрика | Значення |
|---------|----------|
| Sales | C$11 200 |
| Units | 153 |
| Sessions | 4 800 |
| USP (CR) | 3.19% |
| Refund rate | 2.4% |

**PPC 4-тижневий baseline (US+CA разом):**

| Метрика | US | CA |
|---------|-----|-----|
| PPC Spend | $4 200 | C$780 |
| PPC Orders | 310 | 58 |
| PPC Sales | $17 040 | C$4 230 |
| ACoS | 24.6% | 18.4% |
| Clicks | 3 450 | 680 |
| Impressions | 420 000 | 78 000 |
| CTR | 0.82% | 0.87% |

**Organic rank (US, top 3 keywords):**

| Keyword | SV | Наш ранк | Мінливість |
|---------|-----|----------|------------|
| chef knife | 165 000 | 14 | стабільно 12–16 |
| 8 inch chef knife | 42 000 | 6 | стабільно 5–8 |
| damascus chef knife | 28 000 | 4 | стабільно 3–6 |

**Brand Analytics (US, top 3 keywords, median niche порівняння):**

| Keyword | Наш CTR | Niche median CTR | Наш CR | Niche median CR |
|---------|---------|------------------|--------|-----------------|
| chef knife | 0.41% | 0.52% | 6.8% | 5.1% |
| 8 inch chef knife | 1.1% | 0.9% | 8.2% | 6.4% |
| damascus chef knife | 1.6% | 1.4% | 9.1% | 7.8% |

**Ключовий інсайт для модулів:**
CTR на generic `chef knife` нижче ніші (органічний ранк 14 — це 2-га сторінка), але CR на всіх трьох ключах **вище median**. Листинг конвертить, але мало покази. Це типовий сценарій «PPC — bottleneck»: треба додати imps через Broad/Exact з агресивнішими plac. Використовується у Модулях 2, 5, 9.

---

### ASIN B — KitchenEdge 6" Chef Knife (Compact, Child of A)

| Поле | Значення |
|------|----------|
| **ASIN** | B0CKE00002 |
| **Тип** | Child variant (same parent як A) |
| **Price US** | $44.99 |
| **Price CA** | C$59.99 |
| **COG (landed)** | $12.10 |
| **Margin US** | 23% |
| **Margin CA** | 21% |

**4-тижневий baseline (US):**

| Метрика | Значення |
|---------|----------|
| Sales | $9 400 |
| Units | 213 |
| Sessions | 6 100 |
| USP (CR) | 3.49% |
| Refund rate | 2.6% |
| Reviews / Rating | 320 / 4.3 (шарить parent, але власних відгуків мало) |

**PPC baseline (US+CA):**

| Метрика | US | CA |
|---------|-----|-----|
| PPC Spend | $880 | C$140 |
| PPC Orders | 48 | 7 |
| ACoS | 32.8% | 28.1% |
| Clicks | 720 | 118 |
| CTR | 0.71% | 0.74% |

**Organic rank (US):**

| Keyword | SV | Наш ранк |
|---------|-----|----------|
| 6 inch chef knife | 18 000 | 9 |
| compact chef knife | 6 200 | 12 |
| small chef knife | 14 000 | 18 |

**Brand Analytics (US):**

| Keyword | Наш CTR | Niche median CTR | Наш CR | Niche median CR |
|---------|---------|------------------|--------|-----------------|
| 6 inch chef knife | 0.78% | 0.84% | 6.2% | 5.8% |
| compact chef knife | 0.62% | 0.81% | 5.4% | 5.9% |

**Ключовий інсайт для модулів:**
B — variant до A. Запускалися спільні Exact-кампанії на `chef knife` → бюджет витрачався на B, але showcase Amazon має A. Класична внутрішня канібалізація (Модуль 5 variants + Модуль 9 органіка variants). Рішення: generic `chef knife` лише на A; вузькі ключі `6 inch chef knife` — лише на B.

---

### ASIN C — KitchenEdge Bamboo Cutting Board Set (3 pieces)

| Поле | Значення |
|------|----------|
| **ASIN** | B0CKE00003 |
| **Тип** | Single SKU |
| **Price US** | $32.99 |
| **Price CA** | C$42.99 |
| **COG (landed)** | $10.80 |
| **Margin US** | 18% |
| **Margin CA** | 16% |
| **BE-ACoS US** | ~18% |

**4-тижневий baseline (US):**

| Метрика | Значення |
|---------|----------|
| Sales | $21 400 |
| Units | 648 |
| Sessions | 15 200 |
| USP (CR) | 4.26% |
| Refund rate | 3.2% |
| Reviews / Rating | 880 / 4.4 |

**PPC baseline (US+CA):**

| Метрика | US | CA |
|---------|-----|-----|
| PPC Spend | $1 980 | C$340 |
| PPC Orders | 162 | 26 |
| ACoS | 21.4% | 19.8% |
| Clicks | 2 100 | 360 |
| CTR | 0.68% | 0.72% |

**Placement breakdown (US, 4-week):**

| Placement | Impressions | CTR | CR | ACoS |
|-----------|-------------|-----|-----|------|
| Top of Search | 180 000 | 1.2% | 6.1% | 18.2% |
| Rest of Search | 420 000 | 0.38% | 3.1% | 27.4% |
| Product Pages | 86 000 | 0.42% | 2.8% | 28.9% |

**Organic rank (US):**

| Keyword | SV | Наш ранк |
|---------|-----|----------|
| cutting board | 240 000 | 22 |
| bamboo cutting board | 65 000 | 11 |
| cutting board set | 48 000 | 8 |

**Brand Analytics (US):**

| Keyword | Наш CTR | Niche median CTR | Наш CR | Niche median CR |
|---------|---------|------------------|--------|-----------------|
| bamboo cutting board | 0.54% | 0.61% | 5.8% | 5.4% |
| cutting board set | 0.71% | 0.68% | 6.2% | 5.9% |

**Ключовий інсайт для модулів:**
C — «середнячок». Маржа тонка (18%), ACoS 21% — впритул до target. Placement mix нерівномірний: ToS конвертить, RoS + PP горять. Використовується у Модулі 6 (placement compensation, bid optimization) — де вчать піднімати ToS-модифікатор і компенсувати зниженням бази bid.

---

### ASIN D — KitchenEdge Kitchen Shears (Heavy Duty)

| Поле | Значення |
|------|----------|
| **ASIN** | B0CKE00004 |
| **Тип** | Single SKU |
| **Price US** | $24.99 |
| **Price CA** | C$32.99 |
| **COG (landed)** | $8.20 |
| **Margin US** | 19% |
| **Margin CA** | 17% |
| **BE-ACoS US** | ~19% |

**4-тижневий baseline (US):**

| Метрика | Значення |
|---------|----------|
| Sales | $6 200 |
| Units | 248 |
| Sessions | 9 800 |
| USP (CR) | 2.53% |
| Refund rate | 4.8% |
| Reviews / Rating | 180 / 3.9 |

**PPC baseline (US+CA):**

| Метрика | US | CA |
|---------|-----|-----|
| PPC Spend | $1 420 | C$240 |
| PPC Orders | 58 | 9 |
| ACoS | 48.2% | 44.1% |
| Clicks | 1 640 | 260 |
| CTR | 0.48% | 0.51% |

**Organic rank (US):**

| Keyword | SV | Наш ранк |
|---------|-----|----------|
| kitchen shears | 88 000 | 34 |
| heavy duty kitchen scissors | 22 000 | 28 |
| poultry shears | 38 000 | 45 |

**Brand Analytics (US):**

| Keyword | Наш CTR | Niche median CTR | Наш CR | Niche median CR |
|---------|---------|------------------|--------|-----------------|
| kitchen shears | 0.31% | 0.58% | 2.4% | 5.6% |
| heavy duty kitchen scissors | 0.26% | 0.54% | 2.1% | 5.2% |
| poultry shears | 0.22% | 0.49% | 1.8% | 4.8% |

**Ключовий інсайт для модулів:**
**ЦЕ ГОЛОВНИЙ УРОК КУРСУ.**

CTR D у **~2× нижче ніші**. CR D у **2.5× нижче ніші**. ACoS 48% при BE-ACoS 19% — кожна продажа **збиткова на рекламі**.

Інтуїтивне рішення новачка: «додати бюджет, піднімати біди, боротися за більше кліків». Правильне рішення курсу: **PPC не виправить поганий листинг**. Main image сіра, у title немає `heavy duty`, у bullets не сказано про food-safe stainless steel, 180 відгуків з рейтингом 3.9 (причина — у 12% відгуків скарга на «loose screw»). Reviews + листинг + можливо product quality — лікується **перед** PPC, не замість.

Рекомендоване дійство у модулях: **pause** агресивних кампаній на D, target ACoS виставити на BE-ACoS 19% (не вище), працювати над listing + reviews 4–6 тижнів, потім повертатися. Використовується у Модулях 1, 2, 4, 5, 6, 7, 8 — це наскрізний «поганий пацієнт».

---

### ASIN E — KitchenEdge Manual Knife Sharpener (3-stage)

| Поле | Значення |
|------|----------|
| **ASIN** | B0CKE00005 |
| **Тип** | Single SKU, complement до A і B |
| **Price US** | $18.99 |
| **Price CA** | C$24.99 |
| **COG (landed)** | $5.10 |
| **Margin US** | 22% |
| **Margin CA** | 20% |
| **BE-ACoS US** | ~22% |

**4-тижневий baseline (US):**

| Метрика | Значення |
|---------|----------|
| Sales | $7 600 |
| Units | 400 |
| Sessions | 11 200 |
| USP (CR) | 3.57% |
| Refund rate | 2.8% |
| Reviews / Rating | 410 / 4.3 |

**PPC baseline (US+CA):**

| Метрика | US | CA |
|---------|-----|-----|
| PPC Spend | $980 | C$180 |
| PPC Orders | 82 | 14 |
| ACoS | 25.8% | 22.4% |
| Clicks | 1 180 | 220 |
| CTR | 0.74% | 0.78% |

**Organic rank (US):**

| Keyword | SV | Наш ранк |
|---------|-----|----------|
| knife sharpener | 98 000 | 18 |
| manual knife sharpener | 32 000 | 7 |
| 3 stage knife sharpener | 14 000 | 5 |

**Brand Analytics (US):**

| Keyword | Наш CTR | Niche median CTR | Наш CR | Niche median CR |
|---------|---------|------------------|--------|-----------------|
| knife sharpener | 0.46% | 0.52% | 4.1% | 4.4% |
| manual knife sharpener | 0.84% | 0.78% | 5.6% | 5.1% |

**Ключовий інсайт для модулів:**
E — маленька ніша (SV на main ключах менше, ніж у knife). Головна цінність — **cross-sell і defense**. Покупці A/B логічно дивляться на E. Використовується у Модулях 3, 6, 9:
- **Harvest candidates:** ST report A/B показує ключі з «sharpening» → перекинути на E.
- **SD defense:** SD Views campaign — retargeting відвідувачів A/B, показати E.
- **Market basket BA:** у BA Basket Analysis E часто з'являється разом з A/B — це підтверджує cross-sell гіпотезу.

---

## Таймлайн кейсу

Курс припускає, що студент бере бренд «у руки» на **Тижні 5** і приймає перші рішення.

| Період | Що відбувається | У яких модулях використовується |
|--------|-----------------|--------------------------------|
| **Тиждень 1–4** | Baseline. Усі дані вище — це 4-тижневе середнє до втручання студента. Бренд працює «як є» — ніхто не оптимізує, лише моніторинг. | Модуль 2 (BA аналіз), Модуль 4 (читання звітів), Модуль 5 (структура, звіти), Модуль 8 (діагностика) |
| **Тиждень 5** | Студент «приймає акаунт». Проводить стратегічний аудит, складає target ACoS таблицю, виявляє проблеми D і cannibalization A/B. | Модуль 1, 2, 5 (стратегічний аудит), Модуль 6 (перший bulk), Модуль 7 (перший manual review) |
| **Тиждень 6** | Реалізований перший тижневий bulk: placement compensation на C, зниження бідів на D, harvest candidates з A → E, ST негативи. | Модуль 6 (bulk виконання), Модуль 7 (тригери) |
| **Тиждень 7** | Перший цикл перевірки результатів. A виросла на +8% sales (ToS модифікатор допоміг); D — ACoS впав до 38% (бюджет зрізали), але треба ще 3–4 тижні. | Модуль 7 (повторний manual review), Модуль 5 (звіти після змін) |
| **Тиждень 8** | Підготовка до Prime Day (30 днів до події в умовному календарі кейсу): discount planning, stock check, bid pre-adjustments, monitoring schedule. | Модуль 9 (events prep) |

---

## Проекція впливу рішень (для модуля 5 і 9)

Якщо студент зробить усі правильні рішення з курсу:

| ASIN | Тижд. 1–4 (baseline) | Тижд. 8 (проекція) | Динаміка |
|------|----------------------|---------------------|----------|
| A | Sales $42.8K, ACoS 24.6% | Sales $48.5K, ACoS 22% | +13% sales, ACoS −2.6 p.p. |
| B | Sales $9.4K, ACoS 32.8% | Sales $10.2K, ACoS 27% | +9% sales, ACoS −5.8 p.p. (кастомні ключі замість канібалізації) |
| C | Sales $21.4K, ACoS 21.4% | Sales $23.1K, ACoS 19% | +8% sales, ACoS −2.4 p.p. (placement comp) |
| D | Sales $6.2K, ACoS 48.2% | Sales $5.0K, ACoS 22% | −19% sales, але ACoS в рамках BE. Економія $600/міс чекає на listing fix. |
| E | Sales $7.6K, ACoS 25.8% | Sales $9.4K, ACoS 24% | +24% sales через harvest + SD cross-sell |

**Підсумок на рівні бренду (US):** Sales +8%, Ad spend −6%, ACoS −3.1 p.p., Profit +18% (головний внесок — D перестав горіти і E зріс на cross-sell).

Саме цю трансформацію студент повторює у домашках.

---

## Як цей кейс прив'язаний до модулів

| Модуль | Як використовується кейс |
|--------|--------------------------|
| **1** | Перевірка «готовності» D до PPC (чек-лист price, rating, reviews, stock, images). Розпізнавання аномалії D у списку кампаній. |
| **2** | Завантаження Search Query Performance (BA) для A і D, порівняння наш CTR/CR з niche median, висновок про PPC-доцільність для D («рано»). |
| **3** | Keyword research для A — 25–50 ключів через BA / Cerebro / competitors, класифікація за релевантністю. |
| **4** | Search Term Report 30 днів: 10 negativeExact з A і D, 3 harvest candidates з A → E. |
| **5** | Purchase Product Report для parent A+B: виявити, що канібалізація на `chef knife` зйдала бюджет B, запропонувати structural changes. |
| **6** | Тижневий bulk US+CA для всього бренду: placements (ToS +40% на C), bids, аудієнції, Amazon Business, ST negatives, portfolio. |
| **7** | 43 тригери Manual Review на 5 ASIN × ~7 кампаній = ~35 кампаній. Report у форматі Skill 3. |
| **8** | Діагностика D через Sellerboard (маржа, refund rate) + Seller Sprite (SERP, competitors) + AsinSight (traffic mix) → 1-сторінковий звіт. |
| **9** | Prep plan до Prime Day: 3 ASIN (A, C, E), discount strategy, PPC bid adjustments, stock plan, monitoring schedule. |

---

Цей кейс використовується у тестах та домашках Модулів 2–9. Дані однакові у всіх модулях — ви бачите одну й ту саму марку крізь призму різних інструментів і рішень.
