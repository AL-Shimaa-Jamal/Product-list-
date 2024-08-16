let products = [
    {
        img: './assets/images/image-baklava-desktop.jpg',
        description: "A rich, sweet dessert pastry made of layers of filo filled with chopped nuts and sweetened with syrup or honey.",
        title: 'Baklava',
        price: 24.00
    },
    {
        img: './assets/images/image-brownie-desktop.jpg',
        description: "A chocolate brownie is a square or rectangular chocolate baked confection.",
        title: 'Brownie',
        price: 15.00
    },
    {
        img: './assets/images/image-cake-desktop.jpg',
        description: "A rich, sweet dessert cake.",
        title: 'Cake',
        price: 30.00
    },
    {
        img: './assets/images/image-creme-brulee-desktop.jpg',
        description: "Crème brûlée, also known as burned cream, burnt cream or Trinity cream, is a dessert consisting of a rich custard base topped with a texturally contrasting layer of hardened caramelized sugar.",
        title: 'Crème Brûlée',
        price: 18.00
    },
    {
        img: './assets/images/image-meringue-desktop.jpg',
        description: "Meringue is a type of dessert or candy, often associated with French, Swiss, and Italian cuisine, traditionally made from whipped egg whites and sugar.",
        title: 'Meringue',
        price: 12.00
    },
    {
        img: './assets/images/image-waffle-desktop.jpg',
        description: "A waffle is a dish made from leavened batter or dough that is cooked between two plates that are patterned to give a characteristic size, shape, and surface impression.",
        title: 'Waffle',
        price: 10.00
    },
    {
        img: './assets/images/image-panna-cotta-desktop.jpg',
        description: "Panna cotta is an Italian dessert of sweetened cream thickened with gelatin and molded.",
        title: 'Panna Cotta',
        price: 22.00
    },
    {
        img: './assets/images/image-tiramisu-desktop.jpg',
        description: "Tiramisu is a coffee-flavored Italian dessert.",
        title: 'Tiramisu',
        price: 25.00
    },
];

let container = document.getElementsByClassName('main')[0];
let main = document.createElement('section');
let cards = document.createElement('div');
let cartItems = [];
let cartCount = 0;
let cartTotal = 0;

products.forEach((prd) => {
    let card = document.createElement('div');
    let cardImg = document.createElement('div');
    let cardBtn = document.createElement('div');
    let addBtn = document.createElement('button');
    let textCardBtn = document.createTextNode('Add to Cart');

    let addImg = document.createElement('img');
    addImg.src = './assets/images/icon-add-to-cart.svg';
    addImg.alt = 'add img';

    let inc = document.createElement('img');
    inc.src = './assets/images/icon-increment-quantity.svg';
    inc.alt = 'increment';
    inc.title = 'increment';
    inc.classList.add('inc');

    let dec = document.createElement('img');
    dec.src = './assets/images/icon-decrement-quantity.svg';
    dec.alt = 'decrement';
    dec.title = 'decrement';
    dec.classList.add('dec');

    let desBox = document.createElement('div');
    let spanTitle = document.createElement('span');
    let hdes = document.createElement('h4');
    let spanPrice = document.createElement('span');
    let title = document.createTextNode(prd.title);
    let des = document.createTextNode(prd.description);
    let price = document.createTextNode(`$${prd.price.toFixed(2)}`);
    let img = document.createElement('img');
    img.src = prd.img;

    let incDecContainer = document.createElement('div');
    incDecContainer.classList.add('inc-dec-container');

    let counter = document.createTextNode(0);
    let counterSpan = document.createElement('span');
    counterSpan.classList.add('counter');
    counterSpan.appendChild(counter);

    main.appendChild(cards);
    cards.appendChild(card);
    card.appendChild(cardImg);
    card.appendChild(cardBtn);
    card.appendChild(desBox);

    cardImg.appendChild(img);
    desBox.appendChild(spanTitle);
    desBox.appendChild(hdes);
    desBox.appendChild(spanPrice);

    spanTitle.appendChild(title);
    hdes.appendChild(des);
    spanPrice.appendChild(price);

    cardBtn.appendChild(addBtn);
    addBtn.appendChild(addImg);
    addBtn.appendChild(textCardBtn);

    incDecContainer.appendChild(dec);
    incDecContainer.appendChild(counterSpan);
    incDecContainer.appendChild(inc);

    cards.classList.add('cards');
    card.classList.add('card');
    desBox.classList.add('description');
    addBtn.classList.add('add');
    spanTitle.classList.add('title');
    spanPrice.classList.add('price');

    addBtn.addEventListener('click', function () {
        addBtn.appendChild(incDecContainer);
        addBtn.style.backgroundColor = 'rgb(210, 18, 18)';
        addBtn.style.color = 'white';
        textCardBtn.textContent = '';
        addImg.style.display = 'none';
        addBtn.style.width = "50%";
        addToCart(prd, counterSpan);
    });

    inc.addEventListener('click', function () {
        counterSpan.innerText++;
        updateCart(prd, counterSpan.innerText);
    });

    dec.addEventListener('click', function () {
        if (counterSpan.innerText > 0) {
            counterSpan.innerText--;
            updateCart(prd, counterSpan.innerText);
        }
    });
});

container.appendChild(main);

function addToCart(product, counterSpan) {
    let existingProduct = cartItems.find(item => item.title === product.title);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cartItems.push({ ...product, quantity: 1 });
    }
    updateCartDisplay();
}

function updateCart(product, quantity) {
    let existingProduct = cartItems.find(item => item.title === product.title);
    if (existingProduct) {
        existingProduct.quantity = quantity;
        if (quantity === 0) {
            cartItems = cartItems.filter(item => item.title !== product.title);
        }
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    let itemsContainer = document.querySelector('.items');
    itemsContainer.innerHTML = '';
    let cartCount = 0;
    let cartTotal = 0;

    cartItems.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = `
            <div>
                <h4 class="prdTitle">${item.title}</h4>
                <span class="prdnum">${item.quantity}</span>
            </div>
            <div class="removeItem">
                <img src="./assets/images/icon-remove-item.svg" alt="">
            </div>
        `;
        itemsContainer.appendChild(li);
        cartCount += item.quantity;
        cartTotal += item.price * item.quantity;
    });

    document.querySelector('.check h2').innerText = `Your cart (${cartCount})`;
    document.querySelector('.total span:nth-child(2)').innerText = `$${cartTotal.toFixed(2)}`;
}

document.querySelector('.btn').addEventListener('click', function () {
    let orderList = document.querySelector('.order-list');
    orderList.innerHTML = '';

    if (cartItems.length > 0) {
        cartItems.forEach(item => {
            let li = document.createElement('li');
            li.innerText = `${item.quantity} x ${item.title}`;
            orderList.appendChild(li);
        });
    } else {
        orderList.innerHTML = '<li>No items in the cart.</li>';
    }

    document.getElementById('orderModal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('orderModal').style.display = 'none';
});