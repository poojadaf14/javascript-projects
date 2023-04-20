//  let myheroes = ["spiderman", "thor"];

// function URL(url, domain){
//     let con = 'https://';
//     let result = con + url + domain;
//     return result;
// }

// let site = URL('ineuron', '.ai');
// console.log(site);



// function sum(arr){
//  let sum = 0;
//   for(let i = 0; i < arr.length; i++){
//    sum = sum + arr[i];
//   }
//   return sum;
// }

// let sumarray = [1,2,3,4,5,6,7];
// let arrayresult = sum(sumarray);
// console.log(arrayresult);


// function pooja(){
//     let sum = 0;
//     for(let i = 0; i< arguments.length; i++){
// sum = sum + arguments[i];
//     }
//     return sum;
// }

// console.log(pooja(23,33,2,4,6,7,8,9));



// arrow function

//  let me = (var1, var2) => {
//     console.log('I am a student', var1, var2);
//  };

//  me(1,2);



//  Object

// let username = {
//     firstname:'pooja',
//     lastname: 'daf',
//     role: 'student',
//     logincount: 25,
// }
// console.log(username);

// username.logincount = 45;
// console.log(username);


// for(let x in username){
//     console.log(username[x]);
// }


// console.log(this);


// objects

// const powers = {
//     fly: true,
//     coardinate: Math.random()+2
// }

// let obj3 = Object.create(powers);
// console.log(obj3);
// console.log(obj3.coardinate);
// console.log(Object.getPrototypeOf(obj3));  


// part 2

// const obj2 = Object.create({})
// Object.defineProperty(obj2, "book", {
// get: () => 'redbook'
// }) 

// console.log(obj2.book);
// console.log(object.getPrototypeOf(obj2));
// console.log(obj2.book);

// part 3

// const obj3 = {
//     comics: 'marvel',
//     pen: '',
//     printcomic: function(){
//         this.pen += 'redpen'
//         console.log(this);
//     }
// }
// console.log(obj3);



// *closure -hw

// functions in js and meta tags in html - hw


function sayhello(){
    console.log("hello everyone");
}

sayhello();
sayhello();

function me(a,b){
    return a+b
}

let myfunction = me(4,5);
console.log(myfunction);

function pooja(var1, var2){
   return var1-var2;
}

 let myname = pooja(10,4);
 console.log(myname);
 