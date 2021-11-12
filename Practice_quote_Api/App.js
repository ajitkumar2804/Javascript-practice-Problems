
const btnApi = document.querySelector("#get")
const ansDiv = document.querySelector("#ans")

btnApi.addEventListener("click",callHandler)

function callHandler(){


    fetch("https://api.kanye.rest/")
    .then(response => response.json())
    .then(data => {
       ansDiv.innerText = data.quote; 
    })
}