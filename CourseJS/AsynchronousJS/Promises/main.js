 /*

    Uma Promise é um objeto usado para processamento assíncrono. 
    Um Promise (de "promessa") representa um valor que pode estar disponível 
    agora, no futuro ou nunca.
 
 */

var requestUsingPromise = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users/victorshgo');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição.')
                }
            }
        }
    });
}

requestUsingPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(reject) {
        console.log(reject);
    })
