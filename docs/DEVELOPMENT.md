# Development

## Start the server

```bash
go run ./cmd/server
```

The server reloads templates and static files from disk on each request cycle, but restart it after Go code changes.

## Stop the server

Press `Ctrl+C`. The process shuts down gracefully.

## Format

```bash
gofmt -w cmd internal tests
```

## Test

```bash
go test ./...
```

## Vet and build

```bash
go vet ./...
go build ./...
```

## Build a binary

```bash
go build -o bin/portoku ./cmd/server
PROJECT_ROOT=. ./bin/portoku
```

## Add a template page

1. Create `templates/pages/<name>.html` with `{{define "<name>.html"}}...{{end}}`.
2. Register the file in `pageFiles` in `internal/site/templates.go`.
3. Add a handler in `internal/site/handler.go` and a route in `internal/server/server.go`.

## Add a CSS module

Create the file under the matching subfolder of `public/css/` and import it from `public/css/main.css` with `@import url("...");`.

- `base/` for reset, variables, typography
- `components/` for reusable UI parts
- `sections/` for page sections
- `utilities/` for layout and helper rules

## Add a JavaScript module

Create the file under `public/js/components/` or `public/js/sections/` and import it from `public/js/main.js` using a relative ES module path.
