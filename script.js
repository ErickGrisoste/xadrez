let selecionado = null;

function mover(event) {
    const botaoClicado = event.target;

    if (selecionado === null) {
        if (botaoClicado.classList.length > 2) {
            selecionado = botaoClicado;
            selecionado.style.border = "3px solid red";
        }
    } else {
        const classes = Array.from(selecionado.classList);
        const pecaClass = classes.find(c => c !== "casa" && c !== "clara" && c !== "preta");

        if (pecaClass) {
            selecionado.classList.remove(pecaClass);
            botaoClicado.classList.add(pecaClass);
        }

        selecionado.style.border = "1px solid black";
        selecionado = null;
    }
}