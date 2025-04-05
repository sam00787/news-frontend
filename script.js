async function fetchNews() {
    const category = document.getElementById('category').value;
    const search = document.getElementById('search').value;

    console.log("Category Selected:", category);
    console.log("Search Term:", search);

    if (!search.trim()) {
        alert('Please enter a topic to search for.');
        return;
    }

    try {
        const response = await fetch(`https://news-backend-wo5i.onrender.com/news/?category=${category}&search=${encodeURIComponent(search)}`);
        console.log("API Response Status:", response.status);

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();
        console.log("Data Received:", data);

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

    } catch (error) {
        console.error("Error fetching news:", error);
    }
}
