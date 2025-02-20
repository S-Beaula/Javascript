const page = document.getElementById("page");

document.addEventListener("click", (event) => {
    switch (event.target.id) {
        case 'Appliances':
            document.body.style.backgroundColor = 'lightgreen';
            page.innerHTML = `
            <img src="https://m.media-amazon.com/images/I/81orA+t+QdL._SX425_.jpg" alt="Home Image" />
            <h1>Homesake Wall Light Antique Home Decor Wall Lamp</h1>
            <button>Order now</button>`;
            console.log("clicked on Appliances");
            break;

        case 'Dress':
            document.body.style.backgroundColor = 'lightblue';
            page.innerHTML = `
            <img src="https://m.media-amazon.com/images/I/61SgADmAyDL._SY879_.jpg" alt="" width=300 height=300/>
            <h1>GoSriKi Women's Cotton Blend Embroidered Straight Kurta with Pant & Dupatta</h1>
            <button>Order now</button>`;
            console.log("clicked on Mock");
            break;

        case 'phones':
            document.body.style.backgroundColor= "yellow";
            page.textContent = "Hello everyone, complete the assignment";
            page.innerHTML = `
            <img src="https://m.media-amazon.com/images/I/41kLJXobHXL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
            <h1>Lava O3 (Glossy Blue, 3 GB RAM, 64 GB Storage) </h1>
            <button>Order now</button>`;
            console.log("clicked on Assignments");
            break;

        case 'furniture':
            document.body.style.backgroundColor= "yellow";
            page.textContent = "Hello everyone, complete the assignment";
            page.innerHTML = `
            <img src="https://m.media-amazon.com/images/I/81eWfwSKbJL._AC_UL480_QL65_.jpg" alt="" />
            <h1>Westido Bamsi Fabric</h1>
            <button>Order now</button>`;
            console.log("clicked on Classes");
            break;

        case 'Decor':
            document.body.style.backgroundColor= "yellow";
            page.textContent = "Hello everyone, complete the assignment";
            page.innerHTML = `
            <img src="https://m.media-amazon.com/images/I/51UYS13U23L._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
            <h1>TIED RIBBONS Set of 6 Votive Glass Tealight Candle Holders Glass Votive </h1>
            <button>Order now</button>`;
            console.log("clicked on Feedback");
            break;

        default:
            console.log("No specific case matched.");
            break;
    }
});


