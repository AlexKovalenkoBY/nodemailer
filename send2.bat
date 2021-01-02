@echo on
node ./From_Aris_with_Love_sendmail_.js
for /f "tokens=1,2,3,4 delims=/. " %%a in ('date /t') do set _myDate=%%a%%b%%c
rem echo %_myDate%
if not exist %_myDate% md %_myDate%
for /f "tokens=1,2,3,4 delims=: " %%t in ('time /t') do set _myTime=%%t%%u
if not exist %_myDate%\%_myTime% mkdir %_myDate%\%_myTime% 
for %%i in (8_*.txt) do move %%i %_myDate%\%_myTime% 
