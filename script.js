// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function dropdownFunction() {
    var x = document.getElementById("demo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// add a click event listener to the document
document.addEventListener('click', function (event) {
    // select the navDemo element
    const x = document.getElementById('navDemo');

    // select the button element that triggers the function
    const button = document.getElementById("toggleNavigation");

    // check if the clicked element is outside of the navDemo element
    const isOutside = !x.contains(event.target);

    // check if the clicked element is the button element or its child
    const isButton = event.target === button || event.target.parentElement === button;


    // if it is, hide the navDemo element
    if (isOutside && !isButton) {
        x.className = x.className.replace(" w3-show", "");


    }


});

// add a load event listener to the window object
window.addEventListener("load", function () {
    let links = document.querySelectorAll("[id=navDemo] a");
    // loop through the links and add a click event listener to each one
    for (let link of links) {
        link.addEventListener("click", myFunction);
    }

    carousel();

    // showDivs(slideIndex);
});

var slideIndex = 1;

function plusDivs(n) {
    showDivs(slideIndex += n);
}
function currentDiv(n) {
    showDivs(slideIndex = n);
}
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
}

var myIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    if (x.length > 0) { x[myIndex - 1].style.display = "block"; }
    setTimeout(carousel, 4000); // Change image every 4 seconds
}