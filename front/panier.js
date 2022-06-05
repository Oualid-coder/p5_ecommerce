let recupData = JSON.parse(localStorage.getItem('produit'));

const panierAffichage = async () => {

  if (recupData) {

    await recupData;
    console.log(recupData);

    let panierItems = document.getElementById('cart__items');

    panierItems.innerHTML = recupData.map((produite) =>

      `  <article class="cart__item" data-id="${produite._id}" data-color="${produite.couleur}">
            <div class="cart__item__img">
              <img src="${produite.imageUrl}" alt="Photographie du canapé ${produite.name}">
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__description">
                <h2>${produite.name}</h2>
                <p>couleur:&nbsp ${produite.couleur} </p>
                <p class="prix-a-jour ">prix:&nbsp ${produite.price * produite.quantite} E</p>
              </div>
              <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                  <p class="qte-p">Qté : ${produite.quantite}</p>
                  <input type="number" class="itemQuantity quantity" data-id="${produite._id}" data-color="${produite.couleur}"  name="itemQuantity" min="1" max="100" value="${produite.quantite}">
                </div><br>
                <div class="cart__item__content__settings__delete" >
                  <button class="deleteItem" data-id="${produite._id}" data-color="${produite.couleur}">Supprimer</button>
                </div>
              </div>
            </div>
          </article>`

    ).join('');

    ajoutQuantite(recupData);
    suppQuantite();
    sommeCanap();

    return;
  }
}


panierAffichage();


const ajoutQuantite = async (panierAffichage) => {
  await panierAffichage;
  console.log('pluplus');

  let ajoutQte = document.querySelectorAll('.quantity');
  // console.log(ajoutQte)
  ajoutQte.forEach((element) => {
    console.log(element)
    element.addEventListener('change', () => {

      //comparaison entre le tableau  recupData et le nouveau tab element
      for (i = 0; i < recupData.length; i++) {

        if (recupData[i]._id == element.dataset.id && recupData[i].couleur == element.dataset.color) {

          return (recupData[i].quantite++, console.log("quantite++"),
            localStorage.setItem("produit", JSON.stringify(recupData)),
            (document.querySelectorAll('.qte-p')[i].textContent = `Qté: ${recupData[i].quantite}`),
            (document.querySelectorAll(".prix-a-jour")[i].textContent = `Prix: ${recupData[i].quantite * recupData[i].price} E `));
        }
      }
    })
  });
}

const suppQuantite = async (panierAffichage) => {
  await panierAffichage

  let boutonSupp = document.querySelectorAll(".deleteItem");


  boutonSupp.forEach((supp) => {

    supp.addEventListener("click", () => {


      let totalCanape = recupData.length;
      //supression du local storage lorsqu'il y a 1 seul entité de produit et que sa quantité est = à 1
      for (i = 0; i < totalCanape; i++) {
        if (recupData[i].quantite == 1 && totalCanape == 1) {
          return (
            localStorage.removeItem("produit"),
            (location.href = "cart.html")

          )
        }
        // supression du local storage lorsque la quantité est = 1 et que plusieurs autres produits sont dans le local storage
        if (recupData[i].quantite == 1 && totalCanape != 1 && recupData[i]._id == supp.dataset.id && recupData[i].couleur == supp.dataset.color) {
          recupData.splice(i, 1)
          localStorage.setItem('produit', JSON.stringify(recupData));
          location.href = "cart.html"
          console.log('un produit en moins')

        }

        // comparaison entre les données récupérer et les dataset si ces derniers correspondent la supression de la quantité et éfféctuer par décrémentation.
        if (recupData[i]._id == supp.dataset.id && recupData[i].couleur == supp.dataset.color) {
          return (recupData[i].quantite--, localStorage.setItem("produit", JSON.stringify(recupData)),
            (document.querySelectorAll('.qte-p')[i].textContent = `Qté: ${recupData[i].quantite}`),
            (document.querySelectorAll(".prix-a-jour")[i].textContent = `${recupData[i].quantite * recupData[i].price} E `), (document.querySelectorAll('.quantity')[i].value = `${recupData[i].quantite}`), console.log('qntit--'))

        };
      };


    });

  });


};

