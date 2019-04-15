/*
    
    É uma requisição assíncrona, ou seja, ela não acontece no mesmo fluxo do script.
    O JavaScript não espera a requisição terminar para continuar 
    executando o resto do código.

*/

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/victorshgo');
xhr.send(null);

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        if(xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        } else {
            console.log('Erro na requisição.')
        }
    }
}
