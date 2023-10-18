$(".logo").click(() => {
    window.location.href = '/';
});

var header = $('header');


$('.carousel').css("margin-top", header.height());


$('.h-login').click(function(e){
    $('.login-area').css({'display': 'flex'});
    $('body').css("overflow", "hidden");
    $('.login-area').load("../pages/login.html");
});