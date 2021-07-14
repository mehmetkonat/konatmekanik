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