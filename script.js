document.addEventListener("DOMContentLoaded", () => {
    const elementoTempo = document.querySelector(".time");
    const aniversario = new Date("2024-12-16T00:00:00");

    function atualizarContagem() {
        const agora = new Date();
        const diferenca = aniversario - agora;

        if (diferenca <= 0) {
            elementoTempo.textContent = "Hoje José completa 22 anos!";
            elementoTempo.style.color = "#ff6b6b";
            adicionarAnimacaoBolo();
            clearInterval(intervalo);
            return;
        }

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        elementoTempo.textContent = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    }

    function adicionarAnimacaoBolo() {
        const cake = document.querySelector('.cake');
        const candles = document.querySelectorAll('.candle');
        
        cake.style.animation = 'cake-party 1s infinite';
        
        candles.forEach((candle, index) => {
            candle.style.animation = `candle-party 0.5s infinite alternate`;
            candle.style.animationDelay = `${index * 0.2}s`;
        });
    }

    const intervalo = setInterval(atualizarContagem, 1000);
    atualizarContagem();
});