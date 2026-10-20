@echo off
title Push Tejas Gowda Portfolio to GitHub
echo ==================================================
echo  Pushing Tejas Gowda Portfolio to GitHub
echo ==================================================
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0push_to_github.ps1"
echo.
pause
