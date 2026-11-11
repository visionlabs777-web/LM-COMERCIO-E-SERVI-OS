---
name: premium-web-development
description: Orchestrate premium web design and development for creating, redesigning, or improving websites, landing pages, sales pages, e-commerce stores, portfolios, institutional sites, React/Next.js interfaces, and reusable web components. Use automatically for web creation, visual redesign, UI/UX improvement, responsive interfaces, animations, and frontend implementation; coordinate available design, UI/UX, component, animation, and documentation resources without forcing every tool into every project.
metadata:
  scope: global-user-skill
  coordinator: Frontend Design, UI/UX Pro Max, Taste, Impeccable, React Bits, Aceternity UI, Motion, Context7
---

# Premium Web Development

Act as the coordinating workflow for premium web projects. This skill is available globally in the Manus skills directory and should be considered whenever a request involves creating, redesigning, polishing, or implementing a web interface.

## Trigger situations

Use this workflow for requests involving websites, landing pages, sales pages, e-commerce, portfolios, institutional sites, dashboards, React or Next.js interfaces, responsive layouts, UI components, frontend redesigns, design audits, visual polish, animations, or conversion-focused page improvements. Do not require the user to name this skill or any supporting resource.

## Supporting resources

Consult the original installed resources when relevant; do not copy or recreate them:

- Frontend Design — `/home/ubuntu/skills/frontend-design/SKILL.md`
- UI/UX Pro Max — `/home/ubuntu/skills/ui-ux-pro-max/SKILL.md`
- Taste — `/home/ubuntu/skills/design-taste-frontend/SKILL.md`
- Impeccable — `/home/ubuntu/skills/impeccable/SKILL.md`
- React Bits — `/home/ubuntu/skills/react-bits/SKILL.md`
- Aceternity UI — `/home/ubuntu/skills/aceternity-ui/SKILL.md`
- Motion — `/home/ubuntu/skills/motion/SKILL.md`
- Context7 — enabled Manus MCP connector with `resolve-library-id` and `query-docs`

Use only the resources relevant to the project. A coordinator must not mechanically load or apply every library.

## Required workflow

### 1. Direction and discovery

Identify the client segment, audience, goal, primary conversion action, content, brand constraints, current stack, and existing visual language. Inspect the target repository before changing it. Read Frontend Design and Taste when a new visual direction is needed. Establish a distinctive art direction and reject generic AI-template composition.

### 2. UI/UX strategy

Read UI/UX Pro Max for evidence-based choices around hierarchy, typography, palette, spacing, responsive behavior, accessibility, and interaction patterns. Define page structure, navigation, states, content hierarchy, and success criteria before implementing visual effects.

### 3. Technical plan

Detect React, Next.js, Vite, TypeScript, Tailwind CSS version, shadcn/ui, package manager, and existing dependencies. Prefer the current project architecture. Use React or Next.js when appropriate, Tailwind when compatible, and shadcn/ui only when it fits the project. Never reinstall an existing dependency or initialize a framework without authorization.

Consult Context7 before relying on version-sensitive library APIs. Resolve the library ID first, then query one focused concept at a time. Do not include secrets, proprietary code, or personal data in Context7 queries.

### 4. Component selection

Inspect the official React Bits and Aceternity UI resources before building an effect that may already exist. Prefer official, compatible implementations. Add only the selected components and their required dependencies. For Aceternity UI, register its official registry in the project's `components.json` only when the project is compatible and the user has authorized the project change:

```json
{
  "registries": {
    "@aceternity": "https://ui.aceternity.com/registry/{name}.json"
  }
}
```

Do not copy components into every project automatically. Do not assume access to paid/proprietary resources or invent tokens.

### 5. Animation and interaction

Read Motion when implementing animation, gestures, scroll effects, layout transitions, shared-element transitions, springs, or microinteractions. Use purposeful movement: entrance/reveal, state feedback, spatial continuity, or guided attention. Prefer GPU-friendly properties, stable keys, semantic controls, and reduced-motion alternatives. Use `MotionConfig reducedMotion="user"` or `useReducedMotion` when appropriate. Avoid constant motion, excessive glow, competing shaders, and interactions that work only on hover.

### 6. Implementation

Implement the smallest coherent system that satisfies the brief. Preserve brand identity and existing functionality unless redesign is explicitly authorized. Keep components maintainable, responsive, keyboard accessible, and compatible with the detected framework. Separate client-only animation code where required by Next.js. Do not alter unrelated files.

### 7. Refinement

Read Impeccable after the first working implementation. Review typography, composition, spacing, contrast, alignment, copy hierarchy, empty/loading/error states, focus states, mobile behavior, and visual distinctiveness. Remove generic cards, arbitrary gradients, excessive rounded corners, and ornamental effects that do not serve the product.

### 8. Verification

Test the actual interface at mobile, tablet, and desktop widths. Verify navigation, buttons, menus, forms, keyboard interaction, focus visibility, reduced-motion behavior, overflow, loading states, errors, and performance. Check that animation does not block reading or interaction. Summarize which resources were consulted and what was installed or intentionally not installed.

## Visual quality guardrails

Aim for agency-quality work with a clear identity, intentional typography, strong hierarchy, balanced spacing, useful imagery, restrained animation, complete responsiveness, and excellent navigation. Avoid generic layouts, repetitive sections, excessive card grids, purposeless gradients, neon/glow overuse, personality-free type, template-like composition, and motion that harms performance or accessibility.

## Scope and limitation

This is a global Manus skill resource stored under `/home/ubuntu/skills/premium-web-development`. Its metadata is designed to trigger on web-development requests, and its body coordinates the original installed skills and the enabled Context7 connector. The Manus runtime does not expose a separate universal trigger-registration API in this environment, so activation is metadata-based rather than a manually registered event hook. Project dependencies, registry entries, and component files remain project-scoped and are changed only when required and authorized.
