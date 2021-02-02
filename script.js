// Joke object
const jokes = {
    day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    city: ['Orlando', 'Tampa', 'Miami', 'Naples', 'Jacksonville', 'Atlanta', 'Charlotte', 'Columbia', 
    'Washington DC', 'Lexington', 'Baltimore', 'New York', 'Cleveland', 'Toledo', 'Cincinatti', 'Columbus', 
    'Dayton', 'Pittsburgh', 'Chicago', 'Nashville', 'Dallas', 'Houston', 'Scottsdale', 'Los Angeles', 'San Diego', 'Seattle', 'Portland', 'Puerto Rico'],
    who: ['Kanga', 'Broken Pencil', 'Ice cream', 'Tank', 'Owls go', 'Lettuce', 'Police', 'Cactus', 'A little old lady', 'Hatch', 'Cow says', 'Dishes'],
    full: ['Actually, its kangaroo', 'Nevermind, its pointless', 'Ice cream if you dont let me in!', 'Youre welcome', 'Thats right!', 
    'Lettuce in, its cold out here!', 'Police stop telling these awful knock knock jokes!', 'Cactus makes perfect!', 'I had no idea you could yodel', 'Bless you!', 'No silly! A cow says Mooooo',
    'Dishes the police! Come out with your hands up!']
}
// Function for randomizing
function getRandom (number){
    return Math.floor(Math.random() * number)
};

// Getting random day
let dayToday = getRandom(7);


// Getting random city
let randomCity = getRandom(28);

// Getting random joke
let randomJoke = getRandom(12);

console.log(`Today is ${jokes.day[dayToday]}. You are currently is ${jokes.city[randomCity]}. You suddenly hear a knock at the door`);
console.log(`Knock, knock. Whos there? ${jokes.who[randomJoke]}. ${jokes.who[randomJoke]} who? ${jokes.full[randomJoke]}`);



