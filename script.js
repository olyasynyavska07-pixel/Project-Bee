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
