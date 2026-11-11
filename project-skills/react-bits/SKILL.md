---
name: react-bits
description: React Bits component library integration for adding animated React components, backgrounds, text effects, micro-interactions, 3D effects, and UI sections to React, Next.js, Vite, or Tailwind projects. Use when the user requests React Bits components, animated UI, interactive backgrounds, distinctive effects, or asks to install/add a component from reactbits.dev.
license: MIT + Commons Clause
metadata:
  source: React Bits
  repository: https://github.com/DavidHDev/react-bits
  registry: https://reactbits.dev/r/{name}.json
---

# React Bits

Use React Bits as a source of production-ready animated React components. Prefer the official registry so components are added to the user's project instead of copying the React Bits documentation site or its demo application.

## When to use

Use this skill for animated text, cursor and hover effects, cards, navigation, galleries, micro-interactions, section backgrounds, shader-style visuals, and other distinctive React UI components. It supports JavaScript or TypeScript variants and CSS or Tailwind variants.

## Installation workflow

1. Inspect the target project before adding anything. Detect React, Next.js, Vite, Tailwind, TypeScript, and whether `components.json` already exists. Do not assume the stack.
2. Ask for or infer the component intent, visual role, and acceptable motion level. Prefer one or two purposeful effects over decorative overload.
3. Add the React Bits registry to `components.json` when it is absent:

```json
{
  "registries": {
    "@react-bits": "https://reactbits.dev/r/{name}.json"
  }
}
```

Preserve existing registry entries and formatting.
4. Install the requested component using the project's package manager and the exact registry name, for example:

```bash
npx shadcn@latest add @react-bits/SplitText-TS-TW
```

Alternatively use jsrepo:

```bash
npx jsrepo@latest add https://reactbits.dev/r/SplitText-TS-TW
```

Choose the suffix deliberately: `JS` or `TS`, followed by `CSS` or `TW`.
5. Install any peer dependencies reported by the component installer. Do not add libraries that are not required by the selected component.
6. Integrate the component into the existing design system. Respect the product's colors, typography, spacing, accessibility, reduced-motion behavior, and responsive layout. Do not replace real product content with the demo content.
7. Verify the rendered result at desktop and mobile sizes. Check keyboard focus, contrast, reduced motion, loading behavior, and performance. Remove or simplify effects that compete with the primary action.

## Component selection guidance

- Use text animations for entrance, emphasis, or section transitions—not every heading.
- Use backgrounds and shader effects only when they clarify the product's subject and remain readable.
- Use cursor, magnetic, hover, and distortion effects sparingly and never as the only way to reveal an action.
- Prefer CSS/Tailwind variants when the project already uses Tailwind; prefer TypeScript when the project is TypeScript-first.
- For server-rendered frameworks, keep browser-only effects in client components and avoid hydration mismatches.
- For accessibility, provide semantic elements, labels, keyboard operation, visible focus, and a reduced-motion fallback.

## Common registry names

Examples include `SplitText`, `BlurText`, `TextType`, `CountUp`, `AnimatedContent`, `ClickSpark`, `Magnet`, `SpotlightCard`, `TiltedCard`, `InfiniteMenu`, `LogoLoop`, `Aurora`, `Threads`, `DotGrid`, `LightRays`, `Galaxy`, `LiquidChrome`, and `Ballpit`. Confirm the exact current registry name and flavor before installing; do not invent a component URL when the registry returns no match.

## Important boundary

The uploaded React Bits repository is the library's documentation/demo application, not a Manus skill package. Do not install its full 341 MB site source into a user's project unless the user explicitly asks to run the React Bits website itself. For normal UI work, use the official registry and add only the requested component files and dependencies.
