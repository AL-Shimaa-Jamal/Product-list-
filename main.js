products = [{
    img: './assets/images/image-baklava-desktop.jpg ',
    description: "Desserts Waffle with Berries Waffle",
    title:'Bakalva',
    price:'$ 24.00'
},{
    img: './assets/images/image-brownie-desktop.jpg ',
    description: "Desserts Waffle with Berries Waffle",
    title:'Bakalva',
    price:'$ 24.00'
},
{
    img: './assets/images/image-cake-desktop.jpg ',
    description: "Desserts Waffle with Berries Waffle",
    title:'Bakalva',
    price:'$ 24.00'
},
{
    img: './assets/images/image-creme-brulee-desktop.jpg',
    description: "Desserts Waffle with Berries Waffle",
    title:'Bakalva',
    price:'$ 24.00'
},
{
    img: './assets/images/image-meringue-desktop.jpg ',
    description: "Desserts Waffle with Berries Waffle",
    title:'Bakalva',
    price:'$ 24.00'
},
{
    img: './assets/images/image-waffle-desktop.jpg',
    description: "Desserts Waffle with Berries Waffle",
    title:'Bakalva',
    price:'$ 24.00'
},
{
    img: './assets/images/image-panna-cotta-desktop.jpg',
    description: "Desserts Waffle with Berries Waffle",
    title:'Bakalva',
    price:'$ 24.00'
},
{
    img: './assets/images/image-tiramisu-desktop.jpg',
    description: "Desserts Waffle with Berries Waffle",
    title:'Bakalva',
    price:'$ 24.00'
},


 ]



products.map(function(prd, i) {
    let main =document.createElement('main')
    let cards =document.createElement('div')
    let card = document.createElement('div')
    let cardImg = document.createElement('div')
    let cardBtn = document.createElement('div')
    let addBtn= document.createElement('button')
    let textCardBtn =document.createTextNode('add to card')
    let desBox= document.createElement('div')
    let spanTitle= document.createElement('span')
    let hdes= document.createElement('h4')
    let spanPrice= document.createElement('span')
    let title = document.createTextNode(prd.title)
    let des = document.createTextNode(prd.description)
    let price = document.createTextNode(prd.price)
    let img = document.createElement('img')
    img.src = prd.img

    //  add items
    main.appendChild(cards)
    cards.appendChild(card)
    // card element
    card.appendChild(cardImg)
    card.appendChild(cardBtn)
    card.appendChild(desBox)
    // element inside cards
    cardImg.appendChild(img)
    // all element in description card
    desBox.appendChild(title)  
    desBox.appendChild(spanTitle)  
    desBox.appendChild(hdes)  
    desBox.appendChild(spanPrice)
    // display content in elements  
    spanTitle.appendChild(title) 
    hdes.appendChild(des) 
    spanPrice.appendChild(price) 
    // add button 
    cardBtn.appendChild(addBtn)
    addBtn.appendChild(textCardBtn)
    //  add all classes style
    // body.classList.add('main')
    cards.classList.add('cards')
    card.classList.add('card')
    desBox.classList.add('description')
    addBtn.classList.add('add')
    spanTitle.classList.add('title')
    spanPrice.classList.add('price')
    // add all tobody
    document.body.appendChild(main)

})