# Huellitas Milu

Sitio web estático de Huellitas Milu, organizado en páginas HTML y recursos separados por tipo.

## Estructura del repositorio

```text
.
├── index.html                 # Página principal
├── paginas/                   # Páginas secundarias
│   ├── casos-exito.html
│   ├── nuestros-servicios.html
│   ├── sintomas.html
│   └── solicitud-cita.html
└── assets/                    # Recursos del sitio
	 ├── css/                   # Hojas de estilo
	 ├── images/                # Imágenes, logo y favicon
	 └── js/                    # Código JavaScript
```

## Cómo proponer cambios mediante una PR

1. Actualiza tu rama local desde `main` y crea una rama para el cambio:

	```bash
	git switch main
	git pull origin main
	git switch -c tipo/descripcion-breve
	```

2. Realiza los cambios y comprueba el sitio en el navegador abriendo `index.html`.
3. Guarda los cambios en un commit y publica la rama:

	```bash
	git add .
	git commit -m "Describe el cambio"
	git push -u origin tipo/descripcion-breve
	```

4. En GitHub, abre una Pull Request (PR) desde tu rama hacia `main`. Explica qué cambió y cómo lo comprobaste, y solicita revisión.
5. Cuando la PR esté revisada y lista, se puede integrar en `main`.
