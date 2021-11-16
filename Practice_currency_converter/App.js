const usd =  document.querySelector("#usr");
const inr = document.querySelector("#inr");
const btncon =  document.querySelector("#convert");


btncon.addEventListener("click", clickHandler)


function clickHandler(){

    let value = Number(usd.value)
    fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json")
    .then(response=> response.json())
    .then(data =>{
        console.log(data.inr)
        let ct = data.usd.inr;
        inr.innerText = ct*value;
    })
}