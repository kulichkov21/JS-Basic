"use strict";
//Задание 1
let tempCels = +prompt("Задайте температуру в градусах по Цельсию:");
let tempFar = (9 / 5) * tempCels + 32;
alert("Это " + tempFar + " градус(а/ов) по Фарентгейту");

//Задание 2
let name = "Василий";
let admin = name;
console.log(admin);

//Задание 3
let result1 = 10 + 10 + "10";
console.log(result1);
/*
1.10 + 10+ "10":
-Складываем 10+10 - получается 20
-К 20 прибавляется строка "10", получается неявное преобразование к строковому формату
-Выводим в консоль значение переменной
*/
let result2 = 10 + "10" + 10;
console.log(result2);
/*
2. 10 + "10" + 10
-К числу 10 прибавляется строка "10", происходит неявное преобразование
-К строке 1010 прибавляется число 10, происходит неявное преобразование
-Результат выводится в консоль
 */
let result3 = 10 + 10 + +"10";
console.log(result3);
/*
3. 10 + 10 + +"10"
-К числу 10 прибавляется число 10
-К числу 20 прибавляется преобразованная в число строка "10", результат = 30
-Значение выводится в консоль
 */
let result4 = 10 / -"";
console.log(result4);
/*
4. 10 / -""
-Число 10 делится на отрицательное число, полученное из пустой строки
-Из-за того,что строка пустая - 10 делится на бесконечное отрицательное число. Результат - минус бесконечность
-Выводим ответ в консоль
 */

let result5 = 10 / +"2,5";
console.log (result5);
/*
5. 10 / +"2,5"
-Преобразования строки в число не происходит, так как 2,5 - не численный формат
-При делении 10 на нечисленный формат получается Nan
-Выводим ответ в консоль
 */