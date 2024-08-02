let products = [
    {
        img: './assets/images/image-baklava-desktop.jpg',
        description: "A rich, sweet dessert pastry made of layers of filo filled with chopped nuts and sweetened with syrup or honey.",
        title: 'Baklava',
        price: '$24.00'
    },
    {
        img: './assets/images/image-brownie-desktop.jpg',
        description: "A chocolate brownie is a square or rectangular chocolate baked confection.",
        title: 'Brownie',
        price: '$15.00'
    },
    {
        img: './assets/images/image-cake-desktop.jpg',
        description: "A rich, sweet dessert cake.",
        title: 'Cake',
        price: '$30.00'
    },
    {
        img: './assets/images/image-creme-brulee-desktop.jpg',
        description: "Crème brûlée, also known as burned cream, burnt cream or Trinity cream, is a dessert consisting of a rich custard base topped with a texturally contrasting layer of hardened caramelized sugar.",
        title: 'Crème Brûlée',
        price: '$18.00'
    },
    {
        img: './assets/images/image-meringue-desktop.jpg',
        description: "Meringue is a type of dessert or candy, often associated with French, Swiss, and Italian cuisine, traditionally made from whipped egg whites and sugar.",
        title: 'Meringue',
        price: '$12.00'
    },
    {
        img: './assets/images/image-waffle-desktop.jpg',
        description: "A waffle is a dish made from leavened batter or dough that is cooked between two plates that are patterned to give a characteristic size, shape, and surface impression.",
        title: 'Waffle',
        price: '$10.00'
    },
    {
        img: './assets/images/image-panna-cotta-desktop.jpg',
        description: "Panna cotta is an Italian dessert of sweetened cream thickened with gelatin and molded.",
        title: 'Panna Cotta',
        price: '$22.00'
    },
    {
        img: './assets/images/image-tiramisu-desktop.jpg',
        description: "Tiramisu is a coffee-flavored Italian dessert.",
        title: 'Tiramisu',
        price: '$25.00'
    },
];

let container = document.getElementsByClassName('main')[0];

let main = document.createElement('section');
let cards = document.createElement('div');

products.map(function(prd) {
    let card = document.createElement('div');
    let cardImg = document.createElement('div');
    let cardBtn = document.createElement('div');
    let addBtn = document.createElement('button');
    let textCardBtn = document.createTextNode('Add to Cart');
    let desBox = document.createElement('div');
    let spanTitle = document.createElement('span');
    let hdes = document.createElement('h4');
    let spanPrice = document.createElement('span');
    let title = document.createTextNode(prd.title);
    let des = document.createTextNode(prd.description);
    let price = document.createTextNode(prd.price);
    let img = document.createElement('img');
    img.src = prd.img;

    //  add items
    main.appendChild(cards);
    cards.appendChild(card);
    // card element
    card.appendChild(cardImg);
    card.appendChild(cardBtn);
    card.appendChild(desBox);
    // element inside cards
    cardImg.appendChild(img);
    // all element in description card
    desBox.appendChild(spanTitle);
    desBox.appendChild(hdes);
    desBox.appendChild(spanPrice);
    // display content in elements
    spanTitle.appendChild(title);
    hdes.appendChild(des);
    spanPrice.appendChild(price);
    // add button
    cardBtn.appendChild(addBtn);
    addBtn.appendChild(textCardBtn);
    //  add all classes style
    cards.classList.add('cards');
    card.classList.add('card');
    desBox.classList.add('description');
    addBtn.classList.add('add');
    spanTitle.classList.add('title');
    spanPrice.classList.add('price');
});

// append the main section to the container
container.appendChild(main);
