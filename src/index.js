/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const baseUrl = 'https://platzi-avo.vercel.app';

//web api
//connexión a la web api
window
    .fetch(`${baseUrl}/api/avo`)
    .then((respuesta) => respuesta.json())
    .then(responseJson => {
        const todosLosItems = [];
        responseJson.data.forEach(item => {
            //imagen
            const imagen = document.createElement("img");
            imagen.src = `${baseUrl}${item.image}`;

            //title
            const title = document.createElement("h2");
            title.textContent = item.name;

            //precio
            const price = document.createElement("div");
            price.textContent = item.price;


            const container = document.createElement("div");
            container.append(imagen, title, price);

            todosLosItems.push(container);
        });
        document.body.append(...todosLosItems);
    });

//web api
/*
async function fetchData() {
    const response = await fetch(url),
        data = await response.json(),
        allItems = [];

    data.data.forEach((item) => {
        // create image
        const image = document.createElement("img");
        // create title
        const title = document.createElement("h2");
        // create price
        const price = document.createElement("div");

        const container = document.createElement("div");
        container.append(image, title, price);

        allItems.push(container);
    });

    document.body.append(...allItems)
}

fetchData();
*/