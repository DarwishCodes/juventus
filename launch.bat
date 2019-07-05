@echo off
for %%I in (.) do set CurrDirName=%%~nxI
title %CurrDirName%
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Setlocal EnableDelayedExpansion
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

:menu
cls
echo(
echo [1] Install/Update Packages
echo [2] Launch Live Server
echo [3] Create new project
echo [9] Build project
echo(
echo(
echo(
echo [0] Exit

set /p env=Type 0 or 1 or 2 then hit enter: || set env="0"
if /I %env%==1 goto update
if /I %env%==2 goto start
if /I %env%==3 goto create
if /I %env%==9 goto build
if /I %env%==0 goto exit

goto menu


:create
cls
echo(
echo(
call npm init
:update
cls
echo(
echo(

title Installing ....
call npm install node-sass --save-dev
call npm install live-server --save-dev
call npm install autoprefixer --save-dev
call npm install concat --save-dev
call npm install npm-run-all --save-dev
call npm install postcss-cli --save-dev


    set search="test": "echo \"Error: no test specified\" && exit 1"

    set replace=    "watch:sass": "node-sass sass/main.scss css/style.css -w", ^
	"devserver": "live-server", ^
	"start": "npm-run-all --parallel devserver watch:sass", ^
	"compile:sass": "node-sass sass/main.scss css/style.comp.css", ^
	"prefix:css": "postcss --use autoprefixer -b \"last 10 versions\" css/style.comp.css -o css/style.prefix.css", ^
	"compress:css": "node-sass css/style.prefix.css css/style.css --output-style compressed", ^
	"build:css": "npm-run-all compile:sass prefix:css compress:css"

    set "textFile=package.json"

    for /f "delims=" %%i in ('type "%textFile%" ^& break ^> "%textFile%" ') do (
	
        set "line=%%i"
        setlocal enabledelayedexpansion
        >>"%textFile%" echo(!line:%search%=%replace%!
		
        endlocal
    )
call npm install


:main
cls
echo NPM moduls has been installed/updated!
echo(
set /p env=Would you like to start your WEB server live? (no): || set env="0"
if /I %env%==yes goto start
if /I %env%==y goto start
if /I %env%==no goto exit

echo(
goto exit

:start
title Live Server
cls
call npm run start
pause
exit

:build
cls
call npm run build:css

RMDIR /S /Q "src"
MKDIR "src"
MKDIR "src\css"
MKDIR "src\img"
if exist "includes\js" MKDIR "src\includes"
if exist "fonts" MKDIR "src\css\fonts"

xcopy "css\style.css" "src\css"
xcopy "img" "src\img" /E

xcopy /s "includes" "src\includes"
xcopy /s "fonts" "src\css\fonts"
xcopy "index.html" "src\"
pause
:local
cls
echo Files has been compiled!
echo(
set /p env=Would you like to open your compiled website? (yes): || set env="0"
if /I %env%==yes goto open-local
if /I %env%==y goto open-local
if /I %env%==no goto exit
if /I %env%==n goto exit

goto open-local

:open-local

start file:///%cd%/src/index.html
goto exit

:exit
exit