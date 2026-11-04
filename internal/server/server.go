package server

import (
	"context"
	"errors"
	"fmt"
	"io/fs"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/deryl/portoku/internal/config"
	"github.com/deryl/portoku/internal/site"
)

type Server struct {
	http   *http.Server
	logger *log.Logger
	cfg    config.Config
}

func New(cfg config.Config, root string, logger *log.Logger) (*Server, error) {
	templates, err := site.LoadTemplates(os.DirFS(root), "templates")
	if err != nil {
		return nil, fmt.Errorf("load templates: %w", err)
	}

	assets, err := fs.Sub(os.DirFS(root), "public")
	if err != nil {
		return nil, fmt.Errorf("static assets: %w", err)
	}

	handler := site.NewHandler(templates, cfg.Name, cfg.Env, logger)

	mux := http.NewServeMux()
	mux.HandleFunc("GET /", handler.Home)
	mux.HandleFunc("GET /projects", handler.Projects)
	mux.HandleFunc("GET /journey", handler.Journey)
	mux.Handle("GET /public/", http.StripPrefix("/public/", http.FileServerFS(assets)))

	return &Server{
		cfg:    cfg,
		logger: logger,
		http: &http.Server{
			Addr:              cfg.Addr(),
			Handler:           mux,
			ReadHeaderTimeout: 5 * time.Second,
			ReadTimeout:       15 * time.Second,
			WriteTimeout:      30 * time.Second,
			IdleTimeout:       60 * time.Second,
		},
	}, nil
}

func ProjectRoot() string {
	if v := os.Getenv("PROJECT_ROOT"); v != "" {
		return v
	}
	return filepath.Join("..", "..")
}

func (s *Server) ListenAndServe() error {
	s.logger.Printf("starting %s", s.cfg)
	if err := s.http.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
		return err
	}
	return nil
}

func (s *Server) Shutdown(ctx context.Context) error {
	s.logger.Printf("shutting down")
	return s.http.Shutdown(ctx)
}
