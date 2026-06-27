# daisyUI — Bumblebee Design System

A design system that recreates **[daisyUI 5](https://daisyui.com/)** styled with its built‑in **`bumblebee`** theme — a bright, friendly, light palette built on a **bumblebee‑yellow primary, warm amber secondary, and pure‑black accent**.

daisyUI is the most popular open‑source component library for Tailwind CSS. It adds semantic component class names (`btn`, `card`, `badge`, `input`, …) on top of Tailwind utilities, and ships ~35 swappable color themes. This project ports the daisyUI component look‑and‑feel and the `bumblebee` theme tokens into **plain, framework‑free CSS** plus a set of React primitives, so designs can be produced without a Tailwind build step.

> **Why a port and not the npm package?** daisyUI is normally compiled through Tailwind. To make this system usable in standalone HTML mockups and prototypes, the component visuals here are hand‑ported to vanilla CSS driven by the exact `bumblebee` CSS variables. Class names match daisyUI (`btn btn-primary`, `card`, `badge badge-soft`, …) so the mental model is identical.

---

## Sources

This system was built by reading the official daisyUI source:

- **GitHub:** https://github.com/saadeghi/daisyui — the `bumblebee` theme is `packages/daisyui/src/themes/bumblebee.css`; component definitions live under `packages/daisyui/src/components/`. Explore this repo to extend the system with components not yet ported here (drawer, carousel, steps, timeline, swap, etc.).
- **Docs & live components:** https://daisyui.com/components/
- **Theme reference:** https://daisyui.com/docs/themes/

The `bumblebee` color, radius, size, border and depth values in `tokens/` are copied **verbatim** from the daisyUI 5 source. The component CSS replicates daisyUI's structure (the `--btn-*` custom‑property machinery, soft/outline/ghost/dash variants, size scale, etc.).

---

## Content fundamentals

daisyUI's own voice (docs, marketing, component names) is the reference.

- **Tone:** friendly, plain‑spoken, lightly playful. The flower mascot 🌼 and the name itself ("daisy") set a warm, approachable mood — never corporate or stiff.
- **Person:** addresses the reader directly as **"you"** ("you can use", "add this class"). Docs are imperative and task‑first ("Add a button", "Change the theme").
- **Casing:** **sentence case** everywhere — headings, buttons, labels. Not Title Case. The brand name is stylized lowercase‑first: **daisyUI** (lowercase d, capital UI). Component and class names are lowercase (`btn`, `card-body`).
- **Brevity:** labels are short and literal — *Save*, *Cancel*, *Login*, *Buy now*, *Learn more*. Avoid clever microcopy; clarity wins.
- **Emoji:** yes — sparingly and warmly. The daisy 🌼 is effectively part of the wordmark and appears in headings. Otherwise emoji are not sprinkled through UI copy.
- **Numbers / specs:** docs are example‑driven — show the markup, show the result. Copy describes *what a thing is and when to use it*, not marketing superlatives.

**Examples of on‑brand copy:** "Buttons allow the user to take actions or make choices." · "Login" · "Save changes" · "Add to cart" · "Theme changed!"

---

## Visual foundations

**Palette (bumblebee).** Light, high‑energy, warm.
- **Primary** `oklch(85% 0.199 91.936)` — a saturated **bumblebee yellow**. Primary text sits on it as a dark amber‑brown (`primary-content`), not white — yellow is too light for white text. This is the signature color; use it for the main CTA.
- **Secondary** `oklch(75% 0.183 55.934)` — **warm amber/orange**, pairs with the yellow for the bee motif.
- **Accent** `oklch(0% 0 0)` — **pure black**. The high‑contrast punctuation color (black buttons/links on yellow).
- **Neutral** `oklch(37% 0.01 67.558)` — warm dark gray for neutral buttons & dark surfaces.
- **Base** white → `97%` → `92%` grays; **base‑content** is near‑black `oklch(20%)`. Pages are white, not tinted.
- **Status:** info (sky blue), success (green), warning (amber), error (red) — all light‑theme tuned with dark `*-content` text.

**Type.** daisyUI ships **no font of its own** — it inherits the host stack. This system standardises on the **system‑UI sans stack** (`ui-sans-serif, system-ui, …`) which is what daisyui.com renders with, plus a `ui-monospace` stack for code. Control text defaults to **14px / weight 600** (the daisyUI button weight); body is 16px. Headings are bold (700) and `text-wrap: balance`.

**Shape & radius.** Rounded and soft. `--radius-field: 0.5rem` (buttons, inputs), `--radius-box: 1rem` (cards, modals, alerts), `--radius-selector: 1rem` (badges, toggles). Corners are noticeably round but not fully pill unless a control opts in (`btn-circle`, toggles, badges).

**Borders.** `--border: 1px` everywhere. Borders are subtle gray (`base-300`) on fields; colored variants tint the border to match (`input-primary`, `badge-outline`).

**Depth & shadow.** `--depth: 1` — daisyUI's subtle physicality. Buttons get a 0.5px inset white top‑highlight + a soft dual drop shadow tinted from their own background, plus a faint text‑shadow. On `:active` the button nudges down `translate: 0 0.5px` and the shadow collapses — a tactile "press". Cards get a light ambient shadow; bordered cards drop the shadow for a flatter look.

**Interaction states.**
- **Hover:** darken the control's own background ~7% via `color-mix(... #000 7%)` — never a different hue. Ghost/menu items get a translucent `base-content` wash (~8–10%).
- **Active/press:** darken ~5%, collapse shadow, 0.5px downward nudge.
- **Focus:** 2px solid `base-content` outline, 2px offset — visible and consistent across all controls.
- **Disabled:** translucent `base-content/10` fill, `base-content/20` text, no shadow.

**Motion.** Restrained. Transitions are `0.2s cubic-bezier(0,0,0.2,1)` (ease‑out) on color/background/border/shadow. The only looping animation is the `loading` spinner. No bounces, no parallax, no decorative motion.

**Backgrounds.** Flat solid color — white base, no gradients, no imagery, no texture (`--noise: 0`). Sections differentiate via `base-100/200/300` steps, not images.

**Layout.** Component‑centric, utility‑driven. Generous `gap`‑based spacing on the 0.25rem grid. Navbars are 4rem min‑height; cards pad 1.5rem; the system favors flex/grid with `gap` over margins.

**Cards.** White surface, `1rem` radius, soft ambient shadow (or a 1px `base-300` border with `card-border`). Optional full‑bleed top `figure` image that inherits the top corner radius.

---

## Iconography

daisyUI **does not ship an icon set** — its docs and examples use third‑party icons, most commonly **[Heroicons](https://heroicons.com/)** (inline SVG, outline & solid) and frequently **[Lucide](https://lucide.dev/)**. Icons are mono‑line, ~1.5px stroke, `currentColor`, sized to the control (`1rem`–`1.5rem`).

**This system uses Lucide via CDN** for UI kits and cards (closest match to the daisyUI example style, MIT‑licensed, CDN‑available):

```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
<!-- usage: --> <i data-lucide="shopping-cart"></i>
```

> **Substitution flag:** daisyUI examples mix Heroicons and Lucide depending on the page; there is no single canonical set. Lucide is chosen here for consistency and CDN availability. If you need exact parity with a specific daisyUI docs page, check whether it used Heroicons and swap accordingly.

**Brand mark.** daisyUI's mark is the **daisy flower 🌼**. It appears in the wordmark and headings. The wordmark is the text **daisyUI** in the system sans (lowercase *daisy*, capital *UI*). This system renders the brand lockup as `🌼 daisyUI` — see `assets/`. No custom logotype SVG is shipped by the project, so we use the emoji daisy as the authentic mark rather than drawing a substitute.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link. Imports everything below.
- `README.md` — this file.
- `SKILL.md` — Agent‑Skill front‑matter for use in Claude Code.

**Tokens** (`tokens/`)
- `colors.css` — bumblebee palette + semantic aliases
- `shape.css` — radius / size / border / depth tokens
- `typography.css` — font stacks, type scale, weights, line‑heights
- `spacing.css` — Tailwind 0.25rem spacing scale
- `base.css` — reset + page defaults

**Component CSS** (`css/`) — `button.css`, `surfaces.css` (card/alert/badge/divider), `forms.css` (input/select/checkbox/radio/toggle/range), `navigation.css` (navbar/menu/tabs/breadcrumbs/table/progress/avatar/tooltip/join/stat/loading).

**React components** (`components/`) — grouped by concern, each with `.jsx`, `.d.ts`, and a `@dsCard` showcase. Mounted from the compiled bundle as `window.<Namespace>.<Name>`:
- `actions/` — **Button**, **Badge**
- `forms/` — **Input**, **Select**, **Checkbox**, **Radio**, **Toggle**
- `feedback/` — **Alert**, **Progress**
- `layout/` — **Card** (+ `CardBody`/`CardTitle`/`CardActions`), **Stats**/**Stat**, **Avatar**
- `navigation/` — **Tabs**

**UI kit** (`ui_kits/shop/`) — full-screen interactive storefront recreation composing the primitives.

**Foundation cards** (`cards/`) — small specimen HTML files feeding the Design System tab.

---

## Extending this system

Not every daisyUI component is ported yet. To add more (drawer, steps, timeline, carousel, swap, rating, kbd, mockup‑*), read the component's CSS in [`saadeghi/daisyui`](https://github.com/saadeghi/daisyui) under `packages/daisyui/src/components/<name>.css` and port it the same way: replace `@apply` utilities with real properties and keep the `--*` custom‑property hooks so the bumblebee tokens drive it.
