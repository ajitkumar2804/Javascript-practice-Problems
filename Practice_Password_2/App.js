const inputFd = document.querySelector("#pass");
const ans = document.querySelector("#ans");


inputFd.addEventListener("input", inputHandler)

function inputHandler(e){
    let invalue = e.target.value;
    
    if(Number(invalue.length) %2 ===0){
      ans.style.color = "green";
    }else{
        ans.style.color = "red";
    }
    ans.innerText = invalue ; 
}