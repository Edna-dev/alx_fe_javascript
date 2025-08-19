// Quotes array
let quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Don’t let yesterday take up too much of today.", category: "Wisdom" }
];

// DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuote");
const addQuoteBtn = document.getElementById("addQuoteBtn");

// Show random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteDisplay.innerHTML = `"${quote.text}" <br><em>- ${quote.category}</em>`;
}

// Add new quote
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  quotes.push({
    text: textInput.value,
    category: categoryInput.value
  });

  // Update DOM with last added
  const lastQuote = quotes[quotes.length - 1];
  quoteDisplay.innerHTML = `"${lastQuote.text}" <br><em>- ${lastQuote.category}</em>`;

  textInput.value = "";
  categoryInput.value = "";
}

// Event listeners
newQuoteBtn.addEventListener("click", showRandomQuote);
addQuoteBtn.addEventListener("click", addQuote);

// Show one on load
showRandomQuote();
