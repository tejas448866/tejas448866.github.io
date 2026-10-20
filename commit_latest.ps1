$git = "C:\Users\Nisarga Gowda\.gemini\antigravity-ide\scratch\mingit\cmd\git.exe"
$dir = "C:\Users\Nisarga Gowda\.gemini\antigravity-ide\scratch\tejas-cinematic-portfolio"
& $git -C $dir add .
& $git -C $dir commit -m "Add automated push scripts and GitHub Actions deployment"
& $git -C $dir status
