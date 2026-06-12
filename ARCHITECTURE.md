# Architecture

Feature-based layout with strict, layered import boundaries. Every cross-folder
import uses the `@/` alias (configured in `tsconfig.json` and `vite.config.ts`);
imports inside a single feature stay relative (`./components/...`).

## Folder layout

```
src/
  main.tsx              # Vite entry — mounts the app
  app/                  # Composition root: App shell, view switching
  components/
    ui/                 # Design-system primitives (Button, Badge, Card, Input,
                        # SectionWrapper). No business or content knowledge.
    layout/             # App chrome shared across views (Navbar, Footer)
  content/              # All site copy & data, one file per domain
                        # (site, navigation, experience, skills, projects, testimonials)
  features/             # One folder per page section / product feature
    hero/
    about/
    experience/
    projects/
    testimonials/
      hooks/            # Feature-local hooks (e.g. useTestimonials)
    services/
      api/              # Remote API clients (YouTube Data API, microlink)
      hooks/            # Hooks wiring api/ + lib/cache into component state
      components/       # Feature-local components
      content.ts        # Feature-local copy & data
      animations.ts     # Feature-local motion variants
  lib/                  # Generic, dependency-free utilities
                        # (cn, motion variants, cache, socials)
  styles/               # Global CSS
```

## Import boundaries

Lower layers must never import from higher layers. Allowed dependencies:

| Layer              | May import from                                  |
| ------------------ | ------------------------------------------------ |
| `lib/`             | nothing internal (external packages only)        |
| `styles/`          | nothing                                          |
| `content/`         | `lib/`                                           |
| `components/ui/`   | `lib/`                                           |
| `components/layout/` | `components/ui/`, `content/`, `lib/`           |
| `features/*`       | `components/`, `content/`, `lib/`                |
| `app/`             | anything                                         |

Hard rules:

1. **A feature never imports from another feature.** Shared code moves down to
   `components/`, `lib/`, or `content/` first.
2. **`components/ui/` stays content-free.** Primitives take everything via
   props; they must not import from `content/` or `features/`.
3. **No re-export shims.** When a module moves, update its importers.
4. **Content lives in `content/` or a feature's `content.ts`** — never inline
   in `app/` or `components/`.

Enforcement is currently by convention/review; mechanical enforcement
(`eslint-plugin-boundaries` or `import/no-restricted-paths`) lands with the
lint-infrastructure phase.
