let boxes = document.querySelectorAll("span");
for (let i = 0, len = boxes.length; i < len; i++) {
    boxes[i].addEventListener("mouseover", Enlarge, true);
    boxes[i].addEventListener("mouseout", Shrink, true);
}

function Enlarge() {
   this.style.backgroundSize = "100% 100%";


}

function Shrink() {
    this.style.backgroundSize = "0px 0%";

 }

 function mouseOver() {
    document.getElementById("demo").style.color = "green";
  }
  
  function mouseOut() {
    document.getElementById("demo").style.color = "orangered";
  }

  function mouseGeldi1() {
   document.getElementById("baslik1").style.color = "green";
 }
 
 function mouseGitti1() {
   document.getElementById("baslik1").style.color = "orangered";
 }

 function mouseGeldi2() {
   document.getElementById("baslik2").style.color = "green";
 }
 
 function mouseGitti2() {
   document.getElementById("baslik2").style.color = "orangered";
 }

 function mouseGeldi3() {
   document.getElementById("baslik3").style.color = "green";
 }
 
 function mouseGitti3() {
   document.getElementById("baslik3").style.color = "orangered";
 }

 function mouseGeldi4() {
   document.getElementById("baslik4").style.color = "green";
 }
 
 function mouseGitti4() {
   document.getElementById("baslik4").style.color = "orangered";
 }

 function mouseGeldiab1() {
   document.getElementById("arabaslik1").style.color = "green";
 }
 
 function mouseGittiab1() {
   document.getElementById("arabaslik1").style.color = "orangered";
 }

 function mouseGeldiab2() {
   document.getElementById("arabaslik2").style.color = "green";
 }
 
 function mouseGittiab2() {
   document.getElementById("arabaslik2").style.color = "orangered";
 }

 function bigImg(x) {
   x.style.width = "170px";
 }
 
 function normalImg(x) {

   x.style.width = "130px";
 }