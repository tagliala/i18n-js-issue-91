# Reproducible test case for fnando/i18n#91

The regression was introduced between 4.4.0 and 4.4.1

### How to reproduce

```
npm install --quiet && npx -q webpack && node dist/main.js
```

### Expected output

```
Hello World
```

### Actual output

```
TypeError: r(...).I18n is not a constructor
    at ./dist/main.js:1:71183
    at ./dist/main.js:1:71267
    at Object.<anonymous> (./dist/main.js:1:71271)
    at Module._compile (node:internal/modules/cjs/loader:1198:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1252:10)
    at Module.load (node:internal/modules/cjs/loader:1076:32)
    at Function.Module._load (node:internal/modules/cjs/loader:911:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:22:47
```
