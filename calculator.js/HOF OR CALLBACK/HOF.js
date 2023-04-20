// HOF - means a function calling a function 
// the function which take other fun as parameter or return a function as value. the fun passed  as a parameter called is called callback.


// for each


// for Each is hof, the () => {} inside it is called callback.

// const array = ["red", "green", "blue", "apple", "mango" ,"sky"];
// array.forEach((value)=> {
// console.log(value);
// });

// // settimeout

// setTimeout(()=> {
//     console.log("hello world");
// }, 1000);


// interval

// setInterval(() => {
//    console.log("smiley");

// }, 3000);

// map()

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const numsqu = numbers.map((num) =>num*num);
// console.log(numsqu);


// filter()
// const country = ["India", "Japan", "Canada", "Finland", "Irland"];

// const num = country.filter((val) => val.includes("land"));
// console.log(num);

// sort

// const names = ["mogra", "chameli", "gulab", "rose", "lotus"];
// console.log(names.sort());
// console.log(names.reverse());


//destructuring**

//part 1*
const sci = [2.75, 3.14, 1.67, 5];
let [e, pi, grav, bodytemp] = sci;
console.log(e, pi, grav, bodytemp);

//part2*
//to skip anything put comma, or skip its position.in destructuring
const name1 = [1,2,3,4];
let[var1,var2, , var3]= name1;
console.log(var1,var2, var3);

//part3*

const name2 = [1,2,3,4,5,6,7];
let[num1, num2, ...rest] = name2;
console.log(num1, num2);
console.log(rest);