const sommeCanap = async (panierAffichage, suppQuantite, ajoutQuantite) => {
  // attendre que les fonctions soient traités
  await panierAffichage
  await ajoutQuantite
  await suppQuantite

  console.log('calc les prdts')

  let canapePrix = [];
  let qteTotal = [];

  let newStorage = JSON.parse(localStorage.getItem("produit"));

  let displayQte = document.querySelectorAll('.qte-p');
  console.log(displayQte)

  newStorage.forEach((canape) => {

    canapePrix.push(canape.price * canape.quantite);
    qteTotal.push(canape.quantite);
    console.log(canapePrix);
    console.log(qteTotal);



  })

  document.getElementById('totalQuantity').textContent = `${eval(qteTotal.join("+"))}  `
  document.getElementById('totalPrice').textContent = `${eval(canapePrix.join("+"))}`
}



// ***************validation de formulaire******************** 


let form = document.querySelector('#formulaire');


form.email.addEventListener('change', (e) => {


  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$"
  );

  let testEmail = emailRegExp.test(e.target.value)
  console.log(testEmail)
  if (testEmail) {

    document.getElementById('emailErrorMsg').innerHTML = "email valide"
  } else {
    document.getElementById('emailErrorMsg').innerHTML = "email non valide"
  }

})

form.firstName.addEventListener('change', (e) => {

  let firstNameRegx = new RegExp("^[a-zA-Z]{2,10}$")
  let inputValue = e.target.value
  let suivant = document.getElementById('firstNameErrorMsg')
  let testFname = firstNameRegx.test(inputValue)
  console.log(testFname);
  if (testFname) {
    suivant.innerHTML = 'prenom valide'

  } else {
    suivant.innerHTML = 'prenom invalide'

  }

})

form.lastName.addEventListener('change', (e) => {

  let lastNameRegx = new RegExp("^[a-zA-Z]{2,10}$")
  let inputValue = e.target.value
  let suivant = document.getElementById('lastNameErrorMsg')
  let testLname = lastNameRegx.test(inputValue)
  console.log(testLname);
  if (testLname) {
    suivant.innerHTML = 'Nom valide'


  } else {
    suivant.innerHTML = 'Nom invalide'

  }

})

form.city.addEventListener('change', (e) => {

  let cityRegx = new RegExp("^[a-zA-Z]{2,10}$")
  let suivant = document.getElementById('cityErrorMsg')
  let inputValue = e.target.value
  let testCity = cityRegx.test(inputValue)
  console.log(testCity);
  if (testCity) {
    suivant.innerHTML = 'ville valide'


  } else {
    suivant.innerHTML = 'veuillez saisir une ville'

  }

})

form.address.addEventListener('change', (e) => {

  let inputValue = e.target.value
  let valid = false;
  let msg;
  let messgErr = document.getElementById('addressErrorMsg')
  if (inputValue.length < 4 && !/[a-zA-Z]/.test(inputValue)) {

    msg = "vous devez saisir un numero de voie et nom de voie"
  } else if (!/[0-9]/.test(inputValue)) {

    msg = "l'adresse doit contenir un numero de voie"
  } else {
    valid = true

  }

  if (valid) {
    messgErr.innerHTML = "l'adresse est valide"



  } else {
    messgErr.innerHTML = msg

  }

})




const verifFormulaire = async (panierAffichage) => {

  await panierAffichage

  console.log('hi')


}


//****************envoi du formulaire*****************

const envoiFormulaire = async (canap, panierAffichage) => {


  await panierAffichage;


  document.getElementById('order').addEventListener('click', (e) => {
    e.preventDefault();


    let panier = [];

    for (canap of recupData) {

      panier.push(canap._id)
    }


    let order = {

      contact: {
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        city: city.value,
        email: email.value
      },
      products: panier
    }
    console.log(order);

    fetch("http://localhost:3000/api/products/order", {

      method: "POST",

      headers: {
        "content-Type": "application/json"
      },

      body: JSON.stringify(order)

    }).then((response) => {


      if (response.ok) {
        return response.json()
      }

    }).then((data) => {
      localStorage.clear();
      location.href = `confirmation.html?commande=${data.orderId}`
    })
      .catch((err) => console.log(err));
  })

}

envoiFormulaire();