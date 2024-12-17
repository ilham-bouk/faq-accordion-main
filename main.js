let allButtons = document.querySelectorAll(".question button");
let plusimg = document.querySelectorAll(".question .plus");
let minusimg = document.querySelectorAll(".question .minus");
let allParagraphs = document.querySelectorAll(".box p");

allButtons.forEach((button) => {
  button.onclick = function () {
    plusimg.forEach((plus) => {
      if (plus.classList.contains(button.className)) {
        plus.classList.toggle("show");        
      }
    });
    minusimg.forEach((minus) => {
      if (minus.classList.contains(button.className)) {
        minus.classList.toggle("show");        
      }
    })
    allParagraphs.forEach((para) => {
      if (para.classList.contains(button.className)) {
        para.classList.toggle("show");        
      }
    })
  }
})
