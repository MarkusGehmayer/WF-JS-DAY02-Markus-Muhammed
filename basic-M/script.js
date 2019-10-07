

var min = -5;
var max = 25;
var random = Math.floor(Math.random() * (+max - +min)) + +min;
console.log(random);
if (random < 10) {
    console.log("cold")
}
else {
    console.log("hot")
}


var array = [1, 7, -3, 9];
console.log(Math.max(...array));



var p = 1;
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (i = 0; i < array1.length; i += 1) {

    p *= array1[i];
}
console.log(' Product :  ' + p);


var a = [1, 7, -3, 9];
for (var max = a[0], i = 1, iLen = a.length; i < iLen; i++)
    if (a[i] > max) max = a[i];
console.log("largest number is " + max);

var v=0;
while (v<100)
  {
  v++;
  
  if (v%3==0 && v%5==0){
      console.log("fizzbuzz")
    
  }

  else if (v%3==0 && v%5!=0){
      console.log("fizz")
  }
  else if (v%5==0&& v%3!=0){
      console.log("buzz")
  }
  else{
      console.log(v)
  }
  }

