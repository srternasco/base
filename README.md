# base

Repositorio base para cualquiera de mis proyectos.

Lo que hacía antes con el alias init:

```alias initcss="mkdir css src js img && touch .gitignore && echo node_modules > .gitignore && cp ~/documents/package.json ./ && cp ~/documents/gulpfile.js ./  && touch index.html && cd src && mkdir css img js && cd css && touch styles.css && cd ../js && touch index.js && cd .. && cd .. && git init && git add . && git commit -m 'estructura creada' && npm install"```

lo voy a simplificar clonando directamente este proyecto.

```alias initproject="git clone https://github.com/jorgeatgu/base.git . && git remote rm origin && npm install"```
