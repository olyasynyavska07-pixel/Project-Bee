// Функція для переходів (щоб не писати всюди window.location)
function goToPage(page) {
    window.location.href = page;
}

// Чекаємо завантаження (якщо це головна сторінка з лоадером)
window.onload = function() {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => { loader.style.display = 'none'; }, 600);
        }, 1000);
    }
};

// Призначаємо дії кнопкам (переконайся, що ID співпадають)
document.addEventListener('click', function(e) {
    if (e.target.id === 'btn-catalog') {
        goToPage('catalog.html');
    }
    if (e.target.id === 'btn-home' || e.target.id === 'btn-back') {
        goToPage('index.html');
    }
});
