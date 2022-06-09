// let recupData = JSON.parse(localStorage.getItem('produit'));

// if (recupData){
//   recupData.forEach ( Kanap =>{   
    
//     let item = {
//     Id : Kanap._id,
//     color : Kanap.couleur,
//     quantity : Kanap.quantite,
// }

// fetch(`http://localhost:3000/api/products/${item.Id}`)
// .then((response) => {return response.json()})
// .then(function getcanap (kanap){

// let panierItems = document.getElementById('cart__items');
// panierItems.innerHTML = 

// `  <article class="cart__item" data-id="${item.Id}" data-color="${item.color}" >
// <div class="cart__item__img">
//   <img src="${kanap.imageUrl}" alt="Photographie du canapé ${kanap.name}">
// </div>
// <div class="cart__item__content">
//   <div class="cart__item__content__description">
//     <h2>${kanap.name}</h2>
//     <p>couleur:&nbsp ${item.color} </p>
//     <p class="prix-a-jour" > prix:&nbsp ${kanap.price} E </p>
//   </div>
//   <div class="cart__item__content__settings">
//     <div class="cart__item__content__settings__quantity">
//       <p class="qte-p">Qté : ${item.quantity}</p>
//       <input type="number" class="itemQuantity quantity" data-id="${item.Id}" data-color="${item.color}"  name="itemQuantity" min="1" max="100" value="${item.quantity}">
//     </div><br>
//     <div class="cart__item__content__settings__delete" >
//       <button class="deleteItem" data-id="${item.Id}" data-color="${item.color}">Supprimer</button>
//     </div>
//   </div>
// </div>
// </article>`

// })


// }) 
 

 
// }


// // pour chaque elementid du tableau fait un fetch de prix avec leur id 




// const ajoutQuantite = async (panierAffichage) => {
//   await panierAffichage;
//   console.log('pluplus');

//   let ajoutQte = document.querySelectorAll('.quantity');
//   // console.log(ajoutQte)
//   ajoutQte.forEach((element) => {
//     console.log(element)
//     element.addEventListener('change', () => {

//       //comparaison entre le tableau  recupData et le nouveau tab element
//       for (i = 0; i < recupData.length; i++) {

//         if (recupData[i]._id == element.dataset.id && recupData[i].couleur == element.dataset.color) {


//           return (recupData[i].quantite++, console.log("quantite++"),
       
//             localStorage.setItem("produit", JSON.stringify(recupData)),
//             (document.querySelectorAll('.qte-p')[i].textContent = `Qté: ${recupData[i].quantite}`),
//             (document.querySelectorAll(".prix-a-jour")[i].textContent = `Prix: ${recupData[i].quantite * produits} E `));
//         }
//       }
//     })
//   });
// }

// const suppQuantite = async (panierAffichage) => {
//   await panierAffichage

//   let boutonSupp = document.querySelectorAll(".deleteItem");


//   boutonSupp.forEach((supp) => {

//     supp.addEventListener("click", () => {


//       let totalCanape = recupData.length;
//       //supression du local storage lorsqu'il y a 1 seul entité de produit et que sa quantité est = à 1
//       for (i = 0; i < totalCanape; i++) {
//         if (recupData[i].quantite == 1 && totalCanape == 1) {
//           return (
//             localStorage.removeItem("produit"),
//             (location.href = "cart.html")

//           )
//         }
//         // supression du local storage lorsque la quantité est = 1 et que plusieurs autres produits sont dans le local storage
//         if (recupData[i].quantite == 1 && totalCanape != 1 && recupData[i]._id == supp.dataset.id && recupData[i].couleur == supp.dataset.color) {
//           recupData.splice(i, 1)
//           localStorage.setItem('produit', JSON.stringify(recupData));
//           location.href = "cart.html"
//           console.log('un produit en moins')

//         }

//         // comparaison entre les données récupérer et les dataset si ces derniers correspondent la supression de la quantité et éfféctuer par décrémentation.
//         if (recupData[i]._id == supp.dataset.id && recupData[i].couleur == supp.dataset.color) {
//           return (recupData[i].quantite--, localStorage.setItem("produit", JSON.stringify(recupData)),
//             (document.querySelectorAll('.qte-p')[i].textContent = `Qté: ${recupData[i].quantite}`),
//             (document.querySelectorAll(".prix-a-jour")[i].textContent = `${recupData[i].quantite * produits} E `), (document.querySelectorAll('.quantity')[i].value = `${recupData[i].quantite}`), console.log('qntit--'))

//         };
//       };


