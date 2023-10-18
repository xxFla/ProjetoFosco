$(".logo").click(() => {
    window.location.href = '/';
});

var header = $('header');

// console.log(header.height());

$('.carousel').css("margin-top", header.height());

// $(document).ready(() => {
//     $('main').html('<link rel="stylesheet" href="/css/main.css">')
//     $('main').append("<script src='/js/main.js'></script>");
// });