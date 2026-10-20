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

Write-Host "`nExecuting: git push -u origin main..." -ForegroundColor Yellow
& $git -C $dir push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n[SUCCESS] Portfolio successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "Live Repository: https://github.com/tejas448866/$RepoName" -ForegroundColor Green
    Write-Host "Live Website URL: https://tejas448866.github.io/" -ForegroundColor Green
} else {
    Write-Host "`n[NOTE] If this repository is not created yet on GitHub:" -ForegroundColor Yellow
    Write-Host "1. Go to: https://github.com/new" -ForegroundColor White
    Write-Host "2. Repository name: $RepoName" -ForegroundColor White
    Write-Host "3. Leave 'Initialize with README' UNCHECKED" -ForegroundColor White
    Write-Host "4. Click 'Create repository'" -ForegroundColor White
    Write-Host "5. Double-click push_to_github.bat again!" -ForegroundColor White
}
