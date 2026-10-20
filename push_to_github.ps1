param(
    [string]$RepoName = "tejas448866.github.io"
)

$git = "C:\Users\Nisarga Gowda\.gemini\antigravity-ide\scratch\mingit\cmd\git.exe"
$dir = $PSScriptRoot
if (-not $dir) { $dir = $pwd.Path }
$url = "https://github.com/tejas448866/$RepoName.git"

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " Pushing Tejas Gowda Portfolio to GitHub: $RepoName" -ForegroundColor Cyan
Write-Host " Remote: $url" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan

& $git -C $dir remote remove origin 2>$null
& $git -C $dir remote add origin $url
& $git -C $dir branch -M main

Write-Host "`nStaging all files..." -ForegroundColor Yellow
& $git -C $dir add -A
& $git -C $dir commit -m "Deploy complete cinematic portfolio to GitHub Pages" 2>$null

Write-Host "`nExecuting: git push origin main --force..." -ForegroundColor Yellow
& $git -C $dir push origin main --force

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n==================================================" -ForegroundColor Green
    Write-Host " [SUCCESS] Portfolio successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host " Live Repository: https://github.com/tejas448866/$RepoName" -ForegroundColor Green
    Write-Host " Live Website:    https://tejas448866.github.io/" -ForegroundColor Green
    Write-Host "==================================================" -ForegroundColor Green
    Write-Host "`n(Wait 30-60 seconds for GitHub to update the site, then refresh your browser!)" -ForegroundColor White
} else {
    Write-Host "`n[ERROR] Push failed with exit code $LASTEXITCODE." -ForegroundColor Red
    Write-Host "Please check that your GitHub repository exists at https://github.com/tejas448866/$RepoName" -ForegroundColor Yellow
}
