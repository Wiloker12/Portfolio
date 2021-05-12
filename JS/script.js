function burgerClick(event){
    let menu = document.querySelector('nav');
    let burger = document.querySelector('.header__burger');
    menu.classList.toggle('active');
    burger.classList.toggle('active');
}