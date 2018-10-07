$(document).ready(function(){
    switch(window.location.pathname)
    {
        case '/':
            $('#homeli').addClass('active')
            break;
        case '/about.html':
            $('#aboutli').addClass('active')
            break;
        case '/service.html':
            $('#serviceli').addClass('active')
            break;
        case '/review.html':
            $('#reviewli').addClass('active')
            break;
     }
})