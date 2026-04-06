// Очікуємо повного завантаження сторінки
window.onload = function() {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            // Видаляємо елемент з DOM після завершення анімації прозорості
            setTimeout(() => { 
                loader.style.display = 'none'; 
            }, 600);
        }
    }, 1500); // Час затримки лоадера (1.5 сек)
};

// Додаємо анімації кліку для карток
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        // Змінюємо колір при натисканні
        card.style.backgroundColor = '#fff9c4';
        
        // Повертаємо назад через 200мс
        setTimeout(() => {
            card.style.backgroundColor = '#fff';
        }, 200);
    });
});
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
