// Задание 2     
let typeCheck = typeof x ; //(для проверки замени x !!!)
switch(typeCheck) {
    case('boolean'):
    console.log('x - булево');
    break;
    case('string'):
    console.log('x - строка');
    break;
    case('number'):
    console.log('x - число');
    break;
    default : 
    console.log('Тип x не определён');
}