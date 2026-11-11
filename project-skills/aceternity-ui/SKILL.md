---
name: aceternity-ui
description: Aceternity UI integration for React and Next.js interfaces using the official shadcn registry. Use when designing, reviewing, or implementing animated landing pages, hero sections, backgrounds, cards, carousels, text effects, 3D elements, blocks, or Motion-based interactions with Tailwind CSS and shadcn/ui.
license: Apache-2.0
metadata:
  source: Aceternity UI
  documentation: https://ui.aceternity.com/
  installation: https://ui.aceternity.com/installation
  registry: https://ui.aceternity.com/registry/{name}.json
  cli: https://ui.aceternity.com/components/cli
---

# Aceternity UI

Treat Aceternity UI as an optional global design resource. Use it when a component or effect improves the product's purpose and identity; never force it into a project merely because it is available.

## Official references

- Documentation and catalog: https://ui.aceternity.com/
- Installation guide: https://ui.aceternity.com/installation
- CLI and registry reference: https://ui.aceternity.com/components/cli
- Free components catalog: https://ui.aceternity.com/components
- Blocks and sections: https://ui.aceternity.com/blocks

## Before implementation

1. Identify the client's segment, audience, product goal, existing visual language, and primary action.
2. Inspect the target project and detect React, Next.js, Vite, TypeScript, Tailwind CSS version, shadcn/ui, package manager, and the presence of `components.json`. Never assume compatibility.
3. Browse the official catalog and choose components that support the page's hierarchy. Prefer one coherent interaction system over a collection of unrelated effects.
4. Decide whether the project needs a free component, a block, or a Pro resource. Do not request or invent an `ACETERNITY_PRO_TOKEN`; if Pro content is requested and no token is available, explain that the user must provide/configure it per project.

## Official registry setup

Aceternity's official registry is project-scoped through `components.json`. If that file exists, preserve its current settings and add this entry under `registries`:

```json
{
  "registries": {
    "@aceternity": "https://ui.aceternity.com/registry/{name}.json"
  }
}
```

If the project has no `components.json`, initialize shadcn only when the user has authorized adding it and the detected stack supports it:

```bash
npx shadcn@latest init
```

Then add the registry entry. Do not initialize or rewrite an existing project automatically.

## Install on demand

Use the exact component name from the official catalog. With a configured registry:

```bash
npx shadcn@latest add @aceternity/bento-grid
```

A direct registry URL is also supported:

```bash
npx shadcn@latest add https://ui.aceternity.com/registry/bento-grid.json
```

Search or inspect before installing when the CLI supports it:

```bash
npx shadcn@latest search @aceternity -q "card"
npx shadcn@latest view @aceternity
```

Install only the dependencies reported as required by the selected component. Aceternity's current guidance targets React 19, a React framework such as Next.js/Vite/React Router, Tailwind CSS v4, and TypeScript is recommended. For projects without shadcn, use the documented `motion`, `clsx`, and `tailwind-merge` setup only when required.

## Design and quality rules

- Adapt colors, typography, spacing, radii, and motion to the client's design system.
- Keep the primary action and content readable above animated backgrounds.
- Use semantic HTML, keyboard access, visible focus, accessible labels, and a reduced-motion fallback.
- Avoid using multiple competing shaders, particles, 3D effects, or parallax layers on one page.
- Keep browser-only Motion and canvas effects in client components when required by the framework, and avoid hydration mismatches.
- Preserve existing copy, functionality, and brand identity unless the user explicitly authorizes a redesign.
- Verify desktop, tablet, and mobile rendering after installation and remove effects that hurt performance or comprehension.

## Scope and persistence

This skill is installed at the Manus skill level, so it is available as a reusable design resource across tasks in this environment. The Aceternity registry itself remains project-scoped by design: each compatible project must have its own `components.json` entry and its own dependencies. This skill must not copy components into every project automatically.