//     });

//   });


// };

// const sommeCanap = async (panierAffichage, suppQuantite, ajoutQuantite) => {
//   // attendre que les fonctions soient traités
//   await panierAffichage
//   await ajoutQuantite
//   await suppQuantite

//   console.log('calc les prdts')

//   let canapePrix = [];
//   let qteTotal = [];

//   let newStorage = JSON.parse(localStorage.getItem("produit"));

//   let displayQte = document.querySelectorAll('.qte-p');
//   console.log(displayQte)

//   newStorage.forEach((canape) => {

//     canapePrix.push( produits* canape.quantite);
//     qteTotal.push(canape.quantite);
//     console.log(canapePrix);
//     console.log(qteTotal);



//   })

//   document.getElementById('totalQuantity').textContent = `${eval(qteTotal.join("+"))} `
//   document.getElementById('totalPrice').textContent = `${eval(canapePrix.join("+"))}`
// }



// // ***************validation de formulaire******************** 


// let form = document.querySelector('#formulaire');

// const button=document.getElementById('order')

// // const prenom=document.getElementById('');
// // const nom=document.getElementById('');
// // const email=document.getElementById('');
// // const adresse=document.getElementById('');
// // const ville=document.getElementById('');

// // let valuePrenom, valueNom ,valueEmail,valueVille,valueAdresse

// // prenom.addEventListener('input',(e)=>{

// //   valuePrenom;
// //   if(e.target.value.length==0){
// //     valuePrenom=null
// // console.log(nada)
// // console.log( )

// //   }else if (e.target.value.match(/^[a-z] [A-Z]{3,20}/)){

    

// //   }
// // })


// button.disabled=true

// let validation=0

// form.email.addEventListener('change', (e) => {
//   let emailRegExp = new RegExp(
//     "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$"
//   );

//   let testEmail = emailRegExp.test(e.target.value)
  
//   if (testEmail) {

//     document.getElementById('emailErrorMsg').innerHTML = "email valide"
//     validation+=1
//     if(validation===5){button.disabled=false}
    
//     console.log("validation"+validation)
    
//   } else {
//     document.getElementById('emailErrorMsg').innerHTML = "email non valide"
//   }

// })

// form.firstName.addEventListener('change', (e) => {

//   let firstNameRegx = new RegExp("^[a-zA-Z]{2,10}$")
//   let inputValue = e.target.value
//   let suivant = document.getElementById('firstNameErrorMsg')
//   let testFname = firstNameRegx.test(inputValue)
//   console.log(testFname);
//   if (testFname) {
//     suivant.innerHTML = 'prenom valide'
//     validation+=1
//     console.log("validation"+validation)
//   } else {
//     suivant.innerHTML = 'prenom invalide'

//   }

// })

// form.lastName.addEventListener('change', (e) => {

//   let lastNameRegx = new RegExp("^[a-zA-Z]{2,10}$")
//   let inputValue = e.target.value
//   let suivant = document.getElementById('lastNameErrorMsg')
//   let testLname = lastNameRegx.test(inputValue)
//   console.log(testLname);
//   if (testLname) {
//     suivant.innerHTML = 'Nom valide'
//     validation+=1
//     console.log("validation"+validation)
//   } else {
//     suivant.innerHTML = 'Nom invalide'

//   }

// })

// form.city.addEventListener('change', (e) => {

//   let cityRegx = new RegExp("^[a-zA-Z]{2,10}$")
//   let suivant = document.getElementById('cityErrorMsg')
//   let inputValue = e.target.value
//   let testCity = cityRegx.test(inputValue)
//   console.log(testCity);
//   if (testCity) {
//     suivant.innerHTML = 'ville valide'
//     validation+=1
//     console.log("validation"+validation)

//   } else {
//     suivant.innerHTML = 'veuillez saisir une ville'

//   }

// })

// form.address.addEventListener('change', (e) => {

//   let inputValue = e.target.value
//   let valid = false;
//   let msg;
//   let messgErr = document.getElementById('addressErrorMsg')
//   if (inputValue.length < 4 && !/[a-zA-Z]/.test(inputValue)) {

//     msg = "vous devez saisir un numero de voie et nom de voie"
//   } else if (!/[0-9]/.test(inputValue)) {

//     msg = "l'adresse doit contenir un numero de voie"
//   } else {
//     valid = true
//     validation+=1
    
//   }

//   if (valid) {
//     messgErr.innerHTML = "l'adresse est valide"
    
    

//   } else {
//     messgErr.innerHTML = msg

