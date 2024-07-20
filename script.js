
function giveQuotes(){

    const url = `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&timestamp=${new Date().getTime()}`
         fetch(url)
                .then(response => response.json())
             .then(data => {
                 const container = document.getElementById('quotes-container');
                    container.innerHTML = ''; // Clear previous quote
                    const quoteElement = document.createElement('p');
                    quoteElement.innerHTML = data[0].content.rendered; // Use innerHTML to render HTML content
                    container.appendChild(quoteElement);
                })
                .catch(error => {
                    console.error('Error occurred:', error);
                });
}