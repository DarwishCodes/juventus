@echo off
title Building The Website
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Setlocal EnableDelayedExpansion
:::::::::::::::::::::::::::::::::::::::::::f:::::::::::::::


call npm run build:css

RMDIR /S /Q "src"
MKDIR "src"
MKDIR "src\css"
MKDIR "src\img"
if exist "includes\js" MKDIR "src\includes"

xcopy "css\style.css" "src\css"
xcopy "img" "src\img" /E

xcopy /s "includes" "src\includes"
xcopy "index.html" "src\"


:main
cls
echo Files has been compiled!
echo(
set /p env=Would you like to open your compiled website? (yes): || set env="0"
if /I %env%==yes goto open
if /I %env%==y goto open
if /I %env%==no goto exit
if /I %env%==n goto exit

echo(
goto open

:open

start file:///%cd%/src/index.html
goto exit


:exit
exit