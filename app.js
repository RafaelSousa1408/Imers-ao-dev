function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um pokemon</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = ""; 
    let tipagem = "";
    let ataques = "";
    let descricao = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        tipagem = dado.tipagem.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        ataques = dado.ataques.map(ataque => ataque.toLowerCase())

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tipagem.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a>${dado.titulo}</a>
                </h2>
                    <p class="tipagem">${dado.tipagem}</p>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="ataques">${dado.ataques.map(ataque => `<span class="ataque">${ataque}</span>`).join('')}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    section.innerHTML = resultados;
}