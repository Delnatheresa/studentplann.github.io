const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don't let yesterday take up too much of today.",
  "It's not whether you get knocked down, it's whether you get up.",
  "Failure will never overtake me if my determination to succeed is strong enough.",
  "Success is not in what you have, but who you are."
];

const quoteText = document.getElementById("quoteText");

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
}
showRandomQuote();
setInterval(showRandomQuote, 10000);
