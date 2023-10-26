$(".logo").click(() => {
    window.location.href = '/';
});

var header = $('header');


$('.carousel').css("margin-top", header.height());


$('.h-login').click(function(e){
    $('.login-area').removeClass('d-none').addClass('d-flex');
    $('body').css("overflow", "hidden");
    $('.login-area').load("../pages/login.html");
});

const btnPrev = $('.carousel-control-prev').innerWidth();
const btnNext = $('.carousel-control-next').innerWidth();

$('.carousel-control-prev').css({
    "left": (btnPrev / 2) * -1
});

$('.carousel-control-next').css({
    "right": (btnPrev / 2) * -1
});