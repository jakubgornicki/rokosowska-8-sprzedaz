#!/bin/bash
# Setup script for rokosowska-8-sprzedaz
# Run this from inside the project folder

set -e

echo "=== Installing dependencies ==="
npm install

echo ""
echo "=== Initializing git ==="
git init
git add .
git commit -m "Initial commit: offer app for equipment sale"

echo ""
echo "=== Creating GitHub repo and pushing ==="
# Requires GitHub CLI (gh) - install from https://cli.github.com
# Then run: gh auth login
gh repo create rokosowska-8-sprzedaz --public --source=. --remote=origin --push

echo ""
echo "=== Done! ==="
echo "Repo URL: https://github.com/$(gh api user --jq .login)/rokosowska-8-sprzedaz"
echo ""
echo "Next step: Connect to Vercel at https://vercel.com/new"
echo "  1. Import from GitHub"
echo "  2. Select: rokosowska-8-sprzedaz"
echo "  3. Framework: Next.js (auto-detected)"
echo "  4. Deploy"
