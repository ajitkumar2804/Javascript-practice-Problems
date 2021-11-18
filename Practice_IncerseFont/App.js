const input = document.querySelector("#input")
const inc = document.querySelector("#inc")
const dec = document.querySelector("#dec")
const ans = document.querySelector("#ans")


input.addEventListener("input", inputHandler)

function inputHandler(e){
    var word = e.target.value;
    ans.innerText = word;
}

inc.addEventListener("click", incHandler)
dec.addEventListener("click", decHandler)

function incHandler(){
    var current = parseFloat(window.getComputedStyle(ans).getPropertyValue("font-size"));

    ans.style.fontSize = `${current+2}px`;
}
function decHandler(){
    var current = parseFloat(window.getComputedStyle(ans).getPropertyValue("font-size"));

    ans.style.fontSize = `${current-2}px`;
}
