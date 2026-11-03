package site

import (
	"bytes"
	"fmt"
	"html/template"
	"io"
	"io/fs"
	"path"
)

type Templates struct {
	base *template.Template
}

var pageFiles = []string{
	"pages/home.html",
}

func LoadTemplates(fsys fs.FS, root string) (*Templates, error) {
	base, err := template.ParseFS(fsys, path.Join(root, "layouts/*.html"), path.Join(root, "partials/*.html"))
	if err != nil {
		return nil, fmt.Errorf("parse layouts and partials: %w", err)
	}
	for _, p := range pageFiles {
		if _, err := base.ParseFS(fsys, path.Join(root, p)); err != nil {
			return nil, fmt.Errorf("parse %s: %w", p, err)
		}
	}
	return &Templates{base: base}, nil
}

func (t *Templates) Execute(w io.Writer, name string, data any) error {
	return t.base.ExecuteTemplate(w, name, data)
}

func (t *Templates) Render(w io.Writer, name string, data any) error {
	var buf bytes.Buffer
	if err := t.Execute(&buf, name, data); err != nil {
		return err
	}
	_, err := w.Write(buf.Bytes())
	return err
}
