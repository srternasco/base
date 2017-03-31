# initCSS

Esta es la base de CSS para iniciar cualquier proyecto con postCSS.

Plugins:

* postcss-custom-properties
* postcss-custom-selectors
* postcss-import
* postcss-nested
* postcss-pxtorem
* postcss-reporter
* postcss-sorting
* stylelint


[Un artículo sobre la función de bash que inicia toda la magia](http://jorgeatgu.com/blog/iniciando-proyectos-desde-cero/)

### Estructura

```
/
├─ src/              # Master
│  ├─ css/           # Estilos
│  ├─ img/           # Imágenes
│  └─ js/            # JavaScript
│
├─ css/              # CSS minificado y purificado para producción
├─ js/               # JavaScript para producción
├─ img/              # Imágenes optimizadas para producción
├─ .gitignore        # Lista de archivos excluídos en Git
├─ .stylelintrc      # Linteando en modo espartano
├─ gulpfile.js       # Gulp!
└─ package.json      # Dependencias
```

### Bash

```
# Creando estructura de directorios y archivos para iniciar un proyecto desde cero
function initcss() {
  mkdir $1 &&
  cd $1 &&
  mkdir css src js img &&
  touch .gitignore &&
  echo node_modules > .gitignore &&
  curl -O "https://raw.githubusercontent.com/jorgeatgu/base/master/{.stylelintrc,package.json,gulpfile.js}" &&
  touch index.html &&
  cd src &&
  mkdir css img js &&
  cd css &&
  curl -O https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css &&
  mv normalize.css _reset.css &&
  touch _variables.css &&
  curl -O https://raw.githubusercontent.com/jorgeatgu/base/master/styles.css
  cd ../js &&
  touch index.js &&
  cd .. &&
  cd .. &&
  git init &&
  git add . &&
  git commit -m 'estructura creada' &&
  npm i &&
  git commit -m 'dependencias instaladas' &&
  npm-check -u &&
  osascript -e'
  display notification "A picar código! 🤓 ⚒" with title "InitCSS completado"'
}

# Iniciando la estructura desde un repositorio ya creado o con la carpeta ya creada
function initcss-wf() {
  mkdir css src js img &&
  touch .gitignore &&
    echo node_modules > .gitignore &&
    curl -O "https://raw.githubusercontent.com/jorgeatgu/base/master/{.stylelintrc,package.json,gulpfile.js}" &&
    touch index.html &&
    cd src &&
    mkdir css img js &&
    cd css &&
    curl -O https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css &&
    mv normalize.css _reset.css &&
    touch _variables.css &&
    curl -O https://raw.githubusercontent.com/jorgeatgu/base/master/styles.css
    cd ../js &&
    touch index.js &&
    cd .. &&
    cd .. &&
    git init &&
    git add . &&
    git commit -m 'estructura creada' &&
    npm i &&
    git commit -m 'dependencias instaladas' &&
    npm-check -u &&
    osascript -e'
    display notification "A picar código! 🤓 ⚒" with title "InitCSS completado"'
}




