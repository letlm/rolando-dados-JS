//dividir em passos menores
//tenho que rolar os dados mil vzes
//conforme for rolando os dados, vc vai armazenando o resultado em um obj
//nesse obj vai ter um contardor com o numero de vezes que caiu aquele resultado
//let contagemDadoUm = 0;
//1, 2, 3, 4, 5, 6
let countDadoUm = [0, 0, 0, 0, 0, 0]

const dadoUm = document.getElementById("dado_um");

dadoUm.addEventListener("click", () => {
    //2, 3, 4, 5, 6, 7, 8, 9,10,11,12
    countDadoUm = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < 1; i++) {
        let resultadoDado1 = Math.floor(1 + 6 * Math.random());

        if (resultadoDado1 === 1) {
            countDadoUm[0]++
        } else if (resultadoDado1 === 2) {
            countDadoUm[1]++
        } else if (resultadoDado1 === 3) {
            countDadoUm[2]++
        } else if (resultadoDado1 === 4) {
            countDadoUm[3]++
        } else if (resultadoDado1 === 5) {
            countDadoUm[4]++
        } else if (resultadoDado1 === 6) {
            countDadoUm[5]++
        }
    }

    const novaDivDadoUm = document.createElement("div");
    novaDivDadoUm.classList.add("testandoDadoUm");
    novaDivDadoUm.innerText = 
        "1: " + countDadoUm[0] +
        " 2: " + countDadoUm[1] +
        " 3: " + countDadoUm[2] +
        " 4: " + countDadoUm[3] +
        " 5: " + countDadoUm[4] +
        " 6: " + countDadoUm[5];
    dois_dados.before(novaDivDadoUm);

});
///PAR DE DADOS---------------------------------////

//2, 3, 4, 5, 6, 7, 8, 9,10,11,12
let countParDeDados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const parDados = document.getElementById("dois_dados");

parDados.addEventListener("click", () => {
    //2, 3, 4, 5, 6, 7, 8, 9,10,11,12
    countParDeDados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < 1; i++) {
        let resultadoParDeDadosUm = Math.floor(1 + 6 * Math.random());
        let resultadoParDeDadosDois = Math.floor(1 + 6 * Math.random());
        let somaDosDados = resultadoParDeDadosUm + resultadoParDeDadosDois;

        if (somaDosDados === 2) {
            countParDeDados[0]++
        } else if (somaDosDados === 3) {
            countParDeDados[1]++
        } else if (somaDosDados === 4) {
            countParDeDados[2]++
        } else if (somaDosDados === 5) {
            countParDeDados[3]++
        } else if (somaDosDados === 6) {
            countParDeDados[4]++
        } else if (somaDosDados === 7) {
            countParDeDados[5]++
        } else if (somaDosDados === 8) {
            countParDeDados[6]++
        } else if (somaDosDados === 9) {
            countParDeDados[7]++
        } else if (somaDosDados === 10) {
            countParDeDados[8]++
        } else if (somaDosDados === 11) {
            countParDeDados[9]++
        } else if (somaDosDados === 12) {
            countParDeDados[10]++
        };
    }

    const novaDivParDeDados = document.createElement("div");
    novaDivParDeDados.classList.add("testandoParDeDados");
    novaDivParDeDados.innerText = 
            "2: " + countParDeDados[0] +
            " 3: " + countParDeDados[1] +
            " 4: " + countParDeDados[2] +
            " 5: " + countParDeDados[3] +
            " 6: " + countParDeDados[4] +
            " 7: " + countParDeDados[5] +
            " 8: " + countParDeDados[6] +
            " 9: " + countParDeDados[7] +
            " 10: " + countParDeDados[8] +
            " 11: " + countParDeDados[9] +
            " 12: " + countParDeDados[10];
    rolar_dados.before(novaDivParDeDados);
});

//MIL VEZES---------------------------------------------/
//2, 3, 4, 5, 6, 7, 8, 9,10,11,12
let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const rolarDados = document.getElementById("rolar_dados");

// const body = document.querySelector("body");
// const divResultado = document.createElement("div");
// divResultado.classList.add("divResultado");
// body.appendChild(divResultado);

rolarDados.addEventListener("click", () => {
    //2, 3, 4, 5, 6, 7, 8, 9,10,11,12
    count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i <= 1000; i++) {
        let resultadoDado1 = Math.floor(1 + 6 * Math.random());
        let resultadoDado2 = Math.floor(1 + 6 * Math.random());
        let soma = resultadoDado1 + resultadoDado2;

        if (soma === 2) {
            count[0]++
        } else if (soma === 3) {
            count[1]++
        } else if (soma === 4) {
            count[2]++
        } else if (soma === 5) {
            count[3]++
        } else if (soma === 6) {
            count[4]++
        } else if (soma === 7) {
            count[5]++
        } else if (soma === 8) {
            count[6]++
        } else if (soma === 9) {
            count[7]++
        } else if (soma === 10) {
            count[8]++
        } else if (soma === 11) {
            count[9]++
        } else if (soma === 12) {
            count[10]++
        };
    }

    const novaDiv = document.createElement("div");
    novaDiv.classList.add("testando");
    novaDiv.innerText =
        "2: " + count[0] +
        " 3: " + count[1] +
        " 4: " + count[2] +
        " 5: " + count[3] +
        " 6: " + count[4] +
        " 7: " + count[5] +
        " 8: " + count[6] +
        " 9: " + count[7] +
        " 10: " + count[8] +
        " 11: " + count[9] +
        " 12: " + count[10];
    dados_grafico.before(novaDiv);


    const grafico = document.getElementById("dados_grafico");

    grafico.addEventListener("click", () => {
         console.log("body")
         const criarGrafico = document.createElement("div");
         criarGrafico.classList.add("graficoTotal");

         for (let i = 0; i < 11; i++) {
             const barras = document.createElement("div");
            
            barras.innerText = `${i + 2}`;
            barras.style.width = `${count[i]}px`;
            barras.classList.add(`barra${i + 2}`);
            criarGrafico.appendChild(barras);
            console.log(barras[i]);
        }

        grafico.after(criarGrafico);
    });

});