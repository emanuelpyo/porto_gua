# Portoku

Personal portfolio website built with Go and native web technologies.

The project is developed incrementally. The current state is a minimal, working foundation, not a finished site.

## Technology stack

- Go (standard library `net/http`, `html/template`)
- HTML5, CSS3, vanilla JavaScript
- No CSS framework, no frontend framework, no database

## Prerequisites

- Go 1.21 or newer

## Installation

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/portoku
go mod tidy
```

## Run the application

```bash
go run ./cmd/server
```

Open http://127.0.0.1:3000

The server serves the homepage at `/` and static files at `/public/`.

## Environment configuration

Configuration is read from environment variables. Copy `.env.example` to `.env` for reference; the application does not load `.env` itself, so export the variables in your shell or rely on the defaults.

| Variable | Default | Purpose |
|---|---|---|
| `APP_ENV` | `development` | environment name |
| `APP_NAME` | `Portoku` | site name |
| `SERVER_HOST` | `127.0.0.1` | bind address |
| `SERVER_PORT` | `3000` | bind port |
| `PROJECT_ROOT` | `../..` | project root used to locate `templates/` and `public/` |

Defaults work without any environment variable. When running a built binary from a different directory, set `PROJECT_ROOT` to the project directory.

## Directory overview

```text
cmd/server/      application entry point
internal/        config, server, and site packages
templates/       Go templates
public/          css, js, images, fonts, documents
docs/            architecture, development, design, and asset docs
tests/           Go tests
```

## Build and validation

```bash
gofmt -w cmd internal tests
go test ./...
go vet ./...
go build ./...
```

Build the binary explicitly with:

```bash
go build -o bin/portoku ./cmd/server
```
