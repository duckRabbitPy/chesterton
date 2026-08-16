# AGENTS.md

API. Nest + TypeScript. `data.json` at the repo root is the database.

## Run

Run every command from the **repo root**. `data.json` is resolved with `process.cwd()`, and Jest’s `rootDir` is `src/`. Node 18+ (see `.nvmrc`).

- `yarn start` — API on http://localhost:3000
- `yarn build` — `nest build` → `dist/`
- `yarn test` — Jest (`*.spec.ts` under `src/`)
- `yarn test:watch` — Jest in watch mode
- `yarn lint:format` — Prettier then ESLint `--fix`
- `yarn typecheck` — `tsc --noEmit`
- `yarn ci` — lint:format, typecheck, test, build (local CI)

## Rules

- Parse `data.json` with Zod once at boot. Domain types from `z.infer`.