# AGENTS.md

Rules for every coding session in this repository.

## Project rules

- Go-based portfolio website, module `github.com/deryl/portoku`.
- Go standard library wherever practical. No new dependency without a reason.
- `html/template` for server-rendered pages, never `text/template`.
- Native HTML, CSS, and JavaScript (ES modules where useful).
- No React, Next.js, Vue, Laravel, Tailwind, or other frontend framework.
- Backend and frontend responsibilities stay separated.

## Incremental development

We build the site in stages. Each stage must:

1. Inspect the existing implementation.
2. Understand the current architecture.
3. Identify the files relevant to the requested task.
4. Implement only the requested scope.
5. Preserve existing functionality.
6. Validate the changes.
7. Report the exact files changed and checks performed.

Never implement future sections or features without an explicit request.

## Change protection

- Never overwrite user assets without permission.
- Never delete existing files just because they appear unused.
- Never perform destructive Git operations.
- Never run Git add, commit, push, or deployment commands unless explicitly requested.
- Never modify unrelated sections.
- Never claim a build or browser test passed unless it was actually executed.
- Distinguish confirmed facts from assumptions.

## Code quality

- Prefer readable, maintainable code.
- Avoid unnecessary abstractions.
- Avoid duplicate CSS rules.
- Use descriptive class names.
- Scope section-specific styles.
- Avoid excessive global styles.
- Use semantic HTML and accessibility best practices.
- Respect reduced-motion preferences for animations.

## Layout map

| Path | Responsibility |
|---|---|
| `cmd/server/main.go` | startup, signal handling, graceful shutdown |
| `internal/config/config.go` | environment-based configuration |
| `internal/server/server.go` | HTTP server, routing, static serving |
| `internal/site/handler.go` | page handlers |
| `internal/site/templates.go` | template loading and rendering |
| `templates/` | Go templates (layouts, partials, pages) |
| `public/` | static assets served at `/public/` |
| `docs/` | architecture and asset documentation |
| `tests/` | Go tests |
