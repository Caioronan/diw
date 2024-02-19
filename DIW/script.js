let k = 4;

const mostrarFilmes = (data) => {
  let j = k;
  let dadosFilmes = JSON.parse(data.target.response);

  localStorage.setItem("db_filmes", data.target.response);

  let dadosHTML = "";
  for (let i = 0; i < j; i++) {
    let filme = dadosFilmes.results[i];
    
    dadosHTML += `            <div class="card col-12  col-md-6 col-lg-3">
      <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" alt="Filme">
      <div class="card-body">
        <h5 class="card-title">${filme.title}</h5>
        <p class="card-text">${filme.overview}</p>
        <a href="detalhes.html?id=${filme.id}" class="btn btn-success">Detalhes</a>
      </div>
    </div>`;
  }
  document.getElementById("listaFilmes").innerHTML = dadosHTML;
};

const mostrarErro = (data) => {
  alert("Erro na requisição");
};

const init = () => {
  console.log("init");
  let xhr = new XMLHttpRequest();
  let url =
    "https://api.themoviedb.org/3/movie/popular?api_key=13443150666318766a15cf04e092f997&language=pt-BR";
  xhr.onload = mostrarFilmes;
  xhr.onerror = mostrarErro;
  xhr.open("GET", url, true);
  xhr.send();
};
document.body.onload = init;

function maisFilmes() {
  console.log("ok");
  k = k + 4;
  init();
}


document.getElementById("btMaisFilmes").onclick = maisFilmes;
