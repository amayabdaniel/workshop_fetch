const baseUrl = "https://platzi-avo.vercel.app";
const mountNode = document.getElementById("entradaJavaScript");

const formatPrice = (price) =>
  new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);

!(async function () {
  const response = await fetch(`${baseUrl}/api/avo`);
  const { data: allAvos } = await response.json();

  const arregloNodos = allAvos.map((avocado) => {
    const imagen = document.createElement("img");
    imagen.className =
      "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
    imagen.src = `${baseUrl}${avocado.image}`;

    const title = document.createElement("h2");
    title.className = "text-lg";
    title.textContent = avocado.name;

    const price = document.createElement("div");
    price.className = "text-gray-600";
    price.textContent = formatPrice(avocado.price);

    const precioYTitulo = document.createElement("div");
    precioYTitulo.className = "text-center md:text-left";
    precioYTitulo.appendChild(title);
    precioYTitulo.appendChild(price);

    const card = document.createElement("div");
    card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
    card.appendChild(imagen);
    card.appendChild(precioYTitulo);

    return card;
  });

  mountNode.append(...arregloNodos);
})();