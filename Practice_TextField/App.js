/*Add a text field. Insert a sentence. Now create a button. On clicking the button, highlight the word in the sentence with most number of characters.*/


const textField = document.querySelector("#text");
const btn = document.querySelector("button");
const ansDiv = document.querySelector("#ans")

btn.addEventListener("click",clickHander)


function clickHander(){
   const val =  textField.value;
   console.log(val);
}