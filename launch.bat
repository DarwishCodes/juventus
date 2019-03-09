@echo off
title Prepare Enviroment for Web Development
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Setlocal EnableDelayedExpansion
:::::::::::::::::::::::::::::::::::::::::::f:::::::::::::::



if exist "package-lock.json" goto start


call npm init
call npm install node-sass --save-dev
call npm install autoprefixer --save-dev
call npm install concat --save-dev
call npm install npm-run-all --save-dev
call npm install postcss-cli --save-dev


    set search="test": "echo \"Error: no test specified\" && exit 1"

    set replace=    "watch:sass": "node-sass sass/main.scss css/style.css -w", ^
	"devserver": "live-server", ^
	"start": "npm-run-all --parallel devserver watch:sass", ^
	"compile:sass": "node-sass sass/main.scss css/style.comp.css", ^
	"concat:css": "concat -o css/style.concat.css css/icon-font.css css/style.comp.css", ^
	"prefix:css": "postcss --use autoprefixer -b \"last 10 versions\" css/style.concat.css -o css/style.prefix.css", ^
	"compress:css": "node-sass css/style.prefix.css css/style.css --output-style compressed", ^
	"build:css": "npm-run-all compile:sass concat:css prefix:css compress:css"

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
echo NPM moduls has been installed!
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


:exit
exit