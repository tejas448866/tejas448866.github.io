$git = "C:\Users\Nisarga Gowda\.gemini\antigravity-ide\scratch\mingit\cmd\git.exe"
$dir = "C:\Users\Nisarga Gowda\.gemini\antigravity-ide\scratch\tejas-cinematic-portfolio"

Write-Host "Initializing Git Repository..." -ForegroundColor Cyan
& $git -C $dir init
& $git -C $dir config user.name "Tejas Gowda"
& $git -C $dir config user.email "tejas448866@gmail.com"
& $git -C $dir branch -M main
& $git -C $dir add .
& $git -C $dir commit -m "Initial commit: Tejas Gowda Cinematic Developer Portfolio"
& $git -C $dir status
