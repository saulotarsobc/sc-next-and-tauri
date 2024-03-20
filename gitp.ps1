Set-ExecutionPolicy Bypass -Scope Process -Force

param([string]$1)

git add --all
git commit -m ":fire:$1"
git push

