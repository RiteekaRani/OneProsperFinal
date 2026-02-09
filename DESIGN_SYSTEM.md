# Read and Rise Design System

Inspired by the clean, philanthropic look of Google.org. This system keeps layout airy, typography strong, and surfaces bright with subtle borders. Tailwind defaults are used wherever possible; the tokens below map to Tailwind’s standard palette.

## Design principles
- Bright, optimistic surfaces with generous whitespace
- Clear hierarchy: large headings, short subheads, concise body text
- Soft, approachable shapes (rounded corners, light borders)
- CTAs are bold and easy to spot

## Color tokens (Tailwind defaults)
Use Tailwind colors directly; these tokens are semantic guidance only.
- `Surface`: `white` / `slate-50`
- `Border`: `slate-200`
- `Text`: `slate-900`
- `Text Muted`: `slate-600`
- `Primary`: `slate-900`
- `Primary Hover`: `slate-800`
- `Accent`: `blue-600`
- `Accent Soft`: `blue-100`
- `Positive`: `emerald-600`
- `Warning`: `amber-500`
- `Negative`: `rose-600`

## Typography
- `Display`: `text-4xl` / `font-semibold` (hero headline)
- `Headline`: `text-2xl` / `font-semibold` (section titles)
- `Subhead`: `text-lg` / `text-slate-600`
- `Body`: `text-base` / `text-slate-600`
- `Caption`: `text-sm` / `text-slate-500`

## Spacing & layout
- Max content width: `max-w-6xl` (pages), `max-w-4xl` (legal/content)
- Section padding: `py-10` to `py-16`
- Grid gaps: `gap-4` to `gap-6`

## Radius & elevation
- Cards: `rounded-2xl` + `shadow-sm` + `border border-slate-200`
- Buttons: `rounded-full`
- Modals: `rounded-2xl` + `shadow-xl`

## Core components
### Buttons
- Primary: `bg-slate-900 text-white hover:bg-slate-800`
- Secondary: `border border-slate-300 text-slate-800 hover:border-slate-400`

### Cards
- Use `bg-white`, soft border, and light shadow
- Titles: `text-lg font-semibold`
- Body: `text-sm text-slate-600`

### Navigation
- Minimal top bar with a clean CTA
- Sticky when enabled in spec

### Forms
- Rounded inputs with subtle focus rings
- Error states in `rose-600`

## Imagery & placeholders
Use placeholder blocks with labels until real assets are added. Maintain consistent aspect ratios and avoid heavy decoration.

## Implementation notes
- Base tokens are defined in `app/globals.css` as CSS variables.
- Tailwind defaults are the primary source of truth for spacing, typography, and colors.
