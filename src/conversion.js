    export function myFunction() {
    var currency = document.getElementById("amount");
    var result = Math.random(currency);
    document.getElementById('btn-convert').innerHTML=result;
}
document.getElementById("amount").addEventListener("change", myFunction);
