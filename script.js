// Získejte referenci na element hlavičky
const header = document.querySelector('header');

// Přidejte interaktivní událost na kliknutí na hlavičku
header.addEventListener('click', function () {
    alert('Klikli jste na hlavičku!');
});

// Změňte barvu hlavičky po načtení stránky
window.addEventListener('load', function () {
    header.style.backgroundColor = 'lightblue';
});
