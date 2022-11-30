document.addEventListener('DOMContentLoaded', () => {
    const house = document.querySelector('#house');
    const cabin = document.querySelector('#cabin');
    const villa = document.querySelector('#villa');
    const mountain_cabin = document.querySelector('#mountain_cabin');
    const apartment = document.querySelector('#apartment');
    const apartment_hotel = document.querySelector('#apartment_hotel');

    house.addEventListener('click', () => {
        localStorage.setItem('Category', 'House');
    });

    cabin.addEventListener('click', () => {
        localStorage.setItem('Category', 'Cabin');
    });

    villa.addEventListener('click', () => {
        localStorage.setItem('Category', 'Villa');
    });

    mountain_cabin.addEventListener('click', () => {
        localStorage.setItem('Category', 'Mountain Cabin');
    });

    apartment.addEventListener('click', () => {
        localStorage.setItem('Category', 'Apartment');
    });

    apartment_hotel.addEventListener('click', () => {
        localStorage.setItem('Category', 'Apartment Hotel');
    });
});