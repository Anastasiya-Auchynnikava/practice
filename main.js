(function () {
    const burger = document.querySelector('.burger-btn');
    const burgerMenu = document.querySelector('.burger-menu');
    burger .addEventListener('click', () =>{
        burger.classList.toggle('burger-btn_active');
        burgerMenu.classList.toggle('burger-menu_active');
    });
}());