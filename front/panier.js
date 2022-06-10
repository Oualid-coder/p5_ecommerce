
let recupData = JSON.parse(localStorage.getItem("produit"));


const panierAffichage= async ()=>{
  await recupData
  if (recupData){
console.log(recupData)
    

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
            price.setAttribute("data-price", `${kanap.price}`);
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
            
            ajoutQuantite()
            sommeCanap()
        })    

        function ajoutQuantite () {
          
  console.log('pluplus');

  let ajoutQte = document.querySelectorAll('.quantity');
  
  ajoutQte.forEach((element) => {
    console.log(element)
    element.addEventListener('change',(e) => {

      for (i = 0; i < recupData.length; i++) {
        sommeCanap()
        if (recupData[i]._id == element.dataset.id && recupData[i].couleur == element.dataset.color) {
          
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

async function sommeCanap  (ajoutQuantite)  {
  
  
await ajoutQuantite

  console.log('calc les prdts')


  let canapePrix = [];
  let qteTotal = [];
let tabprix=[]
  let newStorage = JSON.parse(localStorage.getItem("produit"));

  let displayQte = document.querySelectorAll('.itemQuantity');

  displayQte.forEach(elem=>{

    tabprix.push(elem.value*elem.dataset.price)
  })

  console.log(tabprix)
  newStorage.forEach((canape) => {
    
    // canapePrix.push( kanap.price * canape.quantite);
    qteTotal.push(canape.quantite);
    console.log(canapePrix);
    console.log(qteTotal);



  })

  return document.getElementById('totalQuantity').textContent = `${eval(qteTotal.join("+"))} `,
  document.getElementById('totalPrice').textContent = `${eval(tabprix.join("+"))}`
  

  
}

         
    }
  
    suppQuantite()
    
}else{

  let formulaireDisplay=document.getElementById('afficherLeFormulaire')
  formulaireDisplay.style.display="none"
  


  
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
    validation-=1
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
    if(validation===5){button.disabled=false}
    console.log("validation"+validation)
  } else {
    suivant.innerHTML = 'prenom invalide'
validation-=1
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
    if(validation===5){button.disabled=false}
    console.log("validation"+validation)
  } else {
    suivant.innerHTML = 'Nom invalide'
validation-=1
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
    if(validation===5){button.disabled=false}
    console.log("validation"+validation)

  } else {
    suivant.innerHTML = 'veuillez saisir une ville'
validation-=1
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
    if(validation===5){button.disabled=false}
    

  } else {
    messgErr.innerHTML = msg
validation-=1
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