//1. JSON => stringify , parse
const student = {
    name: 'Salid Khan',
    age: 32,
    movies: ['King Khan', 'Dhakar Mostan']
};

const studentJSON = JSON.stringify(student);

console.log(student);
console.log(studentJSON);

const studentObject = JSON.parse(studentJSON);
console.log(studentObject);

// 2.fetch
fetch('url')
    .then(res => res.JSON())
    .then(data => console.log(data));



// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for 
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// loop on an object using for in
const products =[
    {name: 'laptop', price:3200, brand:'lenevo', color:'silver'},
    {name: 'phone', price:7000, brand:'HTC', color:'golden'},
    {name: 'watch', price:3000, brand:'casio', color:'yellow'},
    {name: 'sunglass', price:300, brand:'Ribon', color:'black'},
    {name: 'camera', price:9000, brand:'canon', color:'gray'},
    {name: 'laptop', price:7200, brand:'hp', color:'silver'}
];
const newProduct = {name:'webcam', price:700, brand:'Lal'};
//copy products array and then add newProduct
const newProducts = [...products, newProduct];

// create a new array one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone');

