
// Get all the list items
const listItems = document.querySelectorAll('.sf-patient-exp-list li');
let currentIndex = 0;
function showNextItem() {
listItems[currentIndex].classList.remove('active');
currentIndex = (currentIndex + 1) % listItems.length;
listItems[currentIndex].classList.add('active');
}
// Show the first item initially
listItems[currentIndex].classList.add('active');
// Set interval to show next item every 3 seconds
setInterval(showNextItem, 5000);



// <!-- Add this script at the end of the body tag -->

let currentIndexForArticle = 0;
const articles = document.querySelectorAll('.aon-article-list-inner');

function showNextArticle() {
articles[currentIndexForArticle].style.display = 'none';
currentIndexForArticle = (currentIndexForArticle + 1) % articles.length;
articles[currentIndexForArticle].style.display = 'block';
}

function startCarousel() {
showNextArticle();
setInterval(showNextArticle, 3000); // Change article every 3 seconds
}

startCarousel();





jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 3000,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
});