apikey = 'e2e4e8f96720e7271575d911bd0d3e92';
url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apikey;

document.getElementById('search-button').addEventListener('click', function () {
    const searchText = document.getElementById('search-text').value;
    const apiKey = 'e2e4e8f96720e7271575d911bd0d3e92';
    const apiUrl = `https://gnews.io/api/v4/search?q=${searchText}&lang=en&country=us&max=10&apikey=${apiKey}`;

    fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const cardsContainer = document.getElementById('cards-container');
        const template = document.getElementById('template-news-card');

        // Clear existing cards
        cardsContainer.innerHTML = '';

        // Populate cards with news articles
        data.articles.forEach(function (article) {
          const clone = template.content.cloneNode(true);
          const card = clone.querySelector('.card');
          const img = clone.querySelector('#news-img');
          const title = clone.querySelector('#news-title');
          const source = clone.querySelector('#news-source');
          const desc = clone.querySelector('#news-desc');

          // Set data from API response
          img.src = article.image || 'https://via.placeholder.com/400x200';
          title.textContent = article.title;
          source.textContent = `${article.source.name} ${article.publishedAt}`;
          desc.textContent = article.description;

          cardsContainer.appendChild(card);
        });
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
  });