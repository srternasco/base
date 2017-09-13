# initCSS

Esta es la base de **CSS** para iniciar cualquier proyecto personal con **postCSS** y **Gulp**.

Puedes clonar el repositorio y ejecutar un `npm i` o también puedes descargarte la función `initCSS.sh` y ejecutarla en tu terminal con `bash \ruta\initCSS.sh`

# Yeoman por Viroide

Una manera mucha más fácil de instalar y adaptar todo el proyecto a tu workflow es hacerlo a través de Yeoman y una simple dependencia. Miles de gracias a [Jon](https://github.com/viroide) por el trabajo 

[Un artículo de medium explicando toda la movida](https://medium.com/@viroide/un-pequeño-regalo-para-jorge-aznar-38c558e57e95)

El funcionamiento es sencillo, debes instalar yeoman y el generador en cuestión de manera global:

```
npm i -g yo generator-jorge-atgu
```

Y después simplemente en la carpeta que quieras crear tu proyecto ejecutas:

```
yo jorge-atgu
```


### Estructura

La estructura de archivos es la que puedes ver a continuación


```bash

├─ src/              # Master
│  ├─ css/           # Estilos
│  ├─ img/           # Imágenes
│  └─ js/            # JavaScript
│
├─ css/              # CSS minificado y purificado para producción
├─ js/               # JavaScript para producción
├─ img/              # Imágenes optimizadas para producción
├─ .gitignore        # Lista de archivos excluídos en Git
├─ .stylelintignore  # Lista de archivos que no serán linteados por Stylelint
├─ .stylelintrc      # Linteando en modo espartano
├─ index.html        # HTML básico
├─ gulpfile.js       # Gulp!
└─ package.json      # Dependencias
```

### CSS

Para escribir **CSS** uso **postCSS**, los plugins que utilizo son los siguientes:

* postcss-custom-properties
* postcss-custom-selectors
* postcss-import
* postcss-nested
* postcss-pxtorem
* postcss-reporter
* postcss-sorting
* stylelint

### Gulp

La tarea por defecto compila **CSS** con **postCSS**, minifica cualquier tipo de imagen. Y lanza un servidor con **browserSync**. Siempre que se hace algún cambio en la carpeta de JS, CSS o cualquier **HTML** se refresca la página. También *linteo* los **CSS** con una serie de directrices que puedes ver comentadas en el archivo `.stylelintrc`. Antes de subir los cambios a Git con `lint-staged` compruebo que los **CSS** cumplen a rajatabla todas las reglas de **Stylelint**, en el momento que no cumpla una regla no me deja comitear a mi repositorio de Git. Un poco de rectitud no viene mal.

Para acabar y antes de subir los cambios ejecuto la tarea build. Primero comprimo los **CSS** y **JavaScript**, elimino el **CSS** que no utilizo y lo meto en línea.

[Un artículo sobre la función de bash que inicia toda la magia](http://jorgeatgu.com/blog/iniciando-proyectos-desde-cero/)
