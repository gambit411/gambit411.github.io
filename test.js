
var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var h3 = document.querySelector("h3");
console.log(color1);
console.log(color2);
console.log(css);
    console.log(body);

var csstext = css.textContent

function getcolor() {
    body.style.background = `linear-gradient(to right, ${color1.value} 0%,${color2.value} 100%) `;
   css.textContent = csstext + h3.style.background ;
    h1.style.color = color1.value;
    
  
    h3.style.background = `linear-gradient(to right, ${color2.value} 0%,${color1.value} 100%) `;
    h3.style["-webkit-background-clip"] = "text";
    h3.style["-webkit-text-fill-color"] = "transparent" ;

    h2.style.background = `linear-gradient(to right, ${color2.value} 0%,${color1.value} 100%) `;
    h2.style["-webkit-background-clip"] = "text";
    h2.style["-webkit-text-fill-color"] = "transparent" ;


}




color1.addEventListener("input", getcolor);
color2.addEventListener("input", getcolor);