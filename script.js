// 1. Оживляємо КАТАЛОГ (плавна прокрутка до секції каталогу)
const catalogBtn = document.getElementById('catalog-trigger');
const catalogSection = document.getElementById('catalog-section');

catalogBtn.addEventListener('click', () => {
    catalogSection.scrollIntoView({ behavior: 'smooth' });
    console.log('Перехід до каталогу');
});

// 2. Оживляємо ПОШУК
const searchField = document.getElementById('search-field');
const searchIcon = document.getElementById('search-icon');

function doSearch() {
    const text = searchField.value;
    if (text.trim() !== "") {
        alert("Ви шукаєте: " + text);
    } else {
        alert("Спочатку введіть назву товару!");
    }
}

// Пошук по кліку на лупу
searchIcon.addEventListener('click', doSearch);

// Пошук по натисканню Enter
searchField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        doSearch();
    }
});

// 3. Оживляємо КНОПКУ ДОДОМУ (🏠)
const homeBtn = document.getElementById('home-btn');
homeBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
