package site

import (
	"log"
	"net/http"
)

type PageData struct {
	Title       string
	AppName     string
	Environment string
	Hero        HeroData
}

type HeroData struct {
	Intro          string
	Descriptor     string
	BackgroundWord string
	About          AboutData
}

type AboutData struct {
	Bio        []string
	Portrait   string
	Experience []ExperienceItem
}

type ExperienceItem struct {
	Organization string
	Role         string
	Period       string
}

func defaultHero() HeroData {
	return HeroData{
		Intro:          "From lines of code to systems that keep everything running.",
		Descriptor:     "Bridging web development and IT infrastructure through practical problem solving.",
		BackgroundWord: "Aut Viam Inveniam Aut Faciam",
		About: AboutData{
			Bio: []string{
				"I'm an Informatics graduate with an interest in building websites and understanding how technology works behind the scenes.",
				"I work across web development and IT support, from building and maintaining websites to troubleshooting computers, networks, and everyday technical issues. I also enjoy finding ways to automate repetitive tasks and make things work a little better.",
				"I'm still learning, experimenting, and taking on new challenges, with a genuine interest in how technology can solve real problems.",
			},
			Portrait: "/public/images/profile/About.png",
			Experience: []ExperienceItem{
				{Organization: "PT Primadaya Plastisindo Tbk", Role: "IT Support & Web Developer", Period: "September 2026"},
				{Organization: "Lawkey", Role: "Frontend Web Developer", Period: "October 2026"},
			},
		},
	}
}

type Handler struct {
	templates *Templates
	appName   string
	env       string
	logger    *log.Logger
}

func NewHandler(t *Templates, appName, env string, logger *log.Logger) *Handler {
	return &Handler{templates: t, appName: appName, env: env, logger: logger}
}

func (h *Handler) Home(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		h.notFound(w)
		return
	}
	data := PageData{
		Title:       h.appName,
		AppName:     h.appName,
		Environment: h.env,
		Hero:        defaultHero(),
	}
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	if err := h.templates.Render(w, "base.html", data); err != nil {
		h.logger.Printf("render home: %v", err)
		http.Error(w, "internal server error", http.StatusInternalServerError)
	}
}

func (h *Handler) Projects(w http.ResponseWriter, r *http.Request) {
	data := PageData{
		Title:       "Projects | " + h.appName,
		AppName:     h.appName,
		Environment: h.env,
		Hero:        defaultHero(),
	}
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	if err := h.templates.Render(w, "projects.html", data); err != nil {
		h.logger.Printf("render projects: %v", err)
		http.Error(w, "internal server error", http.StatusInternalServerError)
	}
}

func (h *Handler) Journey(w http.ResponseWriter, r *http.Request) {
	data := PageData{
		Title:       "Journey | " + h.appName,
		AppName:     h.appName,
		Environment: h.env,
		Hero:        defaultHero(),
	}
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	if err := h.templates.Render(w, "journey.html", data); err != nil {
		h.logger.Printf("render journey: %v", err)
		http.Error(w, "internal server error", http.StatusInternalServerError)
	}
}

func (h *Handler) notFound(w http.ResponseWriter) {
	http.Error(w, "page not found", http.StatusNotFound)
}
