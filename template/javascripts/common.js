
$(document).ready(function(){
    $('.nav_bar .menu').click(function(){
        $('.nav_list').slideToggle()
    })
    var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
    
  })  
    
    switch(window.location.pathname)
    {
        case '/':
            $('#homeli').addClass('active')
            break;
        case 'about.html':
            $('#aboutli').addClass('active')
            break;
        case 'service.html':
            $('#serviceli').addClass('active')
            break;
        case 'review.html':
            $('#reviewli').addClass('active')
            break;
     }
})