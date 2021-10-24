const themeButton = document.querySelector('.btn-theme');
const container = document.querySelector('.container');
const movies = document.querySelector('.movies');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
let pagina = 0;
const inputBusca = document.querySelector('input');

const highlightVideo = document.querySelector('.highlight__video');
const highTitle = document.querySelector('.highlight__title');
const highInfo = document.querySelector('.highlight__info');
const highRating = document.querySelector('.highlight__rating');
const highGenres = document.querySelector('.highlight__genres');
const highLaunch = document.querySelector('.highlight__launch');
const highDescrip = document.querySelector('.highlight__description');
const highVideoLink = document.querySelector('.highlight__video-link');

const modal = document.querySelector('.modal');

const temaInicial = localStorage.getItem('tema');

themeButton.src = temaInicial === 'claro' ? './assets/light-mode.svg' : './assets/dark-mode.svg';
container.classList.add(temaInicial === 'claro' ? 'claro' : 'escuro');

btnPrev.src = temaInicial === 'claro' ? './assets/seta-esquerda-preta.svg' : './assets/seta-esquerda-branca.svg';
btnNext.src = temaInicial === 'claro' ? './assets/seta-direita-preta.svg' : './assets/seta-direita-branca.svg';
highInfo.style.setProperty('background-color', temaInicial === 'claro' ? '#FFF' : '#454545');

themeButton.addEventListener('click', () => {
    if (container.classList.contains('claro')) {
        themeButton.src = './assets/dark-mode.svg';
        container.classList.remove('claro');
        container.classList.add('escuro');
        btnPrev.src = './assets/seta-esquerda-branca.svg';
        btnNext.src = './assets/seta-direita-branca.svg';
        highInfo.style.setProperty('background-color', '#454545');
    } else if (container.classList.contains('escuro')) {
        themeButton.src = './assets/light-mode.svg';
        container.classList.remove('escuro');
        container.classList.add('claro');
        btnPrev.src = './assets/seta-esquerda-preta.svg';
        btnNext.src = './assets/seta-direita-preta.svg';
        highInfo.style.setProperty('background-color', '#FFF');
    }
    localStorage.setItem('tema', temaInicial === 'claro' ? 'escuro' : 'claro');
});

function injetarElementos(filmes) {
    console.log(filmes);
    let j = 0;
    for (let i = 0; i < filmes.length; i++) {

        const movie = document.createElement('div');
        movie.classList.add('movie');
        movie.id = filmes[j].id;

        const poster = document.createElement('img');
        poster.classList.add('poster');
        poster.src = filmes[j].poster_path;

        const movieInfo = document.createElement('div');
        movieInfo.classList.add('movie__info');

        const movieTitle = document.createElement('span');
        movieTitle.classList.add('movie__title');
        movieTitle.textContent = filmes[j].title;

        const estrela = document.createElement('img');
        estrela.classList.add('estrela');
        estrela.src = './assets/estrela.svg';

        const movieRating = document.createElement('span');
        movieRating.classList.add('movie__rating');
        movieRating.textContent = filmes[j].vote_average;

        movieRating.append(estrela);

        movieInfo.append(movieTitle, movieRating);

        movie.append(poster, movieInfo)

        movies.append(movie);

        j++;

        //a seguir, pro modal

        movie.addEventListener('click', event => {
            modal.classList.remove('hidden');
            const id = movie.id;
            console.log(modal);

            const promiseModal = fetch(`https://tmdb-proxy.cubos-academy.workers.dev/3/movie/${id}?language=pt-BR`);
            promiseModal.then(resposta => {
                const promiseBody = resposta.json();
                promiseBody.then(body => {
                    console.log(body);

                    const modalTitle = document.querySelector('.modal__title');
                    modalTitle.textContent = body.title;
                    modalTitle.addEventListener('click', event => {
                        event.stopPropagation();
                    });

                    const modalImg = document.querySelector('.modal__img');
                    modalImg.src = body.backdrop_path;
                    modalImg.addEventListener('click', event => {
                        event.stopPropagation();
                    });

                    const modalDescrip = document.querySelector('.modal__description');
                    modalDescrip.textContent = body.overview;
                    modalDescrip.addEventListener('click', event => {
                        event.stopPropagation();
                    });

                    const modalAverage = document.querySelector('.modal__average');
                    modalAverage.textContent = body.vote_average;
                    modalAverage.addEventListener('click', event => {
                        event.stopPropagation();
                    });

                    const modalGenreAverage = document.querySelector('.modal__genre-average');
                    modalGenreAverage.addEventListener('click', event => {
                        event.stopPropagation();
                    });
                    const modalGenres = document.querySelector('.modal__genres');
                    modalGenres.innerText = '';
                    for (let genre of body.genres) {
                        const modalGenre = document.createElement('div');
                        modalGenre.classList.add('modal__genre');
                        modalGenre.textContent = genre.name;
                        modalGenres.append(modalGenre);
                    }


                });
            });
        });
        modal.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }
}

