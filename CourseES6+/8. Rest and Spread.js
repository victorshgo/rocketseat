/*

O REST serve para pegar o resto das informações de um objeto ou array.

*/

const user = {
    name: 'Victor',
    age: 22,
    company: 'RedFox'
};
const { name , ...rest } = user;
console.log(name, ' - ', rest);

const arr = [1, 2, 3, 4];
const [ one, two, ...rest];
console.log(one, ' - ', two, ' - ', rest);

function sum( ...params ) {
    return params.reduce((result, next) => result + next);
}

/*

O SPREAD repassa as informações de um objeto ou array pra outra estrutura de dados.

*/

const user = {
    name: 'Victor',
    age: 22,
    company: 'RedFox'
};
const user = { ...user, age: 23 };
console.log(user);

const oneArr = [1, 2, 3];
const twoArr = [4, 5, 6];
const result = [...oneArr, ...twoArr];
console.log(result);