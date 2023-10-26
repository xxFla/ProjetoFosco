// $(document).ready(() => {
//     $('main').append('<div class="container d-flex flex-wrap align-items-center justify-content-around"></div>');
// });

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
        // console.log(element)
        $('.container').append(`
            <div class="box-main d-flex flex-column align-items-center justify-content-around">
                <figure class="text-center m-0">
                    <img src="${element.dir}" alt="imgproduct">
                    <figcaption class="fs-5">${element.name}</figcaption>
                </figure>
                <div class="box-price d-flex align-items-center justify-content-around">
                    <p class="m-0"><strong>${element.value}</strong></p>
                    <button class="border-0">COMPRAR</button>
                </div>
            </div>
        `);
    });
});