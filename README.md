# MO-211 Excel Expert Study Web

Interactive study site for the **Microsoft Office Specialist (MOS) Excel Expert – MO-211 (Microsoft 365 Apps)** exam: lessons, hands-on practice, progress tracking, and mock quizzes.

**Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Zustand, Lucide.

## Run locally (Windows)

1) Install Node.js (LTS) so `node` + `npm` are available.

2) Install deps:

```powershell
cd PATH
npm install
```

3) Start dev server:

```powershell
npm run dev
```

4) Open:
- `http://localhost:3000`

## Scripts

| Command        | Description        |
|----------------|--------------------|
| `npm run dev`  | Development server |
| `npm run build`| Production build     |
| `npm run start`| Run production build |
| `npm run lint` | ESLint               |

The GitHub Actions workflow uses **Node.js 24** and current action versions to match GitHub’s [Node 20 deprecation](https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/) on `ubuntu-latest`.

## License

Proprietary — [all rights reserved](./LICENSE). Replace the copyright name in `LICENSE` if you publish under a different person or organization.

## GitHub

Add a remote and push after `git init` (use the `.gitignore` in this repo so `node_modules` and `.next` are not committed).

### GitHub Pages (why you might only see README)

GitHub Pages serves **static files** (HTML/CSS/JS). It does **not** run `next dev` or `next start`. If Pages is set to “Deploy from branch” and the branch only has source code (no built site), there is often **no `index.html`**, so GitHub shows the **repository view** with **README** — not your app.

This project is configured for a **static export** (`output: 'export'` in `next.config.mjs`) and includes a workflow that uploads the `out/` folder.

1. Push the repo (including `.github/workflows/deploy-github-pages.yml`).
2. On GitHub: **Settings → Pages → Build and deployment**.
3. Under **Source**, choose **GitHub Actions** (not “Deploy from a branch” unless you know you are serving a prebuilt `out/` folder).
4. Open the workflow run under **Actions**; when it succeeds, your site URL is shown (often `https://YOUR_USERNAME.github.io/REPO_NAME/`).

**Important:** For a normal project repo, the site lives under a **subpath** (`/REPO_NAME/`). The workflow sets `NEXT_PUBLIC_BASE_PATH` automatically so assets and links work. Use the URL GitHub shows (include the repo name in the path).

**User site exception:** If your repository is named `YOUR_USERNAME.github.io` and the site is at `https://YOUR_USERNAME.github.io/` with **no** subpath, do **not** set `NEXT_PUBLIC_BASE_PATH`. Adjust the workflow env for that case or build locally with an empty base path.

### Manual static build (check before deploying)

```powershell
# Replace my-repo with your GitHub repo name if testing a project site:
$env:NEXT_PUBLIC_BASE_PATH="/my-repo"
npm run build
```

The static site is in the `out/` folder. For Pages “from branch,” you would need to commit `out/` contents to the publishing branch (the workflow avoids that by using Actions artifacts).

