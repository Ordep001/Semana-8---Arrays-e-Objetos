const catalogo = [
    {
        id: 1,
        titulo: "Prison Break",
        tipo: "serie",
        ano: 2005,
        generos: ["ação", "drama"],
        nota: 9.3,
        assistido: true
    },

    {
        id: 2,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["drama", "crime"],
        nota: 9.8,
        assistido: true
    },

    {
        id: 3,
        titulo: "+Velozes +Furiosos",
        tipo: "filme",
        ano: 2003,
        generos: ["ação", "corrida"],
        nota: 7.2,
        assistido: false
    },

    {
        id: 4,
        titulo: "Deadpool 2",
        tipo: "filme",
        ano: 2018,
        generos: ["ação", "comédia"],
        nota: 8.0,
        assistido: true
    },

    {
        id: 5,
        titulo: "The Walking Dead",
        tipo: "serie",
        ano: 2010,
        generos: ["terror", "drama"],
        nota: 8.1,
        assistido: false
    },

    {
        id: 6,
        titulo: "Corra!",
        tipo: "filme",
        ano: 2017,
        generos: ["terror", "suspense"],
        nota: 8.5,
        assistido: false
    }
];

console.log(catalogo);

console.log(catalogo[0].titulo);

console.log(catalogo[catalogo.length - 1].ano);

if (catalogo[2].generos[1]) {
    console.log(catalogo[2].generos[1]);
} else {
    console.log("Só possui um gênero");
}

for (let item of catalogo) {
    console.log(item.titulo);
}

let filmes = 0;
let series = 0;
let naoAssistidos = 0;
let soma = 0;

for (let item of catalogo) {

    soma += item.nota;

    if (item.tipo == "filme") {
        filmes++;
    } else {
        series++;
    }

    if (!item.assistido) {
        naoAssistidos++;
    }
}

let media = (soma / catalogo.length).toFixed(1);

let top3 = [...catalogo]
.sort((a, b) => b.nota - a.nota)
.slice(0, 3);

const output = document.getElementById("output");

output.innerHTML = `
<h2>Resumo</h2>

<p>Total: ${catalogo.length}</p>

<p>Filmes: ${filmes}</p>

<p>Séries: ${series}</p>

<p>Não assistidos: ${naoAssistidos}</p>

<p>Média: ${media}</p>

<h3>Top 3</h3>

<ol>
    <li>${top3[0].titulo} - ${top3[0].nota}</li>
    <li>${top3[1].titulo} - ${top3[1].nota}</li>
    <li>${top3[2].titulo} - ${top3[2].nota}</li>
</ol>
`;