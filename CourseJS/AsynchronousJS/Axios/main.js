/*

    Axios é um cliente HTTP, que funciona tanto no browser quanto em NodeJS. 
    A biblioteca é basicamente uma API que sabe interagir tanto com XMLHttpRequest 
    quanto com a interface HTTP do NodeJS. 
    Isso significa que o mesmo código utilizado para fazer requisições AJAX no 
    browser, também funciona no servidor. 
    Além disso, as requisições feitas através da biblioteca retornam uma promise, 
    compatível com a nova versão do JavaScript - ES6. 

*/

axios.get('https://api.github.com/users/victorshgo')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(reject) {
        console.log(reject);
    })