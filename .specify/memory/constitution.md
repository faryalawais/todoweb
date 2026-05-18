# to do web Constitution (Minimal

Purpose: Define non‑negotiable engineering rules for this repository. Interpret each section for the stated tech stack; amend formally when scope or stack changes.

## 1. Project Overview
- **Description**: to do app that lists all the tasks with differrent statuses and keep track of tasks.
- **Tech stack**: nestjs, react, supabase
- State what this project delivers (product/service scope) and what is out of scope.
- Sections 2–11 apply; interpret bullets for the stack above unless this constitution is amended.

## 2. Required File Structure
- Keep a clear, documented layout; onboarding MUST be possible from README + repo tree alone.
- Prefer conventional folders for your stack (`src/`, `apps/`, `packages/`, etc.); document the convention.

```
repo-root/
├── README.md              # build, test, run, deploy
├── src/                   # or app/, lib/, packages/ — match your stack
├── tests/                 # or co-located tests — document convention
└── .gitignore
```

## 3. Entry Points & Configuration
- Document how the application or service boots (CLI entry, `main`, HTTP listen, etc.).
- Configuration and secrets: where they live, validation, and defaults for local/dev.
- Runtime and language versions: pin or document minimums where it matters.

## 4. Presentation & Styling
- UI structure (components, views, templates, mobile/desktop) as applicable to the stack.
- Consistency: design tokens, theming, or style guides the team MUST follow.
- Responsive and internationalization expectations when the product is user-facing.

## 5. Core Logic & Data Flow
- Separate domain logic from infrastructure; keep dependencies acyclic where practical.
- Validate inputs at boundaries; fail explicitly; avoid silent data loss.
- Error handling for I/O, external APIs, and user-visible failures.

## 6. Accessibility & Semantics
- For UIs: semantic structure, keyboard use, focus, labels where applicable.
- For APIs/CLIs: clear errors, stable contracts, discoverable help text.
- Meet applicable accessibility standards for your product surface.

## 7. Performance & Reliability
- Set sensible budgets (latency, bundle size, memory) appropriate to the stack.
- Caching, retries, timeouts, and idempotency for external calls as needed.
- Observability hooks (logs, metrics, traces) for production debugging.

## 8. Documentation, APIs & Discoverability
- README and architecture notes for contributors; link to ADRs or decisions when useful.
- Public HTTP/API surfaces: versioning, OpenAPI or equivalent, deprecation policy.
- For public web properties: metadata and SEO when relevant.

## 9. Development & Version Control
- Keep code in Git with a sensible `.gitignore`.
- Branching and PR expectations; small, reviewable changes.
- Human-readable commits; reference issues/REQs when the team uses them.

## 10. Deployment & Operations
- How environments (dev/stage/prod) are defined and promoted.
- CI expectations: build, test, security scans as appropriate.
- Rollback and incident response expectations at a high level.

## 11. Optional (but recommended)
- Linting/formatting aligned with the stack (ESLint, Ruff, golangci-lint, etc.).
- Dependency update policy and supply-chain basics.

**Version**: 0.1.1 | **Last Updated**: 2026-05-18