const btnLike = document.querySelector("#like");
const Count = document.querySelector("#count");

btnLike.addEventListener("click", clickHandler)
let ct = 0;

function clickHandler() {
    ct++;
    showLike(ct);
}
function showLike(ct) {
    console.log(ct);
    Count.innerText = ct;
}