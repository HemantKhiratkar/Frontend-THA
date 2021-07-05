const btn = document.querySelector('button');
const quoteText = document.querySelector(".quote");
const author = document.querySelector(".author");

async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    quoteText.textContent = `"${data.content}"`;
    author.textContent = `~ by ${data.author}.`;
  }
randomQuote();

btn.addEventListener('click', async() => {
    let response = randomQuote();
    let user = await response;
    console.log(user);
})