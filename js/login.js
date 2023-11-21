$(document).click(function(e){
    if (e.target.className.includes("login-area") || e.target.className.includes("exit-login") || e.target.parentElement.className.includes("exit-login")) {
        $('.login-area').empty();
        $('.login-area').removeClass('d-flex').addClass('d-none');
    }
});

$(".login-container button").click(function (e) {
    if ($("#username").val() != '' && $("#password").val() != '') {
        axios.get(`https://residencia.free.mockoapp.net/userlogin/${$("#username").val()}`).then((result) => {
            // console.log(result);
            if (result.data.pass == $("#password").val()) {
                console.log(result);
                sessionStorage.setItem("logedUser", result.data.user);
                $('.login-area').empty();
                $('.login-area').removeClass('d-flex').addClass('d-none');
                $('.btn-login').remove();
                $('header').append(`
                    <div class="area-user">
                        <h3>${result.data.user}</h3>
                    </div>
                `);
            }
        });
    }
});