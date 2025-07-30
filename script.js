const quotes = [
  "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
  "Le succès n’est pas final, l’échec n’est pas fatal : c’est le courage de continuer qui compte.",
  "Il n’y a qu’une façon d’échouer, c’est d’abandonner avant d’avoir réussi.",
  "Fais de ta vie un rêve, et d’un rêve, une réalité.",
  "Croyez en vous, toujours."
];

let currentQuote = "";

function newQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  currentQuote = quotes[index];
  document.getElementById("quote").innerText = currentQuote;
}

function addToFavorites() {
  if (!currentQuote) return;
  
  const list = document.getElementById("favorites");
  const li = document.createElement("li");
  li.innerText = currentQuote;
  list.appendChild(li);
}
function copyQuote() {
  if (!currentQuote) return;
  
  navigator.clipboard.writeText(currentQuote)
    .then(() => alert("Citation copiée !"))
    .catch(err => alert("Erreur lors de la copie"));
}
