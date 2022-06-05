let orderId = document.getElementById('orderId');
let url = window.location.search
console.log(url)
let params = new URLSearchParams(url);
const urlOrderId = params.get('commande')
console.log(urlOrderId)



orderId.innerHTML = urlOrderId


const replaceUrl = () => {

    if (url) {
        let newUrl = document.location.href.replace(document.location.search, "");
        location.href = newUrl
    }


}


const redirection = () => {

    location.href = "index.html"
    return
}



setTimeout(redirection, 10000)

setTimeout(replaceUrl, 6000)