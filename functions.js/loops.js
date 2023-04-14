
// // for
// // const  mystates = ["maharashtra", "Delhi", "Assam", 1456, "Tamil Nadu"];

// for(let i=0; i<mystates.length; i++){
//     console.log(mystates[i]);

// }



    
// // for of
// for (const x of mystates) {
//     return x;
    
// }
// console.log(x);


// // for each

//   mystates.forEach((x) => (console.log(x)));


  
// for in loop for object

const myname = {
    firstname: "pooja",
    lastname: "daf",
    email: "poojahjvhbcjkjhkv",
mobile: "xxxxxxyyy",
};

for (const x in myname) {
   console.log(myname[x]);
}

// another way of writing---


for (const x in myname) {
    console.log(`key is: ${x} and value is : ${myname[x]}`);
 }
