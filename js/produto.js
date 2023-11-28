$(document).ready(function () {
    $('.nome').append(`
        ${JSON.parse(localStorage.getItem('produtoSele')).name}
    `);
    $('.preço').append(`
        R$ ${JSON.parse(localStorage.getItem('produtoSele')).value}
    `);
    $('.imgPro').append(`
        <img src="${JSON.parse(localStorage.getItem('produtoSele')).src}" alt="">
    `);
});