# AGENTS.md

API. Nest + TypeScript. `data.json` at the repo root is the database.

## Run

Run every command from the **repo root**. `data.json` is resolved with `process.cwd()`, and Jest’s `rootDir` is `src/`. API: Node 18+ (see `.nvmrc`). Frontend: Node 20.19+ (Vite 8).

- `yarn start` — API on http://localhost:3000
- `yarn start:web` — Vite on http://localhost:5173
- `yarn build` — `nest build` → `dist/`
- `yarn test` — Jest (`*.spec.ts` under `src/`)
- `yarn test:watch` — Jest in watch mode
- `yarn lint:format` — Prettier then ESLint `--fix`
- `yarn typecheck` — `tsc --noEmit`
- `yarn ci` — lint:format, typecheck, test, build (local CI)

## Web

Vite + React in `web/`. Requires Node 20.19+. Start the API first (`yarn start`). Copy `web/.env.example` to `web/.env` (`VITE_API_URL=http://localhost:3000`). `npm --prefix web install` uses `web/package-lock.json`.

- `yarn start:web` — Vite on http://localhost:5173 (`npm --prefix web run dev`)
- `npm --prefix web run build` — `tsc -b` then Vite production build
- `npm --prefix web run preview` — serve the production build
- `npm --prefix web run typecheck` — `tsc -b`
- `npm --prefix web run lint` — oxlint

## Rules

- Parse `data.json` with Zod once at boot. Domain types from `z.infer`.