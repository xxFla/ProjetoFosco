// reposiciona os botões do carrossel
const btnPrev = $('.carousel-control-prev').innerWidth();
const btnNext = $('.carousel-control-next').innerWidth();

$('.carousel-control-prev').css({
    "left": (btnPrev / 2) * -1
});

$('.carousel-control-next').css({
    "right": (btnPrev / 2) * -1
});
// reposiciona os botões do carrossel