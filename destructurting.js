// Array destructuring
const numbers = [ 42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];
const [x, y] = numbers;

function boxify (num1,num2){
    const nums = [num1, num2];
    return nums;
}

// const [first, second] = [90, 34];
const [first, second] = boxify(90,34);

// console.log(boxify(90, 34));

const student = {
    name: 'Salid Khan',
    age: 32,
    movies:['King Khan', 'Dhakar Mostan']
};

const [firstMovie, secondMovie] = student.movies;

// Object destructuring
// const {name, age} = {name:'alu', age:14};
const {name, age} = {id:12, name:'alu', age:14};
