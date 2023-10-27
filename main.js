const typed = new Typed('.type_anim',{
    strings:['Frontent Developer','Html5', 'Css3', 'Git' ,'GitHub', 'JavaScript','VueJs'],
    typeSpeed:100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
})

const btn = document.querySelector('.nav_menu'),
    close = document.querySelector('.close_img'),
    menu = document.querySelector('.menu_content');


btn.addEventListener('click', function(){
    menu.classList.add('active')
})
close.addEventListener('click',function () {
    menu.classList.remove('active')
})





