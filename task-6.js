// задание 6
let randomArr = [2,7,5,80,2,45,11,97,45];
randomArr.map((elem,index,array) => {
    let isSimilar = array.includes(elem,index+1);
    if (isSimilar) {
        console.log(`в массиве елемент ${elem}  повторяется !!!`);
    }
});
let isElementRepeat =randomArr.every((_,ind,array) => { 
   let firstElement = array[0];
   return  firstElement === array[ind];
});
let conclusion = isElementRepeat ? 
    console.log(" все элементы одинаковые"):
    console.log("не все элементы одинаковые");