//   }
 
// })






// //****************envoi du formulaire*****************

// const envoiFormulaire = async (canap, panierAffichage) => {


//   await panierAffichage;


//   document.getElementById('order').addEventListener('click', (e) => {
//     e.preventDefault();


//     let panier = [];

//     for (canap of recupData) {

//       panier.push(canap._id)
//     }


//     let order = {

//       contact: {
//         firstName: firstName.value,
//         lastName: lastName.value,
//         address: address.value,
//         city: city.value,
//         email: email.value
//       },
//       products: panier
//     }
//     console.log(order);

//     fetch("http://localhost:3000/api/products/order", {

//       method: "POST",

//       headers: {
//         "content-Type": "application/json"
//       },

//       body: JSON.stringify(order)

//     }).then((response) => {


//       if (response.ok) {
//         return response.json()
//       }

//     }).then((data) => {
//       localStorage.clear();
//       location.href = `confirmation.html?commande=${data.orderId}`
//     })
//       .catch((err) => console.log(err));
//   })

// }

// envoiFormulaire();

let recupData = JSON.parse(localStorage.getItem("produit"));


const panierAffichage= async ()=>{

  if (recupData){
console.log(recupData)
    await recupData

    for (let Kanap of recupData) {
        let item = {
            Id : Kanap._id,
            color : Kanap.couleur,
            quantity : Kanap.quantite,
        }

       await fetch("http://localhost:3000/api/products/" + item.Id)
        .then(function(res){
            if(res.ok){
            return res.json();
            }
        })

        .then(function (kanap){

            let section = document.getElementById("cart__items");

            let article = document.createElement("article");
                article.classList.add("cart__item");
                article.setAttribute("data-id", `${item.Id}`)
                article.setAttribute("data-color", `${item.color}`)

            let itemImg = document.createElement("div");
                itemImg.classList.add("cart__item__img");

            let image = document.createElement("img");
                image.src = kanap.imageUrl;
                image.alt = kanap.altTxt;

            let itemContent = document.createElement("div");
                itemContent.classList.add("cart__item__content");

            let itemDesc = document.createElement("div");
                itemDesc.classList.add("cart__item__content__description");

            let h2 = document.createElement("h2");
                h2.classList.add("productName");
                h2.innerHTML = kanap.name;

            let color = document.createElement("p");
                    color.innerHTML = item.color;

            let price = document.createElement("p");
            price.classList.add("prix-a-jour");
                price.innerHTML = kanap.price*item.quantity +(' €');

            let itemSettings = document.createElement("div");
                itemSettings.classList.add("cart__item__content__settings");

            let itemSetQuantity = document.createElement("div");
                itemSetQuantity.classList.add("cart__item__content__settings__quantity");

// itemSetQuantity.innerHTML=` <p class="qte-p">Qté : ${item.quantity}</p>
// <input type="number" class="itemQuantity quantity" data-id="${item.Id}" data-color="${item.color}"  name="itemQuantity" min="1" max="100" value="${item.quantity}">`

            let nomQte = document.createElement("p");
            nomQte.classList.add("qte-p")
                nomQte.innerHTML = (`Qté :${item.quantity}` );

            let productQuantity = document.createElement("input");
                itemSetQuantity.appendChild(productQuantity);
                productQuantity.value = item.quantity;  
                productQuantity.className = "itemQuantity quantity ";                
                productQuantity.setAttribute("type", "number");
                productQuantity.setAttribute("min", "1");
                productQuantity.setAttribute("max", "100");
                productQuantity.setAttribute("name", "itemQuantity");                
                productQuantity.setAttribute("data-id", `${item.Id}`);
                productQuantity.setAttribute("data-price", `${kanap.price}`);
                productQuantity.setAttribute("data-color", `${item.color}`);
                

            let itemDelete = document.createElement("div");
                itemDelete.classList.add("cart__item__content__settings__delete");

            let deleteAccept = document.createElement("button");
                deleteAccept.classList.add("deleteItem");
                deleteAccept.setAttribute("data-id", `${item.Id}`)
                deleteAccept.setAttribute("data-color", `${item.color}`)
                deleteAccept.innerHTML = ('Supprimer');

            section.appendChild(article);

            article.appendChild(itemImg);
            article.appendChild(itemContent);

            itemImg.appendChild(image);

            itemContent.appendChild(itemDesc);

            itemDesc.appendChild(h2);
            itemDesc.appendChild(color);
            itemDesc.appendChild(price);

            article.appendChild(itemSettings);

            itemSettings.appendChild(itemSetQuantity);

            itemSetQuantity.appendChild(nomQte);
            itemSetQuantity.appendChild(productQuantity);

            article.appendChild(itemDelete);

            itemDelete.appendChild(deleteAccept);    
            
            ajoutQuantite(kanap)
            sommeCanap(kanap)
        })    

        function ajoutQuantite (kanap) {
          
  console.log('pluplus');

  let ajoutQte = document.querySelectorAll('.quantity');
  
  ajoutQte.forEach((element) => {
    console.log(element)
    element.addEventListener('change', (e) => {

      for (i = 0; i < recupData.length; i++) {

        if (recupData[i]._id == element.dataset.id && recupData[i].couleur == element.dataset.color) {
          sommeCanap(kanap)
          let quantite = e.target.value;
            recupData[i].quantite = quantite;
            console.log(recupData[i].quantite);
            localStorage.setItem("produit", JSON.stringify(recupData))
            
            return( (document.querySelectorAll('.qte-p')[i].textContent = `Qté: ${recupData[i].quantite}`),
            (document.querySelectorAll(".prix-a-jour")[i].textContent = `Prix: ${recupData[i].quantite * element.dataset.price} E `))
        
                    
        }
    
        
      }
    })
  });
}

async function sommeCanap  (kanap,ajoutQuantite)  {
  
  
await ajoutQuantite

  console.log('calc les prdts')

  let canapePrix = [];
  let qteTotal = [];

  let newStorage = JSON.parse(localStorage.getItem("produit"));

  let displayQte = document.querySelectorAll('.qte-p');
  

  newStorage.forEach((canape) => {

    canapePrix.push( kanap.price * canape.quantite);
    qteTotal.push(canape.quantite);
    console.log(canapePrix);
    console.log(qteTotal);



  })
  return((document.getElementById('totalQuantity').textContent = `${eval(qteTotal.join("+"))} `),
  (document.getElementById('totalPrice').textContent = `${eval(canapePrix.join("+"))}`))
  
}

         
    }
  
    suppQuantite()
    
}

}




