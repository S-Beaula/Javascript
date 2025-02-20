const container = document.getElementById("container");
const searchcontainer = document.getElementById("search-container");
const searchbutton = document.getElementById("search-button");

searchbutton.addEventListener("click", async () => {
    const query = searchcontainer.value.trim();
    // if (query == "") {
    //     alert("Please enter a search here.");
    //     return;
    // }
    try {
        const articles = await productdata(query);
        // if (articles.length === 0) {
        //     alert("No results found.");
        // }

        displayblogs(articles);
    } catch (error) {
        console.error("Error in searching product", error);
    }
});


async function Randomproduct() {
    try {
        const apiURL = `https://dummyjson.com/products?limit=100`;
        const response = await fetch(apiURL);
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error("Error no product data found", error);
        return [];
    }
}

async function productdata() {
    try {
        const apiURL = `https://dummyjson.com/products/category/search?q=${apiURL}`;
        const response = await fetch(apiURL);
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error("Error", error);
        return [];
    }
}
// async function getdata(cate=null) {
//     const data=await fetch('https://dummyjson.com/products/categories')
//     const searchdata=await data.json()
    
//     const search=data? response.filter(x=>x.category===data):response
//     console.log(searchdata);
//     console.log(searchdata);
// }getdata()

function displaycards(x) {
    container.innerHTML = ""; 
    // const searchdata=data? response.filter(x=>x.category===data):response
    // console.log(searchdata);
    
    x.forEach((articles) => {
        const card = document.createElement("div")
        card.className="card"
        card.innerHTML = `
        <img src=${articles.images[0]} alt=""/>
        <h1 id="title">${articles.title}</h1>
        <p id="desc">${articles.description}</p>
        <h3 id="category">${articles.category}</h4>
        <h4 id="price">Price--${articles.price}</h5>
        <h5 id="rate">Rating--${articles.rating}</h5>
        <button id="AddToCart">Addtocart</button>
        <button id="Buynow">BuyNow</button>`

        const title = articles.title.length > 30 ? articles.title.slice(0, 30) + "..." : articles.title;

        const description = articles.description.length > 120 ? articles.description.slice(0, 120) + "..." : articles.description;

        container.append(card)
    });
}

(async () => {
    try {
        const articles = await Randomproduct();
        displaycards(articles);
    } catch (error) {
        console.error("Error fetching random news", error);
    }
})();


