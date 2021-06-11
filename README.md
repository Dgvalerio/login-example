# login
Repositório contendo exemplos de design para telas de login.

**Dica:** Para usar o _eslint no terminal_ utilize `yarn eslint . --ext .js,.ts,.jsx,.tsx`

### Geração
```bash
yarn create next-app login
del styles\globals.css
del styles\Home.module.css
rmdir styles
del public\favicon.ico
del public\vercel.svg
del pages\api\hello.js
rmdir pages\api

yarn add typescript @types/react @types/node -D

ren pages\_app.js _app.tsx
ren pages\index.js index.tsx

yarn add eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-import-helpers @types/styled-components -D
echo // > .eslintignore
echo // > prettier.config.js
echo // > .editorconfig
yarn eslint --init

del package-lock.json
yarn


yarn add styled-components reactotron-react-js
mkdir src\config
echo // > src\config\ReactotronConfig.ts

echo // > babel.config.js
echo // > pages\_document.tsx

mkdir src
mkdir src\styles
echo // > src\styles\global.ts
echo // > src\styles\theme.ts
echo // > src\styles\styled.d.ts
```
