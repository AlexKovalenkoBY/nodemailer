/*
В МАССИВЕ УКАЗАНЫ ИМЕНА ФАЙЛОВ БЕЗ РАСШИРЕНИЙ И АДРЕСА ПОЛУЧАТЕЛЕЙ ПИСЕМ
НАПРИМЕР 
ФАЙЛ 8_chehovich_903.TXT БУДЕТ ОТПРАВЛЕН "Чехович Юлия Петровна <Y.Chekhovich@belapb.by>"
СТРУКТУРУ ФАЙЛА ЛОМАТЬ НЕЛЬЗЯ 
МЕНЯТЬ  МОЖНО 

*/
const recipients = [
["8_bezverhova_104" , "M.Bezverkhova@belapb.by" ],
["8_chehovich_903" , "Чехович Юлия Петровна <Y.Chekhovich@belapb.by>"],
["8_kovalenko_604", "a.kovalenko@belapb.by"] ,
["8_Lyakina_468", "Лякина Н.А. [Проектно-процессный офис] <n.lyakina@belapb.by>"],
["8_Packevich_032", "Пацкевич Д.А. [Управление инкассации] <d.packevich@belapb.by>"],
["8_sergel_108", "Сергель Наталья Николаевна <N.Sergel@belapb.by>"],
["8_kleshhuk_124", "Клещук Н.В. [Проектно-процессный офис] <n.kleshhuk@belapb.by>"],
];
module.exports = { recipients }