/*Question - Create two objects with name, age, and power as Neeraj, 22, 3333. Kiran, 23, 2000. Say if every character in name is worth 30 power points.

Write a function which takes two objects and return the person with more power based 1) Their Name 2) Their Overall Power Combined with name*/
const btnCheck = document.querySelector("#btn")
const ans = document.querySelector("#ans")

const obj1 = {
    name: "neeraj",
    age : 22,
    power : 3333
}
const obj2= {
    name : "kiran",
    age: 23,
    power : 2000
}

function clickHandler(){
    powerValue = compare(obj1,obj2)
    ans.innerText = powerValue;
}

function compare(num1,num2){
    var charCount = num1.name.length;
    var power1 = charCount*num1.power;

    var charCount2 = num2.name.length;
    var power2= charCount2*num2.power;

    if(power1>power2){
        return num1.name
    }else{
        return num2.name
    }
}

btnCheck.addEventListener("click", clickHandler)