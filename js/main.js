document.addEventListener("DOMContentLoaded", () => {
    // Получаем все ссылки меню
    const menuLinks = document.querySelectorAll('.menu .menu__link');

    // Перебираем каждую ссылку и назначаем событие клик
    menuLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Предотвращаем стандартный переход по ссылке

            // Получаем значение href (без слэш слева)
            let targetSection = link.getAttribute('href').replace('/', '');

            // Проверяем наличие целевого элемента
            const targetElement = document.getElementById(targetSection);
            if (!targetElement) return;

            // Осуществляем плавную прокрутку к указанному элементу
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});