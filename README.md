# Issue36860

Reproduction for https://github.com/angular/angular/issues/36860

Do:

```shell script
npm ci
ng run issue36860:server:production
node --inspect-brk dist/issue36860/server/main.js
```

1. Open node debugger in chrome
2. Start flame chart profiler
3. Open http://localhost:4000
4. Inspect profile

## Created with

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

```shell script
npm i -g @angular/cli@9;
ng new issue36860;
cd issue36860;
ng add @nguniversal/express-engine;
```
