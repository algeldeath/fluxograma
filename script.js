
const etapas = [
    {
        titulo: "1. Monitoramento da floresta",
        texto: "Satélites, drones e sensores fornecem imagens e dados que permitem acompanhar as condições da floresta."
    },
    {
        titulo: "2. Análise pela inteligência artificial",
        texto: "Algoritmos de IA comparam imagens e grandes conjuntos de dados para reconhecer padrões e mudanças na vegetação."
    },
    {
        titulo: "3. Detecção de ameaças",
        texto: "O sistema pode sinalizar possíveis áreas desmatadas, focos de calor e outras alterações que precisam ser verificadas."
    },
    {
        titulo: "4. Envio de alertas",
        texto: "As informações identificadas podem ser encaminhadas aos órgãos responsáveis para orientar a investigação e definir prioridades."
    },
    {
        titulo: "5. Ação humana",
        texto: "Profissionais verificam as informações, investigam as ocorrências e organizam ações de fiscalização, prevenção ou combate."
    },
    {
        titulo: "6. Preservação ambiental",
        texto: "Com dados mais rápidos e bem analisados, as equipes podem planejar melhor suas ações e contribuir para proteger a biodiversidade."
    }
];

const botoes = document.querySelectorAll(".etapa");
const titulo = document.getElementById("detalhe-titulo");
const texto = document.getElementById("detalhe-texto");
const indicador = document.getElementById("indicador");

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const indice = Number(botao.dataset.etapa);

        botoes.forEach((item) => {
            item.classList.remove("ativa");
        });

        botao.classList.add("ativa");

        titulo.textContent = etapas[indice].titulo;
        texto.textContent = etapas[indice].texto;
        indicador.textContent = `ETAPA ${indice + 1} DE ${etapas.length}`;
    });
});
