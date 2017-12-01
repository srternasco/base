#!/bin/bash

mkdir css src js img &&
curl -O "https://raw.githubusercontent.com/srternasco/base/master/{.stylelintrc,.gitignore,.stylelintignore,package.json,gulpfile.js,index.html,_variables.css,styles.css}" &&
cd src &&
mkdir css img js &&
cd .. &&
curl -O https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css &&
mv normalize.css _reset.css &&
mv _variables.css src/css/_variables.css &&
mv _reset.css src/css/_reset.css &&
mv styles.css src/css/styles.css &&
cd src/js &&
touch application.js &&
cd .. &&
cd .. &&
git init &&
git add . &&
git commit -m 'Scaffolding created' &&
echo -e 'It´s going to take some time...' &&
npm i &&
echo -e 'Script finished. Time to code! \n' &&
afplay /System/Library/Sounds/Submarine.aiff &&
say Script finished. Time to code!
