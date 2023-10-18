$(document).ready(() => {
    $('main').append('<div class="container"></div>');
});

$('.container').ready(() => {
    for (var i = 0; i < 33; i++) {
        $('.container').append(`
            <div class="box-main">
                <figure>
                    <img src="/imgs/ex-img.png" alt="img">
                    <figcaption>Descrição</figcaption>
                </figure>
                <div class="box-price">
                    <p><strong>R$ 100,00</strong></p>
                    <button>COMPRAR</button>
                </div>
            </div>
        `);
    }
});