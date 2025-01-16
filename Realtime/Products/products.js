const blogcontainer = document.getElementById("blog-container");
const searchcontainer = document.getElementById("search-container");
const searchbutton = document.getElementById("search-button");

searchbutton.addEventListener("click", async () => {
    const query = searchcontainer.value.trim();
    if (query === "") {
        alert("Please enter a search term.");
        return;
    }
    try {
        const articles = await fetchNewsquery(query);
        if (articles.length === 0) {
            alert("No results found.");
        }
        displayblogs(articles);
    } catch (error) {
        console.error("Error fetching news by query", error);
    }
});


async function fetchRandomNews() {
    try {
        const apiURL = `https://dummyjson.com/products`;
        const response = await fetch(apiURL);
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error("Error fetching random news", error);
        return [];
    }
}

async function fetchNewsquery(query) {
    try {
        const apiURL = `https://dummyjson.com/products/search?q=${query}`;
        const response = await fetch(apiURL);
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error("Error fetching news by query", error);
        return [];
    }
}

function displayblogs(articles) {
    blogcontainer.innerHTML = ""; // Clear existing blog cards
    articles.forEach((article) => {
        const blogcard = document.createElement("div");
        blogcard.classList.add("blog-card");

        const img = document.createElement("img");
        img.src = article.thumbnail;
        img.alt = article.title;

        const title = document.createElement("h3");
        const truncatedtitle = article.title.length > 30 ? article.title.slice(0, 30) + "..." : article.title;
        title.textContent = truncatedtitle;

        const description = document.createElement("p");
        const truncateddesc = article.description.length > 120 ? article.description.slice(0, 120) + "..." : article.description;
        description.textContent = truncateddesc;

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add To Cart";

        const buyNowButton = document.createElement("button");
        buyNowButton.textContent = "Buy Now";

        blogcard.appendChild(img);
        blogcard.appendChild(title);
        blogcard.appendChild(description);
        blogcard.appendChild(addToCartButton);
        blogcard.appendChild(buyNowButton);

        blogcontainer.appendChild(blogcard);
    });
}

(async () => {
    try {
        const articles = await fetchRandomNews();
        displayblogs(articles);
    } catch (error) {
        console.error("Error fetching random news", error);
    }
})();


