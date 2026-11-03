package tests

import (
	"log"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"strings"
	"testing"

	"github.com/deryl/portoku/internal/config"
	"github.com/deryl/portoku/internal/site"
)

func TestTemplatesLoad(t *testing.T) {
	root, err := filepath.Abs(filepath.Join(".."))
	if err != nil {
		t.Fatal(err)
	}
	tpl, err := site.LoadTemplates(os.DirFS(root), "templates")
	if err != nil {
		t.Fatalf("load templates: %v", err)
	}
	if tpl == nil {
		t.Fatal("nil templates")
	}
}

func TestHomeRenders(t *testing.T) {
	root, err := filepath.Abs(filepath.Join(".."))
	if err != nil {
		t.Fatal(err)
	}
	tpl, err := site.LoadTemplates(os.DirFS(root), "templates")
	if err != nil {
		t.Fatalf("load templates: %v", err)
	}
	h := site.NewHandler(tpl, "Portoku", "development", log.New(os.Stderr, "", 0))

	rec := httptest.NewRecorder()
	req := httptest.NewRequest(http.MethodGet, "/", nil)
	h.Home(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("status = %d, want 200", rec.Code)
	}
	body := rec.Body.String()
	if !strings.Contains(body, "Portoku") {
		t.Fatalf("body missing app name: %q", body)
	}
	if !strings.Contains(body, "/public/css/main.css") {
		t.Fatalf("body missing css link")
	}
}

func TestHomeNotFound(t *testing.T) {
	root, err := filepath.Abs(filepath.Join(".."))
	if err != nil {
		t.Fatal(err)
	}
	tpl, err := site.LoadTemplates(os.DirFS(root), "templates")
	if err != nil {
		t.Fatalf("load templates: %v", err)
	}
	h := site.NewHandler(tpl, "Portoku", "development", log.New(os.Stderr, "", 0))

	rec := httptest.NewRecorder()
	req := httptest.NewRequest(http.MethodGet, "/nope", nil)
	h.Home(rec, req)

	if rec.Code != http.StatusNotFound {
		t.Fatalf("status = %d, want 404", rec.Code)
	}
}

func TestConfigDefaults(t *testing.T) {
	for _, k := range []string{"APP_ENV", "APP_NAME", "SERVER_HOST", "SERVER_PORT"} {
		t.Setenv(k, "")
	}
	cfg := config.Load()
	if cfg.Port != "3000" {
		t.Fatalf("port = %q, want 3000", cfg.Port)
	}
	if cfg.Addr() != "127.0.0.1:3000" {
		t.Fatalf("addr = %q", cfg.Addr())
	}
	if !cfg.IsDevelopment() {
		t.Fatalf("env should default to development")
	}
}
