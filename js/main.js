$(document).ready(() => {
    $('main').append('<div class="container"></div>');
});

// $('.container').ready(() => {
//     for (var i = 0; i < 33; i++) {
//         $('.container').append(`
//             <div class="box-main">
//                 <figure>
//                     <img src="/imgs/ex-img.png" alt="img">
//                     <figcaption>Descrição</figcaption>
//                 </figure>
//                 <div class="box-price">
//                     <p><strong>R$ 100,00</strong></p>
//                     <button>COMPRAR</button>
//                 </div>
//             </div>
//         `);
//     }
// });

$('.container').ready(async () => {
    var lista = new Array;
    lista.push(await fetch("./lista/main.json").then(res => {
        return res.text();
    }).then(res => {
        return JSON.parse(res);
    }));
    lista[0].forEach(element => {
        console.log(element)
        $('.container').append(`
            <div class="box-main">
                <figure>
                    <img src="${element.dir}" alt="imgproduct">
                    <figcaption>${element.name}</figcaption>
                </figure>
                <div class="box-price">
                    <p><strong>${element.value}</strong></p>
                    <button>COMPRAR</button>
                </div>
            </div>
        `);
    });
});