function carregaPagina(pagina) {
    if (pagina === 0) {
        for (let l = 0; l < 5; l++) {
            if (movies.children[l]) {
                movies.children[l].classList.remove('hidden');
            }
        }
    } else if (pagina === 1) {
        for (let l = 5; l < 10; l++) {
            if (movies.children[l]) {
                movies.children[l].classList.remove('hidden');
            }
        }
    } else if (pagina === 2) {
        for (let l = 10; l < 15; l++) {
            if (movies.children[l]) {
                movies.children[l].classList.remove('hidden');
            }
        }
    } else {
        for (let l = 15; l < 20; l++) {
            if (movies.children[l]) {
                movies.children[l].classList.remove('hidden');
            }
        }
    }
}

function ocultaTodos() {
    for (let l = 0; l < movies.children.length; l++) {
        movies.children[l].classList.add('hidden');
    }
}

function checaPaginas() {
    let paginas = movies.children.length / 5;
    if (movies.children.length % 5 !== 0) {
        paginas = Math.trunc(paginas);
        paginas++;
    }
    return paginas;
}

function mostraBtns() {
    btnNext.classList.remove('hidden');
    btnPrev.classList.remove('hidden');
}

function iniciar() {
    mostraBtns();
    const buscaFilmes = fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false');

    buscaFilmes.then(resposta => {
        const promiseBody = resposta.json();
        promiseBody.then(body => {
            const filmes = body.results;

            injetarElementos(filmes);
            ocultaTodos();
            carregaPagina(pagina);
        });
    });
}

inputBusca.addEventListener('keydown', event => {
    if (inputBusca.value === '' && event.key === 'Enter') {
        pagina = 0;
        movies.innerText = '';
        iniciar();
    }
})

inputBusca.addEventListener('change', event => {
    mostraBtns();
    let value = event.target.value;
    // https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?language=pt-BR&include_adult=false&query=Matrix

    const promise = fetch(`https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?language=pt-BR&include_adult=false&query=${value}`);
    promise.then(resposta => {
        const promiseBody = resposta.json();
        promiseBody.then(body => {
            const qtd = body.results.length;
            if (qtd === 0) {
                console.log('Ops');
            } else if (qtd <= 5) {
                btnNext.classList.add('hidden');
                btnPrev.classList.add('hidden');

                pagina = 0;
                const filmes = body.results;
                movies.innerText = '';

                injetarElementos(filmes);
            } else if (qtd > 5) {
                let paginas = qtd / 5;
                if (qtd % 5 !== 0) {
                    paginas = Math.trunc(paginas);
                    paginas++;
                }
                pagina = 0;
                const filmes = body.results;
                movies.innerText = '';

                injetarElementos(filmes);
                ocultaTodos();
                carregaPagina(pagina);
            }
        });
    });
    inputBusca.value = '';
});

btnPrev.addEventListener('click', () => {
    let paginas = checaPaginas();
    ocultaTodos();

    if (pagina === 1) {
        pagina--;
        carregaPagina(pagina);
    } else if (pagina === 2) {
        pagina--;
        carregaPagina(pagina);
    } else if (pagina === 3) {
        pagina--;
        carregaPagina(pagina);
    } else if (pagina === 0) {
        pagina = paginas - 1;
        carregaPagina(pagina);
    }
});

btnNext.addEventListener('click', () => {
    ocultaTodos();

    let paginas = checaPaginas();

    if (pagina === paginas - 1) {
        pagina = 0;
        carregaPagina(pagina);
    } else if (pagina === 0) {
        pagina++;
        carregaPagina(pagina);
    } else if (pagina === 1) {
        pagina++;
        carregaPagina(pagina);
    } else if (pagina === 2) {
        pagina++;
        carregaPagina(pagina);
    }
});

const promiseHighGeral = fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969?language=pt-BR');
promiseHighGeral.then(resposta => {
    const promiseBody = resposta.json();
    promiseBody.then(body => {
        highlightVideo.style.setProperty('background-image', `url(${body.backdrop_path})`);
        highTitle.textContent = body.title;
        highRating.textContent = body.vote_average;

        let arrayGenres = [];
        for (genre of body.genres) {
            arrayGenres.push(genre.name);
        }
        let genres = arrayGenres.join(', ');
        highGenres.textContent = genres;

        highLaunch.textContent = body.release_date;
        highDescrip.textContent = body.overview;

        const promiseVideoLink = fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969/videos?language=pt-BR');
        promiseVideoLink.then(resposta => {
            const promiseBody = resposta.json();
            promiseBody.then(body => {
                const key = body.results[0].key;

                highVideoLink.href = `https://www.youtube.com/watch?v=${key}`;
            });
        });
    });
});

iniciar();

