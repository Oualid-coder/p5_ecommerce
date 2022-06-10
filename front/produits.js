let url = window.location.search
// console.log(url);
//Récupération de l'id qui se trouve dans notre URL
let params = new URLSearchParams(url);
const productId = params.get('productId')
console.log(productId);

let produit = [];

const fetchIdProduit = async () => {

    await fetch(`http://localhost:3000/api/products/${productId}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
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
        
        if (e.target.value < 0 && e.target.value>101) {
            Math.abs(null)
            alert("vous devez saisir une quantité comprise entre 1 et 100")
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

        if(ajoutQuantite.value < 0 || ajoutQuantite.value > 100 && ajoutSelection.value){
            alert("vous devez saisir une quantité comprise entre 1 et 100")
        }else{if(!ajoutSelection.value){alert("choisir une couleur")}}
        // si l'utilisateur n'indique pas de quantité ou de couleur rien ne sera envoyé au panier
        if (ajoutQuantite.value > 0 && ajoutQuantite.value < 101 && ajoutSelection.value ) {
            let tabCanape = JSON.parse(localStorage.getItem("produit"));
            if (tabCanape == null) {
                tabCanape = [];
                delete produit.price;
                delete produit.colors;
                tabCanape.push(produit);
                
                console.log(tabCanape);
                localStorage.setItem("produit", JSON.stringify(tabCanape));
                alert('produits ajouter avec succés')
            }
            else if (tabCanape != null) {
                
                // si deux produits ayant le meme id et meme couleur on incrémente la quantité
                for (i = 0; i < tabCanape.length; i++) {
                    console.log('test');
                    if (tabCanape[i]._id == produit._id && tabCanape[i].couleur == ajoutSelection.value ) {
                        delete produit.price
                        delete produit.colors
                      
                        let qte=tabCanape[i].quantite
                        let val=ajoutQuantite.value
                        console.log(parseInt(qte),parseInt(val))
                        
                        alert('produits ajouter avec succés')
                        return (
                            console.log('ajout'),
                            
                           
                            tabCanape[i].quantite=parseInt(qte)+parseInt(val),
                            localStorage.setItem('produit', JSON.stringify(tabCanape)),
                            tabCanape = JSON.parse(localStorage.getItem("produit")))
                            
                    }
                }  
                // si la couleur est différente ou le produit est différent on injecte un nouveau produit ds le local
                for (i = 0; i < tabCanape.length; i++) {
                    if ((tabCanape[i]._id == produit._id && tabCanape[i].couleur != ajoutSelection.value) || tabCanape[i]._id != produit._id) {
                        alert('produits ajouter avec succés')
                        delete produit.price
                        delete produit.colors
                        return (
                            console.log('new'),
                            //envoie le nouveau produit dans le tab tabCanap 
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


