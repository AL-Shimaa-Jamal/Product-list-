products = [{
    img: '. / assets / images / image - baklava - desktop.jpg ',
    description: "Desserts Waffle with Berries Waffle"
}, {
    img: '. / assets / images / image - baklava - desktop.jpg ',
    description: "Desserts Waffle with Berries Waffle"
}, {
    img: '. / assets / images / image - baklava - desktop.jpg ',
    description: "Desserts Waffle with Berries Waffle"
}]
const main = document.getElementById('main')
products.map(function(prd, i) {
    let card = document.createElement('div')
    let title = document.createTextNode(prd.description)
    let img = document.createElement('img').src = `${prd.img}`
    card.appendChild(title)
    card.appendChild(img)
    document.body.appendChild(card)
    console.log(prd)

})