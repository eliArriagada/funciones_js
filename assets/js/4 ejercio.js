var color_cambio="purple"

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
color_cambio = "orange"

        } else if (event.key === 's') {
color_cambio = "pink"
        } else if (event.key === 'd') {
color_cambio = "aqua"
        }
    })
    

    var div_a = document.getElementById("div_a");
    div_a.addEventListener("click", function (){
        pintar("div_a")
    
    });
    var div_b = document.getElementById("div_b");
    div_b.addEventListener("click", function (){
        pintar("div_b")
    
    });
    var div_c = document.getElementById("div_c");
    div_c.addEventListener("click", function (){
        pintar("div_c")
    
    });
    var div_d = document.getElementById("div_d");
    div_d.addEventListener("click", function (){
        pintar("div_d")
    
    });
pintar=(id)=>{
    var div = document.getElementById(id);
    div.style.backgroundColor =color_cambio;

}                                             