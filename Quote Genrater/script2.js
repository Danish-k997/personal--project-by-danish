let showquote = document.getElementById('quote')
let getquote = document.getElementById('genrate')
let showauthor = document.getElementById('author')
let share = document.getElementById('share')
let copy = document.getElementById('copy')

let currentQuote = "";
let currentAuthor = "";

getquote.addEventListener('click', ()=>{
    fetch("https://api.api-ninjas.com/v1/quotes?",{
      method: "GET",
      headers: {
      "X-Api-Key": "4mpWFujQ7WDOTB0c5fI06g==eAgKz5JjqByGW9SM",
    },
})

        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json()
        })

        .then((data) => {
            const quote = data[0];
            showquote.innerText = ` "${quote.quote}"`
            showauthor.innerText = `by— ${quote.author}`

        })

        .catch((error) => {
            showquote.innerHTML = "Failed to load quote 😢";
            console.log("Error fetching quote:", error)
        });
});

share.addEventListener('click', ()=>{
  let fullText = `"${currentQuote}" — ${currentAuthor}`
  let encodedText = encodeURIComponent(fullText);
  
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?
      url=https://yourwebsite.com/quote?text=${encodedText}`;

    window.open(linkedInUrl, "_blank")
})

copy.addEventListener('click', ()=>{
  let fullText = `${showquote.innerText}  ${showauthor.innerText}`

  navigator.clipboard.writeText(fullText)
  .then(() =>{
      copy.innerText = "✅ Copied!";
      setTimeout(() => {
          copy.innerText = "📋 Copy"
      }, 1500); 
  })
    
   .catch((err)=>{
   console.log("Failed to copy: ", err)
   }); 
});