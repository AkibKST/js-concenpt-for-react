// How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'Rainy';
season = 'winter';


// 6 basic condition: >, <, ===, !==, <=, >=,
// multiple conditions: &&, ||
if(fatherName === 'Arnold' || season === 'Rainy'){

}else if(fatherName === 'Arnod'){

}
else{

}

// 3. array declare
// index,
// length, push,
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

// 4. for loop
for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    // console.log(number);
}

// 5. function
function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}

const output = multiply(37, 78);
// console.log(output);

// 6. Object
// 3 ways to access property name

const student = {
    name: 'Salid Khan',
    age: 32,
    movies:['Kng Khan', 'Dhakar Mostan']
}

const myVariable = 'age';

console.log(student.age);  //direct by poperty
 console.log(student['age']); //  access via property name string
 console.log(student[myVariable]); //  access via property name in a variable