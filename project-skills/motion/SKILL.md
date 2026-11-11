---
name: motion
description: Motion animation library integration for React, Next.js, Vite, and JavaScript interfaces. Use when implementing entrance animations, scroll-linked effects, parallax, gestures, drag, spring physics, layout transitions, AnimatePresence, shared element transitions, SVG animation, or accessible micro-interactions with Motion.
license: MIT
metadata:
  source: Motion
  documentation: https://motion.dev/
  react_docs: https://motion.dev/docs/react
  installation: https://motion.dev/docs/react-installation
  accessibility: https://motion.dev/docs/react-accessibility
---

# Motion

Treat Motion as an optional global animation resource. Use it when motion communicates hierarchy, state, spatial continuity, or feedback. Do not add it to a project when CSS transitions or the platform's native behavior are sufficient.

## Official references

- Main documentation: https://motion.dev/
- Motion for React: https://motion.dev/docs/react
- Installation: https://motion.dev/docs/react-installation
- Accessibility: https://motion.dev/docs/react-accessibility
- Gestures: https://motion.dev/docs/react-gestures
- Scroll-linked animation: https://motion.dev/docs/react-use-scroll
- Layout animations: https://motion.dev/docs/react-layout-animations
- Exit animations: https://motion.dev/docs/react-animate-presence
- Performance and bundle size: https://motion.dev/docs/performance

## Before implementation

1. Inspect the target project and detect React version, Next.js/Vite/other framework, TypeScript, package manager, and whether Motion or the former `framer-motion` package is already installed.
2. Preserve the existing animation system when one exists. Do not install duplicate animation libraries without a clear reason.
3. Choose the smallest Motion API that solves the interaction: `motion` props for simple transitions, variants for coordinated states, `AnimatePresence` for exit transitions, `layout`/`layoutId` for spatial continuity, and hooks for scroll or gesture-driven values.
4. Match timing, easing, spring parameters, colors, typography, and intensity to the product's identity. Motion must support the content and primary action, not compete with it.

## Install only when needed

Motion for React supports React 18.2 and newer. Install the current package only after checking the project and receiving authorization to modify dependencies:

```bash
npm install motion
```

Use the equivalent project package manager when detected:

```bash
pnpm add motion
# or: yarn add motion
# or: bun add motion
```

Import React APIs from `motion/react`:

```tsx
import { motion, AnimatePresence, MotionConfig } from "motion/react"
```

For Next.js App Router, use a client component (`"use client"`) when importing browser-dependent Motion components, or use the documented `motion/react-client` import when appropriate. Vite requires no special configuration according to the official guide.

## Core patterns

### Entrance and state transitions

Prefer opacity plus a small transform for purposeful entrance/reveal transitions. Use variants when parent and child states need coordination, and use stagger only when it improves scanning order.

### Scroll and parallax

Use `useScroll` for scroll progress, progress bars, and element-in-viewport effects. Compose with `useTransform` or `useSpring` and target GPU-friendly properties such as `opacity`, `transform`, `clipPath`, and `filter`. Avoid measuring scroll in a render loop.

```tsx
const { scrollYProgress } = useScroll()
const scaleX = useSpring(scrollYProgress)
return <motion.div style={{ scaleX, transformOrigin: "0% 50%" }} />
```

Keep parallax subtle and provide a reduced-motion alternative.

### Gestures and micro-interactions

Use `whileHover`, `whileTap`, `whileFocus`, `drag`, and `whileDrag` for direct feedback. Ensure keyboard users receive equivalent focus/press feedback and never make hover the only way to discover or operate a control.

### Layout and exit transitions

Use `layout` for changes in size, position, and order. Use `layoutId` for shared-element continuity. Wrap conditionally rendered elements in `AnimatePresence` when an exit animation explains what changed. Keep keys stable and preserve focus/semantics across transitions.

### Springs and coordinated sequences

Use springs for physical UI elements and gesture follow-through. Tune `stiffness`, `damping`, and `mass` to the element's perceived material. Avoid spring physics on text-heavy content or every component on a page.

## Accessibility and performance

- Respect the user's reduced-motion preference globally with `MotionConfig reducedMotion="user"` where appropriate.
- Use `useReducedMotion` for bespoke fallbacks: replace large transforms/parallax with opacity or a static state, and disable autoplaying motion when needed.
- Keep animation durations and distances short enough to preserve comprehension; do not animate layout-heavy properties when transforms can solve the problem.
- Do not animate continuously without a user or product reason.
- Preserve visible focus, keyboard navigation, semantic HTML, accessible labels, and screen-reader state changes.
- Test desktop, tablet, mobile, slow devices, and reduced-motion settings.
- Consider `LazyMotion` or lighter imports when bundle size matters.

## Global scope and project boundary

This skill is installed at the Manus skill level and is available as a reusable animation guide across future tasks in this environment. The `motion` npm dependency remains project-scoped: install it only in projects that need it, so dependencies are not duplicated or forced into unrelated projects. This skill does not modify existing projects automatically.
