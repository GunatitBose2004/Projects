// Array of jokes
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call a fake noodle? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call a fish with no eyes? Fsh!",
    "How do you organize a space party? You planet!",
    "Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.",
    "Why don't eggs tell jokes? Because they'd crack each other up!",
    "What did the buffalo say when his son left? Bison!",
    "Why was the math book sad? Because it had too many problems.",
    "What's a vampire's favorite fruit? A neck-tarine!",
    "Why did the invisible man turn down the job offer? He couldn't see himself doing it.",
    "What do you call a lazy kangaroo? Pouch potato!",
];

// Get references to the HTML elements
const jokeTextElement = document.getElementById('jokeText');
const newJokeBtn = document.getElementById('newJokeBtn');

// Function to get a random joke from the array
function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

// Function to display a new joke
function displayNewJoke() {
    jokeTextElement.textContent = getRandomJoke();
}

// Add an event listener to the button
newJokeBtn.addEventListener('click', displayNewJoke);

// Display an initial joke when the page loads (optional)
displayNewJoke();