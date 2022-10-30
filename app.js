"use strict";
window.onload = () => mainFuntion();

const randGenerator = function (min, max) {
   return Math.trunc(Math.random() * (max - min + 1) + min);
};

const resetStatusValue = function () {
   statusValue = true;
   i = 0;
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
      if (i >= 4) {
         statusValue = false;
      }
   }
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

   calBtnBack.addEventListener("click", function () {
      calGenerateBox.value = calGenerateBox.value.slice(0, -1);
      i--;
      statusValue = true;
      if (calGenerateBox.value === "") {
         resetStatusValue();
      }
   });

   const calBtnClear = document.getElementById("clear");
   calBtnClear.addEventListener("click", function () {
      calGenerateBox.value = "";
      resetStatusValue();
   });

   // Checking pin and numberpad value
   const submitBtn = document.querySelector(".submit-btn");
   const tryEl = document.querySelector(".action-left");
   let tryStatus = 3;

   submitBtn.addEventListener("click", function () {
      const win = document.querySelector(".win");
      const loss = document.querySelector(".loss");
      if (tryStatus) {
         tryStatus--;
         if (Number(calGenerateBox.value) === 0) {
            win.classList.add("hidden");
            loss.classList.add("hidden");
            tryStatus > 3 ? tryStatus++ : (tryStatus = 3);
         } else if (
            Number(calGenerateBox.value) === Number(pinGenerateBox.value)
         ) {
            win.classList.remove("hidden");
            loss.classList.add("hidden");
         } else {
            loss.classList.remove("hidden");
            win.classList.add("hidden");
            tryEl.innerText = `${tryStatus} try left`;
         }
      }
      tryStatus || submitBtn.setAttribute("disable", "");
      tryStatus || submitBtn.classList.add("disabled");
   });
}
