// Quotes array
let quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Don’t let yesterday take up too much of today.", category: "Wisdom" }
];

// DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuote");
const addQuoteBtn = document.getElementById("addQuoteBtn");

// ✅ Function name must be displayRandomQuote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteDisplay.textContent = `"${quote.text}" - ${quote.category}`;
}

// ✅ Function name must be addQuote
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  quotes.push({ text: textInput.value, category: categoryInput.value });

  // Update DOM immediately with last added quote
  const lastQuote = quotes[quotes.length - 1];
  quoteDisplay.textContent = `"${lastQuote.text}" - ${lastQuote.category}`;

  textInput.value = "";
  categoryInput.value = "";
}

// ✅ Event listeners
newQuoteBtn.addEventListener("click", displayRandomQuote);
addQuoteBtn.addEventListener("click", addQuote);

// ✅ Show one quote when page loads
displayRandomQuote();
