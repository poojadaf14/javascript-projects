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


 //spread
function sum1(x,y) {
    return x+y;
}
 let num = [9,8];
 console.log(sum1(...num));


//rest

function sum(...args){
// console.log(args);

    let sum = 0;
    for (const x of args) {
        sum = sum+x;
    }
    return sum;
}
console.log(sum(1,2,3,4,6,7,8,9,12,45));

//*try catch and finally*//*

try{
console.log(pooja);
} catch (err) {
console.log(err.name);
}
//or
try{
    let fname = 'pooja';
    console.log(fname + '' + lastname);
} catch(err){
    console.log(err.name, "variable are misssing");
}

//OR

try{
    let fname = 'pooja';
    console.log(fname);
} catch(err){
    console.log("variable are misssing");
} finally{
    console.log("i will run");
}

//throw

try{
    x= 10;
    if(x==10) throw "not valid"
    console.log(x);
}catch(err){
    console.log(err);
}
finally{
    console.log("i will run");
}


//event loop 

const one = () => {
    console.log("helllo i'm first one");
};

const two = () => {
    setTimeout(()=>{
        console.log("hello i'm a class monitor");
    },3000);
   
};

const three = () => {
    console.log("helllo i'm third");
};

one();
two();
three();

//promises

const mango = ()=>{
    return "i am mango";
};

const banana = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("is correct");
        }, 3000);
    });
};

const apple = ()=>{
    return "give me one doz banana";
};

const myfruit = async ()=>{
    let value = mango();
    console.log(value);

    let value1 = await banana();
    console.log(value1);

    let value2 = apple();
    console.log(value2);
};
myfruit();


