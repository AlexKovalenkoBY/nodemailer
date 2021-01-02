echo on
rem for /f "tokens=1,2,3,4 delims=/. " %%a in ('date /t') do set _date = %%a
for /f "tokens=1,2,3,4 delims=/. " %%a in ('date /t') do set _myDate=%%a%%b%%c
echo %_myDate%
if not exist %_myDate% do md %_myDate%

pause
echo %_date%
pause
rem for /f "tokens=1,2,3,4 delims=: " %%t in ('time /t') do echo %%t
set new_dir  = %_date%_%time:~0,2%_%time:~3,2%
pause

md %new_dir%
rem pause
rem for /f %%i in (8_*.txt) do move %%i new_dir
rem pause