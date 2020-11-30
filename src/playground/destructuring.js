// ARRAYS

const address = ['1299 S Juniper Street', 'Aliso', 'California', '92656']


const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}`)

const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , mediumCost] = item

console.log(`A medium ${coffee} cost ${mediumCost}`)

// OBJECTS

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher
console.log(`The publisher is ${publisherName}`);


const person = {
  name: 'Max',
  age: 43,
  location: {
    city: 'Aliso',
    temp: 92
  }
};
/*
const { name, age } = person;
console.log(`${name} is ${age}.`);


const { city, temp: tamp } = person.location;
if (person.location.city && person.location.temp) {
  console.log(`It's ${tamp} in ${city}`)
}
 */