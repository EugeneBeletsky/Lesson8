// //1. Замыканием сделайте функцию, которая считает и выводит количество своих вызовов.

function numberOfCalls(){
    let counter =1;
    function getCount(){
        console.log(counter);
        return counter++;
    }
    return getCount;
    
}
let number = numberOfCalls();       //здесь происходит замыкание
number();                           //вызываем number через numberOfCalls
number();
number();
number();

// 2. Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, 
// чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка.
//  Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.

function randomNumbers(){
    let arr=[];
    return function getRandomNumer(){
        let randomNumber = Math.floor(Math.random()*(100-1+1))+1;
        if(!arr.includes(randomNumber)){
            arr.push(randomNumber);
        }
        if(arr.length<100){                         //возможно надо закоментить, т.к по условию КАЖДЫЙ вызов функции 
            getRandomNumer();                       //будет генерировать число от 0 до 100,а не весь массив
        }
        return arr;
    }

}
let number = randomNumbers();
console.log(number());


// 3. Дан массив с числами [1, -2, 3, 0, 4, -5, 6, -11]. Оставьте в нем только положительные числа. 
// Затем извлеките квадратный корень и этих чисел

let arr3=[1,-2,3,0,4,-5,6,-11];
console.log(arr3);
let arr31=arr3.filter(Number=> Number>0);
console.log(arr31);
let arr32= arr31.map(Math.sqrt);
console.log(arr32);



// 4. Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.

let arr4=[54,21,32,76,43,98,9,7];
function inputNumbers(arr){
    console.log(arr[0]);
    arr.shift();
    if(arr.length>0){
        inputNumbers(arr);
    }
}
inputNumbers(arr4);


// 5. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры.
//  И так, пока сумма не станет однозначным числом (9 и менее). Использовать рекурсию.
// Максимум 9

function addition(number){
    let sum = number.toString().split("").reduce((acc,next)=>{
        return +acc + +next;
    });
    if(sum>9){
        return addition(sum);
    }
    return sum;
}
console.log(addition(3456789));

