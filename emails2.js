/*
В МАССИВЕ УКАЗАНЫ ИМЕНА ФАЙЛОВ БЕЗ РАСШИРЕНИЙ И АДРЕСА ПОЛУЧАТЕЛЕЙ ПИСЕМ
НАПРИМЕР 
ФАЙЛ 8_chehovich_903.TXT БУДЕТ ОТПРАВЛЕН "Чехович Юлия Петровна <Y.Chekhovich@belapb.by>"
СТРУКТУРУ ФАЙЛА ЛОМАТЬ НЕЛЬЗЯ 
МЕНЯТЬ  МОЖНО 

*/
const recipients = [
["c:\\temp\\vadik.txt" , "V.Balanuk@belapb.by" ],
["c:\\temp\\vadik.txt" , "a.kovalenko@belapb.by" ]
];
module.exports = { recipients }