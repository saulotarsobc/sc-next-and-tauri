param([string]$1)

Set-ExecutionPolicy Bypass -Scope Process -Force

git add --all
git commit -m ":fire:$1"
git push

