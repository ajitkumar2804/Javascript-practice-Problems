/*Create a webpage with a counter, + button and - button. When clicked on the + button, increment the counter by 1 and for - button, decrement the counter by 1. When the counter reaches 0, disable the - button.*/


const btnAdd = document.querySelector("#add");
const btnSub = document.querySelector("#sub");
const counter = document.querySelector("#counter");

btnAdd.addEventListener("click", addhandler)
btnSub.addEventListener("click", subHandler)

function addhandler(){
        increment(Number(counter.innerText))
}

function subHandler(){
        decrement(Number(counter.innerText))
}

function increment(num){
        btnSub.disabled = false
    counter.innerText = num + 1
}

function decrement(num){
        if(num < 1) {
                btnSub.disabled = true
            } else {
                btnSub.disabled = false
                counter.innerText = num - 1;
            }
}