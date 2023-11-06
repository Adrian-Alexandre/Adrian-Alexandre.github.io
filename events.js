
//Typer Animation
var texts = [
  "Front-end",
  "Unity",
];

var textIndex = 0;
var charIndex = 0;
var textElement = document.getElementById("text-animation");

function type() {
  if (charIndex < texts[textIndex].length) {
    textElement.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 50);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    textElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex++;
    if (textIndex >= texts.length) {
      textIndex = 0;
    }
    setTimeout(type, 500);
  }
}

setTimeout(type, 500);	
  

//Seletor de Idioma
var check=document.querySelector(".check");
check.addEventListener("click",idioma);

function idioma(){
  let id=check.checked;
 if(id==true){
      location.href="pt-br/index.html";
 }else{
      location.href="../index.html";
 }
}

//Seletor de portfolio
function filterPortfolio(category){
  const elements = document.querySelectorAll(".portfolio-item");

     elements.forEach((element) =>{
     element.classList.remove("show-port");
     if(category === "all" || element.classList.contains(category)){
      element.classList.add("show-port");
     }
  });

}

