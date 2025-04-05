async function getNews() {
    const category = document.getElementById("category").value;
    const search = document.getElementById("search").value;

    console.log("Category Selected:", category);
    console.log("Search Query:", search);

    const response = await fetch(`https://your-api-name.onrender.com/news/?category=${category}&search=${search}`);

    console.log("Raw Response:", response);

    if (response.ok) {
        const data = await response.json();
        console.log("Fetched Data:", data);

        displayNews(data);
    } else {
        console.error("Error fetching news:", response.status);
    }
}

function displayNews(data) {
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = "";

    if (data.length === 0) {
        newsContainer.innerHTML = "<p>No news found.</p>";
        return;
    }

    data.forEach(item => {
        const newsItem = document.createElement("div");
        newsItem.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.summary}</p>
            <hr>
        `;
        newsContainer.appendChild(newsItem);
    });
}

