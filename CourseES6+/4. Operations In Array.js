const arr = [1, 3, 4, 6, 8, 9];

/*

O método map() percorre o vetor passando por cada item e executa a ação necessária.

*/

const newArr = arr.map(function(el, index) {
    return el*2;
});
console.log("MAP:");
console.log(newArr);

/*

O método reduce() consome todo o vetor e transforma em uma unica informação.

*/

const newArr = arr.reduce(function(result, next) {
    return result + next;
})
console.log("REDUCE:");
console.log(newArr);

/*

O método filter() cria um novo array com todos os elementos que passaram no teste 
implementado pela função fornecida.

*/

const newArr = arr.filter(function(el) {
    return el % 2 === 0;
})
console.log("FILTER:");
console.log(newArr);

/*

O método find() retorna o valor do primeiro elemento do array que satisfizer
a função de teste provida. Caso contrario, undefined é retornado.

*/

const newArr = arr.find(function(el) {
    return el === 4;
})
console.log("FIND:");
console.log(newArr);

