const user = {
    name: 'Victor',
    age: 22,
    address: {
        city: 'São Paulo',
        country: 'Brasil'
    }
}

const { name, age, address: {city} } = user;

console.log(name, ' - ', age, ' - ', city);

function showInfos({ name, age, address: {city} }) {
    return name, ' - ', age, ' - ', city;
}

console.log(showInfos(user));