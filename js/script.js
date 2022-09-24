const showBurger = document.querySelector('.header__body');
if (showBurger){
    const headBurger = document.querySelector('.header__burger');
    const headMenu = document.querySelector('.header__menu');
    showBurger.addEventListener("click", function (e){
        document.body.classList.toggle('lock')
        showBurger.classList.toggle('active');
        headBurger.classList.toggle('active');
        headMenu.classList.toggle('active');
        
    });
}

