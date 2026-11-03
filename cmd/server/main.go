package main

import (
	"context"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/deryl/portoku/internal/config"
	"github.com/deryl/portoku/internal/server"
)

func main() {
	logger := log.New(os.Stdout, "", log.LstdFlags)

	cfg := config.Load()

	srv, err := server.New(cfg, server.ProjectRoot(), logger)
	if err != nil {
		logger.Fatalf("init server: %v", err)
	}

	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
	defer stop()

	errCh := make(chan error, 1)
	go func() { errCh <- srv.ListenAndServe() }()

	select {
	case err := <-errCh:
		if err != nil {
			logger.Fatalf("serve: %v", err)
		}
	case <-ctx.Done():
		shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()
		if err := srv.Shutdown(shutdownCtx); err != nil {
			logger.Printf("shutdown: %v", err)
		}
	}
}
