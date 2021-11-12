/*Create a webpage with a counter, + button and - button. When clicked on the + button, increment the counter by 1 and for - button, decrement the counter by 1. When the counter reaches 0, disable the - button.*/


const btnAdd = document.querySelector("#add");
const btnSub = document.querySelector("#sub");
const counter = document.querySelector("#counter");

btnAdd.addEventListener("click", addhandler)


function addhandler(){
        counter.innerText = Number(counter.innerText)+1;
}