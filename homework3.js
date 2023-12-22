'number' + 3 + 3 
/* 1. 'number' + 3 - конкатенація строки та числа, отримуємо 'number3'
2. 'number3' + 3 - конкатенація строки та числа
3. Результат 'number33'
*/

null + 3 
/* 1. JS приводить значення null до числа 0
2. 0 + 3 
3. Результат 3
*/

5 && "qwerty" 
/* 1. Будь-яке ненульове число вважається істинним, тобто 5 це true
2. Будь-який непустий рядок вважається істинним, тобто qwerty це true
3. Операція логічне "і" повертає останнє обчислене істинне значення
4. Результат 'qwerty'
*/ 

+'40' + +'2' + "hillel"; 
/* 1. Унарний плюс перетворює строку '40' в число 40
2. Унарний плюс перетворює строку '2' в число 2
3. 40 + 2 дорівнює 42
4. 42 + "hillel" - конкатенація строки та числа 
5. Результат '42hillel'
*/

'10' - 5 === 6;
/* 1. Коли відбувається віднімання, то строка '10' перетворюється на число 10
2. 10 - 5 дорівнює 5
3. === є оператором строгоє рівності, що порявнює не тільки значення, а і тип
4. 5 та 6 є однаковими за типом (число), але не є однаковими за значенням
5. Результат false
*/

true + false
/* 1. JS приводить значення true до числа 1
2. JS приводить значення false до числа 0
3. 1 + 0 дорівнює 1
4. Результат 1
*/

'4px' - 3
/* 1. Коли відбувається віднімання, то строка '4px' має перетворитись на число, але із-за нечислових символів повертається NaN
2. NaN - 3
3. Якщо один з операндів є NaN, результат також буде NaN
4. Результат NaN
*/

'4' - 3
/* 1. Коли відбувається віднімання, то строка '4' перетворюється на число 4
2. 4 - 3 длрівнює 1
3. Результат 1
*/

'6' + 3 ** 0;
/* 1. Операція зведення в ступінь має вищий пріорітет, тому виконується 3 ** 0 дорівнює 1
2. '6' + 1 - конкатенація строки та числа
3. Результат '61'
*/

12 / '6'
/* 1. При виконанні ділення, JS спробує конвертувати строку на число, тобто строка '6' стає числом 6
2. 12 / 6 дорівнює 2
3. Результат 2
*/

'10' + (5 === 6);
/* 1. Першим виконується 5 === 6, бо в дужках. === є оператором строгої рівності, що порівнює не тільки значення, а і тип. 
5 та 6 є однаковими за типом (число), але не є однаковими за значенням, тому результат false
2. '10' + false - під час конкатенації булеве значення перетворюється на рядок
3. Результат '10false'
*/

null == ''
/* 1. Оскількі так історично склалося, що null може бути рівним тільки null або undefined, то все інше буде повертати false
2. Результат false
*/

3 ** (9 / 3);
/* 1. Першою виконується операція в дужках 9 / 3 дорівнює 3
2. 3 ** 3 - це 3 * 3 * 3 дорівнює 27
3. Результат 27
*/

!!'false' == !!'true'
/* 1. Непустий рядок при приведенні типів дорівнює true. Отримуємо !!true == !!true
2. Оператор ! інвертує булеве значення. !! інвертує туди і назад (або двічі). Отримуємо true == true
3. Результат true
*/

0 || '0' && 1
/* 1. 0 || '0' - при приведенні типів отримуємо false || true, бо 0 приводиться до false, а непустий рядок до true
2. Оператор логічне "або" ||  повертає перший істинний операнд, тобто '0'
3. '0' && 1 - при приведенні типів отримуємо true && true, бо непустий рядок та ненульове число приводяться до true
4. Оператор логічне "і" && повертає останнє обчислене істинне значення
5. Результат 1
*/

(+null == false) < 1
/* 1. Першою виконується операція в дужках
2. Унарний плюс приводить null до числа 0
3. false приводиться до 0
4. 0 == 0 дорівнює true
5. true < 1 можна також привести як 1 < 1
6. 1 < 1 дорівнює false
7. Результат false
*/

false && true || true
/* 1. false && true - логічне "і" поверне false, бо не всі операнди істинні
2. false || true - логічне "або" поверне true, бо хоча б один операнд має бути істинним
3. Результат true
*/

false && (false || true)
/* 1. Першою виконується операція в дужках, false || true - логічне "або" поверне true, бо хоча б один операнд має бути істинним
2. false && true - логічне "і" поверне false, бо не всі операнди істинні
3. Результат false
*/

(+null == false) < 1 ** 5
/* 1. Першою виконується операція в дужках
2. Унарний плюс приводить null до числа 0
3. false приводиться до 0
4. 0 == 0 дорівнює true
5. Далі по пріорітету виконується 1 ** 5, тобто 1*1*1*1*1, що дорівнює 1
6. true < 1 можна також привести як 1 < 1
7. 1 < 1 дорівнює false
8. Результат false
*/