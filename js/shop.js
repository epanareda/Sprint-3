// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
// var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
/*
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    for(const i in products) {
        if(products[i]["id"] == id) {
            // 2. Add found product to the cartList array
            // console.log(products[i]);
            cartList.push(products[i]);
            // console.log(cartList);
        }
    }
    // calculateTotal();
    // generateCart();
}
*/

// Exercise 2
function cleanCart() {
    // console.log(cartList);
    // cartList.splice(0, cartList.length);
    cart.splice(0, cart.length);
    // console.log(cartList);

    // AFTER PRINTING THE CART THIS FUNCTION IS UPDATED AS FOLLOWS SO IF THE CART IS CLEANED ITS VALUES WILL BE REMOVED
    printCart();
    cart_number_updater();
}

// Exercise 3
function calculateTotal() {
    /*
        THIS PIECE OF CODE IS COMMENTED BECAUSE IS THE ANSWER TO EXERCICE 3, HOWEVER, THIS DOESN'T CONSIDER THE DISCOUNTS ADDED LATER

        // Calculate total price of the cart using the "cartList" array
        total = 0;
        for(const i in cartList) {
            // console.log(cartList[i]["price"]);
            total += cartList[i]["price"];
        }
        // console.log(Math.round(total * 100) / 100);
        return Math.round(total * 100) / 100;
    */
   
    // THIS SECOND PART USES CART TO CALCULATE THE TOTAL PRICE, SO IT'S TO BE USED AFTER THE CART VARIABLE AND THE DISCOUNTS ARE CALCULATED
    total = 0
    for(const i in cart) {
        if("subtotalWithDiscount" in cart[i]) {
            total += cart[i]["subtotalWithDiscount"]
        } else {
            total += cart[i]["subtotal"]
        }
    }

    total = Math.round(total * 100) / 100 // Making sure the total price has only 2 decimal positions
}

// Exercise 4
/*
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    cart.splice(0, cart.length);
    
    for(const i in cartList) {
        if(cart.length == products.length) {
            for(const j in cart) {
                if(cartList[i]["id"] == cart[j]["id"]) {
                    cart[j]["quantity"]++;
                    cart[j]["subtotal"] += cart[j]["price"];
                    break;
                }
            }

        } else if (cart.length == 0) {
            cart.push(cartList[i]);
            cart[cart.length-1]["quantity"] = 1;
            cart[cart.length-1]["subtotal"] = cartList[i]["price"];

        } else {
            let cart_conatins_product = false;
            for(const j in cart) {
                if(cartList[i]["id"] == cart[j]["id"]) {
                    cart[j]["quantity"]++;
                    cart[j]["subtotal"] += cart[j]["price"];
                    cart_conatins_product = true;
                    break;
                }
            }

            if(!cart_conatins_product) {
                cart.push(cartList[i]);
                cart[cart.length-1]["quantity"] = 1;
                cart[cart.length-1]["subtotal"] = cartList[i]["price"];
            }
        }
    }
    // console.log(cart);
}
*/

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    // The promotion are added "manually" because the "offert" property in the objects doesn't match with the description in the exercice
    for(const i in cart) {
        if(cart[i]["id"] == 1 && cart[i]["quantity"] >= 3) {
            cart[i]["subtotalWithDiscount"] = 10 * cart[i]["quantity"];
        }
        if(cart[i]["id"] == 3 && cart[i]["quantity"] >= 10) {
            cart[i]["subtotalWithDiscount"] = Math.round(cart[i]["subtotal"] * 2/3 * 100) / 100;
        }
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let cart_list = document.getElementById("cart_list");
    let total_price = document.getElementById("total_price");

    cart_list.innerHTML = ``;

    // generateCart();
    applyPromotionsCart();
    calculateTotal();
    
    for(const i in cart) {
        if("subtotalWithDiscount" in cart[i]) {
            cart_list.innerHTML +=  `
            <tr>
                <th scope="row">${cart[i]["name"]}</th>
                <td>$${cart[i]["price"]}</td>
                <td>
                <div class="d-flex justify-content-end">
                    <span>${cart[i]["quantity"]}</span>
                    <button class="btn btn-secondary py-0 px-2 ms-1 pb-1 fw-bold" onclick="removeFromCart(${cart[i]["id"]})">
                        -
                    </button>
                </div>
                </td>
                <td>$${cart[i]["subtotalWithDiscount"]}</td>
            </tr>
            `;
        } else {
            cart_list.innerHTML +=  `
            <tr>
                <th scope="row">${cart[i]["name"]}</th>
                <td>$${cart[i]["price"]}</td>
                <td>
                    <div class="d-flex justify-content-end">
                        <span>${cart[i]["quantity"]}</span>
                        <button class="btn btn-secondary py-0 px-2 ms-1 pb-1 fw-bold" onclick="removeFromCart(${cart[i]["id"]})">
                            -
                        </button>
                    </div>
                </td>
                <td>$${cart[i]["subtotal"]}</td>
            </tr>
            `;
        }
    }

    total_price.innerHTML = total;
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    // Here it's just a merging of the code used for "buy" and "generateCart", resulting in remove the cartList array
    for(const i in products) {
        if(products[i]["id"] == id) {

            if(cart.length == products.length) {
                for(const j in cart) {
                    if(id == cart[j]["id"]) {
                        cart[j]["quantity"]++;
                        cart[j]["subtotal"] += cart[j]["price"];
                        break;
                    }
                }

            } else if (cart.length == 0) {
                cart.push(products[i]);
                cart[cart.length-1]["quantity"] = 1;
                cart[cart.length-1]["subtotal"] = products[i]["price"];
    
            } else {
                let cart_conatins_product = false;
                for(const j in cart) {
                    if(id == cart[j]["id"]) {
                        cart[j]["quantity"]++;
                        cart[j]["subtotal"] += cart[j]["price"];
                        cart_conatins_product = true;
                        break;
                    }
                }
    
                if(!cart_conatins_product) {
                    cart.push(products[i]);
                    cart[cart.length-1]["quantity"] = 1;
                    cart[cart.length-1]["subtotal"] = products[i]["price"];
                }
            }
        }
    }

    cart_number_updater();
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for(const i in cart) {
        if(cart[i]["id"] == id) {
            // Here the discount subtotals are removed when they doesn't apply anymore
            if((id == 1 && cart[i]["quantity"] == 3) || (id == 3 && cart[i]["quantity"] == 10)){
                delete cart[i]["subtotalWithDiscount"];
            }

            cart[i]["quantity"]--;
            cart[i]["subtotal"] -= cart[i]["price"];
            cart[i]["subtotal"] = Math.round(cart[i]["subtotal"] * 100) / 100 // Making sure the subtotal price has only 2 decimal positions

            // If the quantity is 0, the product is removed from the array cart
            if(cart[i]["quantity"] == 0) {
                cart.splice(i, 1);
            }
        }
    }

    // Refresh the products situation once removed
    printCart();
    cart_number_updater();
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}


// I didn't find anything in the exercice that requires to modify the number in the cart icon, but the following code attempts to do that
let cart_count = document.getElementById("count_product");

function cart_number_updater() {
    let num_products = 0;
    for(const i in cart) {
        num_products += cart[i]["quantity"];
    }

    cart_count.innerHTML = num_products;
}