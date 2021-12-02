const input = document.querySelector("#input")
const count = document.querySelector("#count")


input.addEventListener("input", inputHandler)

var charvalue =10;
function inputHandler(e){
    var text = e.target.value;
    ans.innerText = text;
    const len = text.length;
    console.log(len);
    count.innerText = 10-len;
    if(10-len <0){
        count.style.color = "red";
    }else{
        count.style.color = "black";
    }
}


