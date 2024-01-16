# Nx17Evaluation

## Repo Log

### 2024-01-16 Add Angular App

1. Run `npm install -D @nx/angular`
2. Setup Angular App

```
nx g @nx/angular:app --name demo-ui --bundler esbuild --routing true --standalone true \
--addTailwind true --style css --linter eslint --unitTestRunner none --e2eTestRunner playwright --tags=type:app,scope:demo --ssr false --strict true --prefix demo
--directory apps --dryRun false --interactive false
```
```

### 2024-01-16 Repo Creation with create-nx-workspace cli

1. Used `npx create-nx-workspace@17.2.8 --help`

```

npx create-nx-workspace@17.2.8 --name nx-17-evaluation --interactive false --workspaceType integrated --preset=apps \
 --cli=nx --nx-cloud false --pm=npm --e2eTestRunner playwright --ssr false --nxCloud false --defaultBase=main -g

```

2. Init Git Repo (I do it via vscode, cli also possible)

```

```

```

```
