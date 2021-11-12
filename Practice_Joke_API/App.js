/*Here is an API that returns a random joke. Call this API and display the joke on the click of a button. Also Disable the button when it is clicked more than 5 times.
https://api.chucknorris.io/jokes/random */

const btnApi =  document.querySelector("#call");
const ansDiv = document.querySelector("#ans");


btnApi.addEventListener("click", clickHandler)

var count=0;
function clickHandler(){
    count ++;
    if(count >4 ){
        btnApi.disabled = true;
    }
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => {
        ansDiv.innerText = data.value;
    })
}