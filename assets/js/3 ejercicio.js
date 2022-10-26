ele = document.getElementById("ele1")

pintar = (color)=> {
    ele.style.backgroundColor = color

}
ele.addEventListener("click", function (){
    pintar('yellow')

});
pintar('green')