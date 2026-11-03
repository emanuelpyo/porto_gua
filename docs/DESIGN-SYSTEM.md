# Design System

Editorial direction modeled on the Sam Cheng portfolio: white page, serif type, oversized background word, one hanging physical object.

## Color tokens

Defined in `public/css/base/variables.css`.

| Token | Value | Status |
|---|---|---|
| `--color-bg` | `#ffffff` | page white |
| `--color-fg` | `#111111` | ink |
| `--color-muted` | `#6a6a6a` | secondary text |
| `--color-hairline` | `rgba(17,17,17,0.12)` | dividers |
| `--color-accent` | `#2f5fa8` | About panel right border and link hover |
| `--color-badge` | `#ffffff` | badge face |

Palette is white + ink + one restrained accent.

## Typography

| Item | Value | Status |
|---|---|---|
| body / display | Iowan Old Style, Palatino, Georgia, Times New Roman, serif | serif editorial; no webfont dependency |
| mono | not used | |
| type scale | `--step-0` to `--step-3` (fluid `clamp`) | in variables |

A self-hosted serif can replace the system stack later; `--font-serif` is the single token to change.

## Spacing

`--space-1` to `--space-6`.

## Layout

- Hero fills `100dvh` on desktop, sizes to content on mobile.
- Background word `PORTFOLIO` sits behind everything, bottom-anchored, allowed to clip at the viewport edges.
- Top row: intro left, descriptor right.
- Lanyard centered on its own stage row.

## Breakpoints

- `1024px`: smaller badge and strap.
- `720px`: top row stacks, badge shrinks, background word scales to `30vw`, About panel becomes full width.

## Components

- Lanyard: SVG strap with woven shading, metal clamp, badge face with portrait, name, current role, previous organizations. Behavior in `public/js/sections/hero.js`.
- About panel: fixed left drawer with overlay, close button, Escape and overlay close, focus trap.

## Animation principles

- Entrance drop, damped pendulum swing, drag to swing, settles to rest. Purpose: the badge reads as a physical hanging object.
- `prefers-reduced-motion`: no drop, no swing, no panel slide.
