const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "This too shall pass.",
    author: "Persian Proverb",
  },
  {
    quote: "What you think, you become.",
    author: "Buddha",
  },
  {
    quote: "Less is more.",
    author: "Ludwig Mies van der Rohe",
  },
  {
    quote: "Life is short, live it.",
    author: "Unknown",
  },
  {
    quote: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
  },
  {
    quote: "Dream big.",
    author: "Unknown",
  },
  {
    quote: "You only live once.",
    author: "Unknown",
  },
  {
    quote: "Keep moving forward.",
    author: "Walt Disney",
  },
  {
    quote: "Live and let live.",
    author: "Unknown",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
