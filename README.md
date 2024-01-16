# Nx17Evaluation

## Repo Log

### 2024-01-16 Try to integrate vitest with this angular app

1. npm install @analogjs/platform --save-dev
2. nx g @analogjs/platform:setup-vitest --project main-ui (runs the angular schematic under the hood!)

### 2024-01-16 Add Angular App

1. Run `npm install -D @nx/angular`
2. Setup Angular App (evaluate flags via `nx g @nx/angular:app --help`)

```
nx g @nx/angular:app --name main-ui --bundler=esbuild --routing=true --standalone=true \
--addTailwind=true --style=css --linter=eslint --unitTestRunner=none --e2eTestRunner=playwright --tags=type:app,scope:main --ssr false --strict true --prefix main \
--directory=apps --dryRun=false --interactive=false --minimal=true
```

### 2024-01-16 Repo Creation with create-nx-workspace cli

1. Used `npx create-nx-workspace@17.2.8 --help`

```

npx create-nx-workspace@17.2.8 --name nx-17-evaluation --interactive false --workspaceType integrated --preset=apps \
 --cli=nx --nx-cloud false --pm=npm --e2eTestRunner playwright --ssr false --nxCloud false --defaultBase=main -g

```

2. Init Git Repo (I do it via vscode, cli also possible)
