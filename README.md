# Base

Repositorio base para cualquiera de mis proyectos.

Lo que hacía antes con el alias init:

```alias initcss="mkdir css src js img && touch .gitignore && echo node_modules > .gitignore && cp ~/documents/package.json ./ && cp ~/documents/gulpfile.js ./  && touch index.html && cd src && mkdir css img js && cd css && touch styles.css && cd ../js && touch index.js && cd .. && cd .. && git init && git add . && git commit -m 'estructura creada' && npm install"```

Lo voy a simplificar clonando directamente este proyecto.

```alias initproject="git clone https://github.com/jorgeatgu/base.git . && git remote rm origin && npm install && sudo ncu -u"```

### Gifs

Creando la carpeta y lanzando el alias ```initproject```
  ![](https://github.com/jorgeatgu/base/blob/master/initproject-uno.gif)

Completando la instalación de las dependencias y actualizandolas al instante.

  ![](https://github.com/jorgeatgu/base/blob/master/initproject-dos.gif)

### Dependencias

**browser-sync**
**gulp**
**gulp-autoprefixer**
**gulp-cssnano**
**gulp-imagemin**
**gulp-newer**
**gulp-notify**
**gulp-postcss**
**gulp-rename**
**gulp-sourcemaps**
**gulp-uglify**
**npm-check-updates**
**postcss-cssnext**
**postcss-import**
**postcss-inline-comment**
**postcss-nested**
**postcss-pxtorem**
**postcss-sorting**