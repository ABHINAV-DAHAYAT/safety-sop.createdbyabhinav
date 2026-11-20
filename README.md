# Operational Safety Broadcast

Static website. No build step.

## Edit
- `sops.js`: company name, emergency contacts, and the list of SOPs
- `audio/`: put your MP3 files here (lowercase, hyphens, no spaces)

## Test locally
Open `index.html` in a browser. If audio will not load, run `python3 -m http.server` in this folder and open http://localhost:8000.

## Publish on GitHub Pages
1. Create a new Public repository.
2. Upload everything in this folder (including `audio/` and the hidden `.nojekyll` file).
3. Settings > Pages > Deploy from a branch > main > / (root) > Save.
4. Visit https://YOUR-USERNAME.github.io/REPO-NAME/ after 1-2 minutes.
