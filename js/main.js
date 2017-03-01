;(function(){
    var menu =  document.body.querySelector('.nav__box'),
        btn = document.body.querySelector('.menu-drop-down'),
        enter = document.body.querySelector('.enter'),
        enterForm = document.body.querySelector('.login__form');

    btn.addEventListener('click', function(){
        menu.classList.toggle('show')
    });

    enter.addEventListener('click', function(){
        enterForm.classList.toggle('show__form')
    });
})();

