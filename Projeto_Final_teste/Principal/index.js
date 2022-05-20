//API CRIANDO CARDS

// async function obter() {
//     const url =`https://randomuser.me/api/?results=5`;
//     fetch(url).then((res) => { 
//          res.json().then((data) => desenhar(data));
//     });
// }

// function desenhar(data){
//     const card = document.getElementById("card");

//     data.results.forEach((pessoa) => {
//         const item = document.createElement("div");
//         item.innerHTML = `<div class="card" style 18rem>
        
//         <img src="${pessoa.picture.large}" class="card-img-top" alt="..."/>
//         <div class="card-body">
//             <h5 class="card-title">${pessoa.name.first} ${pessoa.name.last}</h5>
//             <p class="card-text"> ${pessoa.location.timezone.description}</p>
//             </div>
//             <a href= "/cliente.html?id=${pessoa.id.value}" class="bnt bnt-primary botaoCor">Detalhes</a>
//             </div>`;
//             card.appendChild(item);
//     });
// }
//          obter();


//API ULTILIZANDO OS CARDS DO BOOTSTRAP CARDS

window.onload = function() {
    fetch("https://randomuser.me/api/?results=5").then(resultado => {
       return resultado.json()
   }).then(response => {
       for (i = 0; i < 5; i++) {
           //console.log(response)
           document.getElementById("foto" + i).setAttribute("src", response.results[i].picture.large);
           document.getElementById("nome" + i).innerHTML = response.results[i].name.first + " " + response.results[i].name.last;
           document.getElementById("localizacao" + i).innerHTML = response.results[i].location.timezone.description;
        //    let endereco =  response.results[i].location.city + ", " + response.results[i].location.country;
        //    document.getElementById("localizacao" + i).innerHTML = endereco
       }
   })
}

//DARK MODE
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  // FIM DARK MODE