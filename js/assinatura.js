$('.logo').click(function(e){
    window.location.href = '/';
});

$(document).ready(() => {
    $('main').append('<div class="assinatura"></div>');
});

$('.assinatura').ready(() => {
    for (var i = 0; i < 1; i++) {
        $('.assinatura').append(`
            <div class="box-main">
                <h1>Plano de assinatura</h1>
                <p>Vantagens</p>
                <p>Vantagens</p>
                <p>Vantagens</p>
                <div class="box-price">
                    <p><strong>R$ 100,00</strong></p>
                    <button>COMPRAR</button>
                </div>
            </div>
        `);
    }
});