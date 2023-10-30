$('header').load("../pages/header.html");

$(document).ready(function () {
    window.onload = () => {
        // faz o top começar na linha do header
        $('main').css("margin-top", $('header').height());
        // faz o top começar na linha do header
    }

    // faz o top começar na linha do header
    $('main').css("margin-top", $('header').height());
    // faz o top começar na linha do header

    $(".logo").click(() => {
        window.location.href = '/';
    });
    
    $('.h-login').click(function(e){
        $('.login-area').removeClass('d-none').addClass('d-flex');
        $('body').css("overflow", "hidden");
        $('.login-area').load("../pages/login.html");
    });
});