$('header').load("../pages/header.html");

window.onload = () => {
    $('main').css("margin-top", $('header').height());
}

$('.h-login, .logo').ready(function () {
    $(".logo").click(() => {
        window.location.href = '/';
    });

    $('.h-login').click(function (e) {
        $('.login-area').removeClass('d-none').addClass('d-flex');
        $('body').css("overflow", "hidden");
        $('.login-area').load("../pages/login.html");
    });
});