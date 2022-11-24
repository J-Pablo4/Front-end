document.addEventListener('DOMContentLoaded', () => {
    const house = document.querySelector('#house');
    const cabin = document.querySelector('#cabin');
    const villa = document.querySelector('#villa');
    const mountain_cabin = document.querySelector('#mountain_cabin');

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
        localStorage.setItem('Category', 'Mountain Cabin')
    })
});