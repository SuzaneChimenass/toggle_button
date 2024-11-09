document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('tema-troca');
    const pagina = document.body;

    botao.addEventListener('change', function() {
        if(this.checked) {
            console.log('Botão ativado');
            pagina.classList.remove('claro');
            pagina.classList.add('escuro');
        } else {
            console.log('Botão desativado');
            pagina.classList.remove('escuro');
            pagina.classList.add('claro');
        }
    });
});
