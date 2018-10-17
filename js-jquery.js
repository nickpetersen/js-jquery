// Jquery
const $navBar = $('.navbar');
const $mainNav = $("#mainNavigation");
const $navButton = $(".navbar-toggler");
const $body = $("body");
const $window = $(window);

$(function() {
  if ($body.hasClass("homepage")) {
    $navBar.addClass("fixed-top");
    $( window ).scroll(function() {
      if($(window).scrollTop() >= 100) {
        $navBar.addClass("bg-dark");
      } else {
        $navBar.removeClass("bg-dark");
      }
    });
    $navButton.on('click', function() {
      if ($(window).scrollTop() == 0) {
        $navBar.toggleClass("bg-dark");
      }
    })
  } else {
    $navBar.addClass("bg-dark");
    if ($(window).scrollTop() >= 1) {
      $navBar.addClass("fixed-top");
    } else {
      $navBar.removeClass("fixed-top");
    }
  }
});

// Javascript - Keep variables for functions unrelated to the navbar scroll effects
const navBar = document.querySelector(".navbar");
const mainNav = document.querySelector("#mainNavigation");
const navButton = document.querySelector(".navbar-toggler");
const body = document.querySelector("body");

// Nav scroll effect switched from JS to jquery
/* if (body.classList.contains("homepage")) {
   navBar.classList.add("fixed-top");
   document.addEventListener("scroll", () => {
     if (window.scrollY >= 100) {
       navBar.classList.add("bg-dark");
     } else {
       navBar.classList.remove("bg-dark");
     }
   });
   navButton.addEventListener("click", () => {
     if (window.scrollY == 0) {
       navBar.classList.toggle("bg-dark");
     }
   });
 } else {
   navBar.classList.add("bg-dark");
   document.addEventListener("scroll", () => {
     if (window.scrollY >= 1) {
      navBar.classList.add("fixed-top");
     } else {
       navBar.classList.remove("fixed-top");
     }
   });
 } */

window.addEventListener("load", () => {
  const url = new URL(window.location.href);
  const params = url.searchParams.get("r");
  if (params) {
    const recipientField = document.querySelector("#form-input-recipient");
    const recipientArray = Array.from(recipientField.children);
    recipientArray.forEach(element => {
      let fieldTitle = element.innerHTML;
      if (fieldTitle === params) {
        element.setAttribute("selected", true);
      }
    });
  }
});
