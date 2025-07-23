@echo off
cd /d "%~dp0"

echo Actualizando dependencias...
call npm install

echo Iniciando proyecto...
start "" cmd /k "npm start"

echo Esperando que el servidor arranque...
timeout /t 10 > nul

echo Abriendo navegador en Vite (puerto 5173)...


start chrome http://localhost:5173


exit
