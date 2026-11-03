package config

import (
	"fmt"
	"net"
	"os"
)

type Config struct {
	Env  string
	Name string
	Host string
	Port string
}

func Load() Config {
	return Config{
		Env:  getenv("APP_ENV", "development"),
		Name: getenv("APP_NAME", "Portoku"),
		Host: getenv("SERVER_HOST", "127.0.0.1"),
		Port: getenv("SERVER_PORT", "3000"),
	}
}

func (c Config) Addr() string {
	return net.JoinHostPort(c.Host, c.Port)
}

func (c Config) IsDevelopment() bool {
	return c.Env == "development"
}

func getenv(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}

func (c Config) String() string {
	return fmt.Sprintf("%s (%s) on %s", c.Name, c.Env, c.Addr())
}
