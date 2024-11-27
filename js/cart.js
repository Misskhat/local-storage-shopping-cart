const addProduct = () => {
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const name = productName.value;
    const quantity = productQuantity.value;
    productName.value = '';
    productQuantity.value = '';
    console.log(name, quantity);
    showProduct(name, quantity);
    saveProductToLocalStorage(name, quantity)
}

const showProduct = (name, quantity) => {
    const ul = document.getElementById('product-ui');
    const li = document.createElement('li');
    li.innerHTML = `${name}: ${quantity}`;
    ul.appendChild(li);
}

const getProductfromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    let cart = {}
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart;
}

const saveProductToLocalStorage = (name, quantity) =>{
    const cart = getProductfromLocalStorage();
    cart[name] = quantity;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
}  

const displayProductFromLocalStorage = () => {
    const saveProduct = getProductfromLocalStorage('cart');
    for (const product in saveProduct) {
        const quantity = saveProduct[product]
         showProduct(product, quantity)
    }
}

displayProductFromLocalStorage()