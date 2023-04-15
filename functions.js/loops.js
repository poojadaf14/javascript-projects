
1 // for
const  mystates = ["maharashtra", "Delhi", "Assam", 1456, "Tamil Nadu"];

for(let i=0; i<mystates.length; i++){
    console.log(mystates[i]);

}

2 //   while

let y = 0;

while(y < mystates.length){
    console.log(mystates[y]);
    y++;
}


    
3 // for of
for (const x of mystates) {
    return x;
    
}
console.log(x);


4 // for each

  mystates.forEach((x) => (console.log(x)));



5 // for in loop for object

const myname = {
    firstname: "pooja",
    lastname: "daf",
    email: "poojahjvhbcjkjhkv",
mobile: "xxxxxxyyy",
};

for (const p in myname) {
   console.log(myname[p]);
}

// another way of writing---


for (const p in myname) {
    console.log(`key is: ${p} and value is: ${myname[p]}`);
 }


6 //  do while condition

let v = 20;

do {
    console.log(v);
} while (v<10);
  