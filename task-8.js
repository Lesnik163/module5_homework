// задание 8
let randomArr = new Map();
randomArr.set("Сложная тема", true)
.set({'Долго учил': 'Да'}, true)
.set("Быстро ли я разобрался?",null)
.set(12, "часов ушло на усвоение");
for (let conditions of randomArr.entries()) {
    console.log(`Ключ - ${conditions[0]}, значение - ${conditions[1]}`);
}
// в разделе 5.7 в видео девушка утверждает , что ассоциативный массив не может быть перебран методом forEach,
// я с ней не согласен вот пример:
randomArr.forEach((value,key) =>{
    console.log(`Ключ - ${key}, значение - ${value}`)
}) 