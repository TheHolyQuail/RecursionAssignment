var input = "";
var func = "";
var result;

function start(){
  input = document.getElementById("input").value;
  if(input.length < 1){
    alert("ERROR:001:no input to perfom function on");
    return;
  }
  console.log(input);

  func = document.getElementById("select").value;
  if(func == "triangle"){
    result = triangle(parseInt(input));
  }else if(func == "fibonacci"){
    result = fibonacci(parseInt(input));
  }else if(func == "countHi"){
    result = countHi(input);
  }else if(func == "sumDigits"){
    result = sumDigits(parseInt(input));
  }else if(func == "changePi"){
     result = changePi(input);
   }else if(func == "pairStar"){
     result = pairStar(input);
   }else if(func == "countAbc"){
     result = countAbc(input);
   }else if(func == "count8"){
     result = count8(parseInt(input));
  } else {
    alert("ERROR:002:no input function");
  }

  document.getElementById("result").innerHTML = result;

}

//document.getElementById("result").innerHTML = result
function triangle(rows) {
  if(rows == 0){
    return(rows);
  }
  return(rows + triangle(rows-1));
}

function fibonacci(n) {
  if(n == 1){
    return 1;
  }
  if(n > 1){
    return(fibonacci(n - 1) + fibonacci(n - 2));
  }
  return 0;
}

function countHi(str) {
  console.log(str, str.length);

  if(str.length <= 2){
    if(str == "hi"){
      return 1;
    } else{
      return 0;
    }
  }

  if(str.substring(0, 2) == "hi"){
    return 1 + countHi(str.substring(2));
  }
  return 0 + countHi(str.substring(1));
}

function sumDigits(n) {
  if(Math.floor(n / 10) == 0){
    return n;
  }
  return (n % 10) + sumDigits(Math.floor(n / 10));
}

function changePi(str) {
  if(str.length <= 2){
    if(str == "pi"){
      return "3.14";
    } else{
      return str;
    }
  }

  if(str.substring(0, 2) == "pi"){
    return "3.14" + changePi(str.substring(2));
  }
  return str.substring(0,1) + changePi(str.substring(1));
}

function pairStar(str){
  if(str.length < 2){
    return str;
  }

  if(str.substring(0, 1) == str.substring(1, 2)){
    return str.substring(0, 1) + "*" + pairStar(str.substring(1));
  }
  return str.substring(0,1) + pairStar(str.substring(1));
}

function countAbc(str) {
  if(str.length <= 3){
    if(str == "abc" || str == "aba"){
      return 1;
    } else{
      return 0;
    }
  }

  if(str.substring(0, 3) == "abc" || str.substring(0, 3) == "aba"){
    return 1 + countAbc(str.substring(2));
  }
  return 0 + countAbc(str.substring(1));
}

function count8(n){
  if(n < 10){
    if(n == 8){
      return 1;
    }
    return 0;
  }
  if(n % 10 == 8){
    if((n / 10) % 10 == 8){
      return 2 + count8(Math.floor(n / 10));
    }
    return 1 + count8(Math.floor(n / 10));
  }
  return 0 + count8(Math.floor(n / 10));
}
