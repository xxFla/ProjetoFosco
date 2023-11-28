$('main').css("margin-top", $('header').height());
$('.box-searchcat').css("height", $('header').height());

if (sessionStorage.getItem("logedUser") != null) {
    $('.btn-login').remove();
    $('header').append(`
        <div class="area-user">
            <h3>${sessionStorage.getItem("logedUser")}</h3>
        </div>
    `);
}

$('.h-login, .logo').ready(function () {
    $(".logo").click(() => {
        window.location.href = '/';
    });

    $('.h-login').click(function (e) {
        $('.login-area').removeClass('d-none').addClass('d-flex');
        $('.login-area').load("../pages/login.html");
    });
});