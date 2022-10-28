"use strict";
window.onload = () => mainFuntion();

const randGenerator = function (min, max) {
   return Math.trunc(Math.random() * (max - min + 1) + min);
};

// Number Pad works
// if number has 4 digit then we can't enter any new value
const calGenerateBox = document.getElementById("cal-value");
calGenerateBox.value = "";
let statusValue = true,
   i = 0;
const calBtnHandler = function (number) {
   if (statusValue) {
      const calGenerateValue = document.getElementById(number).innerText;

      calGenerateBox.value += calGenerateValue;
      i++;
      if (i === 4) {
         statusValue = false;
      }
   }
   return;
};

function mainFuntion() {
   const pinGenerateBtn = document.querySelector(".generate-btn");
   const pinGenerateBox = document.querySelector("#pin-gerator-value");

   // pin Generator Button works
   pinGenerateBtn.addEventListener("click", function () {
      pinGenerateBox.value = randGenerator(1000, 9999);
   });

   // clear and back btn button works
   const calBtnBack = document.getElementById("back");
   const calBtnClear = document.getElementById("clear");
   calBtnClear.addEventListener("click", function () {
      calGenerateBox.value = "";
      statusValue = true;
   });

   // Checking pin and numberpad value
   const submitBtn = document.querySelector(".submit-btn");
   submitBtn.addEventListener("click", function () {
      const win = document.querySelector(".win");
      const loss = document.querySelector(".loss");
      if (Number(calGenerateBox.value) === Number(pinGenerateBox.value)) {
         win.classList.remove("hidden");
         loss.classList.add("hidden");
      } else {
         loss.classList.remove("hidden");
         win.classList.add("hidden");
      }
   });
}
