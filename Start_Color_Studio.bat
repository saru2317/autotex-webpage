@echo off
title Autotex 3D Color Studio Launcher
echo ========================================================
echo   AUTOTEX 3D COLOR STUDIO - LOCAL LAUNCHER
echo ========================================================
echo.
echo Starting local web server on port 8000...
cd /d %~dp0
if not exist index.html (
    if exist autotex-webpage\index.html (
        cd /d %~dp0\autotex-webpage
    )
)
start " http://localhost:8000
python -m http.server 8000
pause
