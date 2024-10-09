let x;
document.getElementById("change").onclick = function(){
    x = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlable").innerHTML = x;
}
