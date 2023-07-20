/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


var themeToggle = document.getElementById('theme-toggle');
var body = document.body;

// Manejar el clic en el botón para alternar el modo
themeToggle.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
});
var items = document.querySelectorAll('.item');
var selectedValue = null;
var matchedPairs = 0;
items.forEach(function (item) {
  item.addEventListener('click', function () {
    if (item.classList.contains('active')) return;
    var value = item.getAttribute('data-value');
    if (selectedValue === null) {
      selectedValue = value;
      item.classList.add('active');
    } else {
      if (selectedValue === value) {
        items.forEach(function (item) {
          if (item.getAttribute('data-value') === value) {
            item.classList.add('active');
          }
        });
        matchedPairs++;
      } else {
        items.forEach(function (item) {
          if (item.getAttribute('data-value') === selectedValue) {
            item.classList.remove('active');
          }
        });
        item.classList.remove('active');
      }
      selectedValue = null;
    }
    if (matchedPairs === 4) {
      setTimeout(function () {
        alert('¡Has encontrado todas las parejas!');
      }, 100);
    }
  });
});
/******/ })()
;