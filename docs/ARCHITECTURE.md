# Architecture

## Entry point

`cmd/server/main.go` loads configuration, constructs the server, runs it in a goroutine, and waits for either a startup error or an OS interrupt (`SIGINT`/`SIGTERM`). On interrupt it performs a graceful shutdown with a 10 second timeout.

## Configuration flow

`internal/config/config.go` reads environment variables with sensible defaults and exposes `Config`. `Config.Addr()` joins host and port. `Config.String()` gives a readable startup log line. No `.env` file is parsed; defaults keep the app runnable with no configuration.

## HTTP server

`internal/server/server.go` builds an `http.Server` with explicit timeouts:

- `ReadHeaderTimeout` 5s
- `ReadTimeout` 15s
- `WriteTimeout` 30s
- `IdleTimeout` 60s

Routes are registered on a `http.ServeMux`:

| Pattern | Handler |
|---|---|
| `GET /` | homepage |
| `GET /public/` | static file server for `public/` |

`PROJECT_ROOT` (default `../..`) resolves the project directory. Templates are loaded from `<root>/templates`, static assets from `<root>/public`.

## Templates

`internal/site/templates.go` parses all files in `templates/layouts/` and `templates/partials/`, then parses each page in `templates/pages/` into the same template set. Rendering executes a named template (for the homepage, `base.html`) into a buffer before writing, so a render error does not emit a half-written page.

Templates are loaded once at startup. A template error fails startup explicitly instead of appearing at request time.

## Handlers

`internal/site/handler.go` owns the `Handler` type and receives its dependencies (`Templates`, app name, environment, logger) through `NewHandler`. Handlers never touch globals.

## Static assets

`public/` is served through `http.FileServerFS` under `/public/`. CSS and JS entry points are referenced as `/public/css/main.css` and `/public/js/main.js`.

## Directory responsibilities

| Directory | Responsibility |
|---|---|
| `cmd/server` | process startup only |
| `internal/config` | environment parsing |
| `internal/server` | transport, routing, lifecycle |
| `internal/site` | page logic and template rendering |
| `templates` | server-rendered markup |
| `public` | browser assets |
| `docs` | documentation |
| `tests` | automated tests |

## Design decisions

- Templates and public assets are read from disk rather than embedded, so development edits appear without a rebuild. Embedding can replace this later if a single-binary deployment is needed.
- No router library: `net/http` pattern matching is enough for this scope.
- No global state: dependencies are passed explicitly.
