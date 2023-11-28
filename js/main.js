$('.container').ready(() => {
    // 34.125.79.18
    axios.get("http://192.168.100.21:5501/data/mainbase64.json").then((result) => {
        // console.log(localStorage.getItem("flores"));
        // console.log(result);
        if (localStorage.getItem("flores") == null) {
            localStorage.setItem("flores", JSON.stringify(result.data));
        } else {
            new Promise(() => {
                localStorage.removeItem("flores");
                new Promise(() => {
                    localStorage.setItem("flores", JSON.stringify(result.data));
                });
            });
        }
        var count = 1;
        result.data.forEach(element => {
            $('.container').append(`
                <div class="box-main d-flex flex-column align-items-center justify-content-around">
                    <figure class="text-center m-0">
                        <img src="${element.src}" alt="imgproduct">
                        <figcaption class="fs-5">${element.name}</figcaption>
                    </figure>
                    <div class="box-price d-flex align-items-center justify-content-around">
                        <p class="m-0"><strong>R$ ${element.value}</strong></p>
                        <button id="${element.id}" class="border-0">COMPRAR</button>
                    </div>
                </div>
            `);
            if (count == result.data.length) {
                $('.box-price button').click(function(e){
                    // console.log(e.target.id);
                    // console.log(JSON.parse(localStorage.getItem("flores"))[e.target.id]);
                    localStorage.setItem("produtoSele", JSON.stringify(JSON.parse(localStorage.getItem("flores"))[e.target.id]));
                    window.location.href = '/pages/produto.html';
                });
            }
            count++;
        });
        for (var i = 0; i < 5; i++) {
            if (i == 0) {
                $('.carousel-indicators').append(`
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" class="active" aria-current="true" aria-label="Slide ${i + 1}"></button>
                `);
                $('.carousel-inner').append(`
                    <div class="carousel-item active">
                        <img src="${result.data[Math.floor(Math.random() * result.data.length)].src}" class="w-100 object-fit-scale" alt="img">
                    </div>
                `);
            } else {
                $('.carousel-indicators').append(`
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" aria-label="Slide ${i + 1}"></button>
                `);
                $('.carousel-inner').append(`
                    <div class="carousel-item">
                        <img src="${result.data[Math.floor(Math.random() * result.data.length)].src}" class="w-100 object-fit-scale" alt="img">
                    </div>
                `);
            }
        }
    });
});