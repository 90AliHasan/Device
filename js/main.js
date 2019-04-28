// Search Input and Search Button at the end of it 
let searchInput = document.querySelector('.search-input');
let searchButton = document.querySelector('.search-button');
// Devices slider buttons
let catalogButton = document.querySelector('.button-catalog');
let slideToggle = document.querySelectorAll('.slide-toggle');
// Services slider buttons and slides
let serviceButtons = document.querySelectorAll('.button-services');
let deliverySlide = document.querySelector('.delivery-slide');
let warrantySlide = document.querySelector('.warranty-slide');
let creditSlide = document.querySelector('.credit-slide');
let writeUsForm = document.querySelector('.write-us-form'); 
let buttonWriteUs = document.querySelector('.button-write-us'); // Button "Напишите нам" for opening modal form
let buttonClose = document.querySelectorAll('.modal-close'); // Button for closing both modals
let map = document.querySelector('.map'); // Map image in the Contacts section

// Search Button appears when Search Input in focus
searchInput.addEventListener("focusin", ev => searchButton.classList.remove('visually-hidden'));
// Search Button disappears when Search Input out of focus
searchInput.addEventListener("focusout", ev => searchButton.classList.add('visually-hidden'));

// Modal list hide/show in main-header
catalogButton.addEventListener('click', function(ev) {
    let catalogModal = document.querySelector('.catalog-modal-list');
    let header = document.querySelector('.main-header');
    catalogModal.classList.toggle('visually-hidden'); 
    header.classList.toggle('with-modal');
});

// Devices slides changing manually
slideToggle.forEach(btn => btn.addEventListener('click', ev => {
    let slide1 = document.querySelector('.slide1');
    let slide2 = document.querySelector('.slide2');
    let slide3 = document.querySelector('.slide3');
    let innerCircles = document.querySelectorAll('.inner-circle'); // Inner circle for showing current slide

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

// Show "Write Us form" when "Напишите нам" button clicked
buttonWriteUs.addEventListener('click', ev => {
    let modalWriteUs = document.querySelector('.modal-write-us');
    modalWriteUs.classList.remove('visually-hidden');
    modalWriteUs.style.opacity = '1';
});

// Show "Modal Map" when map image is clicked
map.addEventListener('click', ev => {
    let modalMap = document.querySelector('.modal-map');
    modalMap.classList.remove('visually-hidden');
    modalMap.style.opacity = '1';
});

// Close Modals when button "x" is clicked
buttonClose.forEach(btn => btn.addEventListener('click', ev => {
    btn.closest('section').classList.add('visually-hidden');
    btn.closest('section').style.opacity = '0';
}));