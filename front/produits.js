let url = window.location.search
// console.log(url);

let params = new URLSearchParams(url);
const productId = params.get('productId')
console.log(productId);

let produit = [];

const fetchIdProduit = async () => {

    await fetch(`http://localhost:3000/api/products/${productId}`)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            produit = data;

        })
}


const affichageProduit = async () => {
    await fetchIdProduit();

    document.getElementById('titre').innerHTML = `${produit.name}`;


    document.getElementById('image').innerHTML = `<img class="image-size" src="${produit.imageUrl}" alt="Photographie d'un canapé">`;


    document.getElementById('title').innerHTML = `${produit.name}`;

    document.getElementById('price').innerHTML = `${produit.price}`;

    document.getElementById('description').innerHTML = `${produit.description}`;


    let choixCouleur = document.getElementById('colors')


    choixCouleur.innerHTML =

        produit.colors.map((couleur) => `   <option value="" disabled selected hidden>Choose a color</option>
        <option value="${couleur}">${couleur}</option>
        `).join(" ");


    //recuperation des données de produit pour l'utiliser dans notre fonction ajouterCanape
    ajouterCanape(produit);



}


affichageProduit();



const ajouterCanape = () => {

    let boutonAjout = document.getElementById('addToCart');

    let ajoutSelection = document.getElementById('colors');

    let ajoutQuantite = document.getElementById('quantity');



    ajoutSelection.addEventListener('change', (e) => {


        let result = e.target.value;
        produit.couleur = result;

        return;

    });

    ajoutQuantite.addEventListener('change', (e) => {
        if (e.target.value < 0) {
            Math.abs(null)
            e.stopPropagation()
        }

        else {
            let quantite = e.target.value;
            produit.quantite = quantite;
            console.log(produit.quantite);
        }

        return;

    })


    boutonAjout.addEventListener('click', () => {
        if (ajoutQuantite.value > 0) {
            let tabCanape = JSON.parse(localStorage.getItem("produit"));
            if (tabCanape == null) {
                tabCanape = [];
                tabCanape.push(produit);
                console.log(tabCanape);
                localStorage.setItem("produit", JSON.stringify(tabCanape));
            }
            else if (tabCanape != null) {
                for (i = 0; i < tabCanape.length; i++) {
                    console.log('test');
                    if (tabCanape[i]._id == produit._id && tabCanape[i].couleur == ajoutSelection.value) {
                        console.log(ajoutSelection)
                        return (tabCanape[i].quantite++,
                            console.log('quantite++'),
                            localStorage.setItem('produit', JSON.stringify(tabCanape)),
                            tabCanape = JSON.parse(localStorage.getItem("produit")))
                    }
                } for (i = 0; i < tabCanape.length; i++) {
                    if ((tabCanape[i]._id == produit._id && tabCanape[i].couleur != ajoutSelection.value) || tabCanape[i]._id != produit._id) {
                        return (
                            console.log('new'),
                            //envoie le nouveau produit dans le tab tabCanap et on récupere la dernière chose dans le local storage
                            tabCanape.push(produit),
                            localStorage.setItem('produit', JSON.stringify(tabCanape)),
                            tabCanape = JSON.parse(localStorage.getItem('produit'))
                        )
                    }

                }
            }
        }
    })

    return (tabCanape = JSON.parse(localStorage.getItem("produit")));
}


