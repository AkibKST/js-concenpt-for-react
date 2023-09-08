// 'almas', 5, true, {}, []
// '', 0, false, null, undefined

let myVar = 5;
if(myVar){
    myVar = myVar * 100;
}
else{
    myVar = 0;
}
let myMoney = 50;
// you check negative or falsy anything
if(!myMoney){

}

const money = 80;
let food;
if(money > 100){
    food = 'biriyaniy';
}else{
    food = 'cha-biscuits';
}

let food1 = money>100 ? 'biriyani': 'cha-biskit';
console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke':'filter-water';
console.log(drink);

// num to str
const num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);

// str to num
const input = '560';
const inputNum = +input;
console.log(inputNum);

// 
const isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('Hide User');
// isActive ? showUser():hideUser();

// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false the right side will be executed
isActive || hideUser();

// toggle
isActive = !isActive;