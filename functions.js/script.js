
function URL(url, domain){
    let con = 'https://';
    let result = con + url + domain;
    return result;
}

let site = URL('ineuron', '.ai');
console.log(site);



function sum(arr){
 let sum = 0;
  for(let i = 0; i < arr.length; i++){
   sum = sum + arr[i];
  }
  return sum;
}

let sumarray = [1,2,3,4,5,6,7];
let arrayresult = sum(sumarray);
console.log(arrayresult);