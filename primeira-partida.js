const vitorias = 121; 
const derrotas = 20; 

function calcularNivel(vitorias) {
    if (vitorias < 10) return "Ferro";
    if (vitorias <= 20) return "Bronze";
    if (vitorias <= 50) return "Prata";
    if (vitorias <= 80) return "Ouro";
    if (vitorias <= 90) return "Diamante";
    if (vitorias <= 100) return "Lendário";
    return "Imortal";
}

function exibirMensagem(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    const nivel = calcularNivel(vitorias - derrotas);
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}`);
}

exibirMensagem(vitorias, derrotas);
