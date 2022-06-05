let canape = []

const fetchCanape = async () => {
    await fetch("http://localhost:3000/api/products")
        .then((res) => res.json())
        .then((data) => {
            canape = data
            console.log(canape)
        });

};



const affichageCanape = async () => {
    await fetchCanape();

    document.getElementById('items').innerHTML = canape.map((canap) => `
<a id="${canap._id}" href="./product.html?productId=${canap._id}"><article><img src="${canap.imageUrl} " alt=" ${canap.altTxt}">
<h3 class="productName">${canap.name}</h3>
<p class="productionDescription">${canap.description} </p></article></a>
`).join(" ")

}

affichageCanape();