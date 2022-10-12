// задание 1
let input = +prompt("input number , please");
if (input) {
    if (input % 2 == 0) {
        console.log('Число чётное');
    }
    else if (input % 2 != 0) {
        console.log('Число нечётное');
    }
}
else if (input === 0) {
    console.log('Вы ввели ноль');
}else {
    console.log('Упс, кажется, вы ошиблись'); 
}
