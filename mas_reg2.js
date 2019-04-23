"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_reg2.js

   Author:  Ethan Grunemeier
   Date: 4.23.19    


   Function List
   =============
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/
// runs the session values function on page load.
window.addEventListener("load", writeSessionValues);

function writeSessionValues() {
      // A copy of the code from mas_register.js, which is used to update the page with user information.
      document.getElementById("regName").textContent = sessionStorage.getItem("confName");
      document.getElementById("regGroup").textContent = sessionStorage.getItem("confGroup");
      document.getElementById("regEmail").textContent = sessionStorage.getItem("confMail");
      document.getElementById("regPhone").textContent = sessionStorage.getItem("confPhone");
      document.getElementById("regSession").textContent = sessionStorage.getItem("confSession");
      document.getElementById("regBanquet").textContent = sessionStorage.getItem("confBanquet");
      document.getElementById("regPack").textContent = sessionStorage.getItem("confPack");
      document.getElementById("regTotal").textContent = "$" + sessionStorage.getItem("confTotal");
}