let share = document.getElementById('share')
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const btn = document.getElementById("genrate");
const copyBtn = document.getElementById('copy')

let currentQuote = "";
let currentAuthor = "";

btn.addEventListener("click", () => {
  fetch("https://api.api-ninjas.com/v1/quotes?", {
    method: "GET",
    headers: {
      "X-Api-Key": "4mpWFujQ7WDOTB0c5fI06g==eAgKz5JjqByGW9SM",
    },
  })



    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const quote = data[0];
      quoteText.innerText = `"${quote.quote}"`;
      authorText.innerText = `— ${quote.author}`;
    })
    .catch((error) => {
      quoteText.innerText = "Failed to load quote 😢";
      console.error("Error fetching quote:", error);
    });
});

share.addEventListener("click", () => {
  const fullText = `"${currentQuote}" — ${currentAuthor}`;
  const encodedText = encodeURIComponent(fullText);

  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?
      url=https://yourwebsite.com/quote?text=${encodedText}`;

  window.open(linkedInUrl, "_blank");
});

copyBtn.addEventListener("click", () => {
  const fullText = `${quoteText.innerText} ${authorText.innerText}`;

  navigator.clipboard.writeText(fullText)
    .then(() => {
    
      copyBtn.innerText = "✅ Copied!";
      setTimeout(() => {
        copyBtn.innerText = "📋 Copy";
      }, 1500);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});