# React + Vite (GitHub Pages ready)

Vite React app configured for CI and deployment to GitHub Pages using GitHub Actions.

## Scripts
- `yarn dev` — run the dev server
- `yarn lint` — lint the project
- `yarn build` — production build
- `yarn preview` — preview the built site

## GitHub Actions CI + Pages
- Workflow: `.github/workflows/ci.yml`
- Triggers: push/pr to `main`
- Steps: checkout, Node 20 with Yarn cache, `yarn install --frozen-lockfile`, `yarn lint`, `yarn build`
- Artifacts: `dist` uploaded via `actions/upload-pages-artifact`
- Deploy: `actions/deploy-pages` runs on push (not pull requests)

## GitHub Pages setup
- Vite `base` derives from `REPOSITORY`, so Pages serves at `/<repo>/`
- After merging to `main`, ensure Settings → Pages → Source = GitHub Actions (often auto-set)
- Live URL pattern: `https://<user>.github.io/<repo>/`
- Local check before deploying: `yarn build && yarn preview --host`
