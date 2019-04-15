/* 

CONST: Não pode ter seu valor reatribuído.
   
*/
    
const x = 10;
x = 7;
    
/*

Não funciona. Apenas é possível mutar uma CONST.

*/

const user = {
    name: 'Bianca'
};

user.name = 'Victor';

/*

LET: É uma variável de escopo.

*/

function show() {
    let x = 10;
    return x;
}

console.log(x);

/*

Não funciona. Estamos tentando acessar a variável fora do escopo da mesma.

*/

console.log(show());