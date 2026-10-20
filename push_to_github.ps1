param(
    [string]$RepoName = "tejas448866.github.io"
)

$git = "C:\Users\Nisarga Gowda\.gemini\antigravity-ide\scratch\mingit\cmd\git.exe"
$dir = "C:\Users\Nisarga Gowda\.gemini\antigravity-ide\scratch\tejas-cinematic-portfolio"
$url = "https://github.com/tejas448866/$RepoName.git"

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " Pushing Tejas Gowda Portfolio to GitHub: $RepoName" -ForegroundColor Cyan
Write-Host " Remote: $url" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan

# Set remote origin
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
    Write-Host "`n[NOTE] If this is a brand new repository, you just need to create the empty repo on GitHub first!" -ForegroundColor Yellow
    Write-Host "1. Go to: https://github.com/new" -ForegroundColor White
    Write-Host "2. Repository name: $RepoName" -ForegroundColor White
    Write-Host "3. Leave 'Initialize with README' UNCHECKED" -ForegroundColor White
    Write-Host "4. Click 'Create repository'" -ForegroundColor White
    Write-Host "5. Then re-run this script!" -ForegroundColor White
}
