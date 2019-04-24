// Search Input and Search Button at the end of it 
let searchInput = document.querySelector('.search-input');
let searchButton = document.querySelector('.search-button');

// Devices slider buttons
let catalogButton = document.querySelector('.button-catalog');
// let innerPageCatalogButton = document.querySelector('.inner-page .button-catalog');  // inner-page 
let slideToggle = document.querySelectorAll('.slide-toggle');

// Services slider buttons and slides
let serviceButtons = document.querySelectorAll('.button-services');
let deliverySlide = document.querySelector('.delivery-slide');
let warrantySlide = document.querySelector('.warranty-slide');
let creditSlide = document.querySelector('.credit-slide');

//  INNER PAGE Modal list hide/show in main-header
// let innerPageCatalogModal = document.getElementById('aaaaa');


// Search Button appears when Search Input in focus
searchInput.addEventListener("focusin", ev => searchButton.classList.remove('visually-hidden'));
// Search Button disappears when Search Input out of focus
searchInput.addEventListener("focusout", ev => searchButton.classList.add('visually-hidden'));

// Modal list hide/show in main-header
catalogButton.addEventListener('click', function() {
    let catalogModal = document.querySelector('.catalog-modal-list');
    catalogModal.classList.toggle('visually-hidden');

    let header = document.querySelector('.main-header');
    if (catalogModal.classList.contains('visually-hidden')) {
        header.style.paddingBottom = '160px';
        header.style.zIndex = 0;
    }
    else {
        header.style.paddingBottom = 0;
        header.style.zIndex = 2;
    }
});

// Devices slides changing manually
slideToggle.forEach(btn => btn.addEventListener('click', ev => {
    let slide1 = document.querySelector('.slide1');
    let slide2 = document.querySelector('.slide2');
    let slide3 = document.querySelector('.slide3');

    // Variable for Inner circles in circles for showing current slide
    let innerCircles = document.querySelectorAll('.inner-circle');
          
    // If 1st circle clicked
    if (ev.target.classList.contains('slide-toggle-1')) {
        slide1.classList.remove('visually-hidden');
        slide2.classList.add('visually-hidden');
        slide3.classList.add('visually-hidden');

        innerCircles[0].classList.remove('visually-hidden');
        innerCircles[1].classList.add('visually-hidden');
        innerCircles[2].classList.add('visually-hidden');
    }

    // If 2nd circle clicked
    if (ev.target.classList.contains('slide-toggle-2')) {
        slide2.classList.remove('visually-hidden');
        slide1.classList.add('visually-hidden');
        slide3.classList.add('visually-hidden');

        innerCircles[1].classList.remove('visually-hidden');
        innerCircles[0].classList.add('visually-hidden');
        innerCircles[2].classList.add('visually-hidden');
    }

    // If 3rd circle clicked
    if (ev.target.classList.contains('slide-toggle-3')) {
        slide3.classList.remove('visually-hidden');
        slide1.classList.add('visually-hidden');
        slide2.classList.add('visually-hidden');

        innerCircles[2].classList.remove('visually-hidden');
        innerCircles[0].classList.add('visually-hidden');
        innerCircles[1].classList.add('visually-hidden');
    }
}));

// Changing slides in Services section
// When Delivery button clicked
serviceButtons[0].addEventListener("click", ev => {
    deliverySlide.classList.remove('visually-hidden');
    warrantySlide.classList.add('visually-hidden');
    creditSlide.classList.add('visually-hidden');

    ev.target.classList.add('button-services-current');
    serviceButtons[1].classList.remove('button-services-current');
    serviceButtons[2].classList.remove('button-services-current');
});

// When Warranty button clicked
serviceButtons[1].addEventListener("click", ev => {
    warrantySlide.classList.remove('visually-hidden');
    deliverySlide.classList.add('visually-hidden');
    creditSlide.classList.add('visually-hidden');

    ev.target.classList.add('button-services-current');
    serviceButtons[0].classList.remove('button-services-current');
    serviceButtons[2].classList.remove('button-services-current');
});

// When Credit button clicked
serviceButtons[2].addEventListener("click", ev => {
    creditSlide.classList.remove('visually-hidden');
    deliverySlide.classList.add('visually-hidden');
    warrantySlide.classList.add('visually-hidden');

    ev.target.classList.add('button-services-current');
    serviceButtons[0].classList.remove('button-services-current');
    serviceButtons[1].classList.remove('button-services-current');
});






// // INNER PAGE scripts
// // Modal list hide/show in main-header
// innerPageCatalogButton.addEventListener('click', function(ev) {

//     innerPageCatalogModal.classList.toggle('visually-hidden');
    

//     let innerPageHeader = document.querySelector('.inner-page .main-header');
//     console.log(innerPageHeader);
    

//     if (innerPageCatalogModal.classList.contains('visually-hidden')) {
//         innerPageHeader.style.paddingBottom = '50px';
//         innerPageHeader.style.zIndex = 0;
//     }
//     else {
//         innerPageHeader.style.paddingBottom = 0;
//         innerPageHeader.style.zIndex = 2;
//     }
// });