panierAffichage();




function suppQuantite   () {

  
  console.log('moinmoins')
    let boutonSupp = document.querySelectorAll(".deleteItem");
  console.log(boutonSupp)
  
    boutonSupp.forEach((supp) => {
  
      supp.addEventListener("click", () => {
  
  
        let totalCanape = recupData.length;
        //supression du local storage lorsqu'il y a 1 seul entité de produit et que sa quantité est = à 1
        console.log(totalCanape)
        for (i = 0; i < totalCanape; i++) {
          if ( totalCanape == 1) {
            return (
              localStorage.removeItem("produit"),
              (location.href = "cart.html")
  
            )
          }
          // supression du local storage lorsque la quantité est = 1 et que plusieurs autres produits sont dans le local storage
          // if (recupData[i].quantite == 1 && totalCanape != 1 && recupData[i]._id == supp.dataset.id && recupData[i].couleur == supp.dataset.color) {
          //   recupData.splice(i, 1)
          //   localStorage.setItem('produit', JSON.stringify(recupData));
          //   location.href = "cart.html"
          //   console.log('un produit en moins')
  
          // }
  
          // comparaison entre les données récupérer et les dataset si ces derniers correspondent la supression de la quantité et éfféctuer par décrémentation.
          if ( totalCanape != 1 && recupData[i]._id == supp.dataset.id && recupData[i].couleur == supp.dataset.color) {
            recupData.splice(i, 1)
            localStorage.setItem('produit', JSON.stringify(recupData));
            location.href = "cart.html"
            console.log('un produit en moins')
            return 
  
          };
        };
  
  
      });
  
    });
  
  
  };



// ***************validation de formulaire******************** 


let form = document.querySelector('#formulaire');

const button=document.getElementById('order')


button.disabled=true

let validation=0

form.email.addEventListener('change', (e) => {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$"
  );

  let testEmail = emailRegExp.test(e.target.value)
  
  if (testEmail) {

    document.getElementById('emailErrorMsg').innerHTML = "email valide"
    validation+=1
    if(validation===5){button.disabled=false}
    
    console.log("validation"+validation)
    
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
    validation+=1
    console.log("validation"+validation)
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
    validation+=1
    console.log("validation"+validation)
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
    validation+=1
    console.log("validation"+validation)

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
    validation+=1
    
  }

  if (valid) {
    messgErr.innerHTML = "l'adresse est valide"
    
    

  } else {
    messgErr.innerHTML = msg

  }
 
})

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