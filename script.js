async function fetchNews() {
    const category = document.getElementById('category').value;
    const search = document.getElementById('search').value;

    if (!search.trim()) {
        alert('Please enter a topic to search for.');
        return;
    }

    // Replace the below URL with your Render backend URL
    const response = await fetch(`https://news-backend-wo5i.onrender.com/news/?category=${category}&search=${encodeURIComponent(search)}`);
    const data = await response.json();

    const newsResults = document.getElementById('news-results');
    newsResults.innerHTML = '';

    if (data.length === 0) {
        newsResults.innerHTML = '<p>No articles found.</p>';
        return;
    }

    data.forEach(article => {
        const div = document.createElement('div');
        div.className = 'news';
        div.innerHTML = `<h3>${article.title}</h3><p>${article.summary}</p>`;
        newsResults.appendChild(div);
    });
}

