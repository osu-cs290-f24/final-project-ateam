/*
    HOME CODE
*/
// Make home button link to products page
var homeButton = document.getElementById('home-start-button')
if(homeButton) {
    homeButton.onclick = function () {
        location.href = "index.html";
    };
}

/*
    POPUP CODE
*/
// Store elements for popups
var popupBg = document.getElementById("popup-backdrop")
var payPopup = document.getElementById("payment-popup")
var transCompletePopup = document.getElementById("complete-trans-popup")

// Toggle display of payment popup
function togglePayPopup() {
    //popupBg.classList.toggle("hidden")
    payPopup.classList.toggle("hidden")
}
// Register payment toggle function to payment button and payment cancel button
document.getElementById('pay-button').onclick = togglePayPopup
document.getElementById('payment-cancel-button').onclick = togglePayPopup


// Toggle display of transaction complete popup
function toggleTransCompletePopup() {
    //popupBg.classList.toggle("hidden")
    transCompletePopup.classList.toggle("hidden")
}
// Register transaction complete toggle function to card and cash payment buttons
document.getElementById('payment-card-button').onclick = toggleTransCompletePopup
document.getElementById('payment-cash-button').onclick = toggleTransCompletePopup

// Make transaction complete okay button link to home page
document.getElementById('complete-trans-ok-button').onclick = function () {
    location.href = "home.html"
}

/*
    Products Page Code
*/
var productsContainer = document.getElementById('products')
var products = Array.from(productsContainer.children)

// Filtering products display by entered product name and itemType when user presses enter on search box
function filterProductsByType() {
    var selectedCategory = document.getElementById('filter-type').value

    productsContainer.innerHTML = ''

    products.forEach((product) => {
        var itemType = product.getAttribute('data-itemtype')
        if (selectedCategory === "" || itemType === selectedCategory) {
            //Add post back into container
            productsContainer.appendChild(product)
        } 
    })
}

document.getElementById('filter-type').onchange = filterProductsByType

// Cancel button should remove everything from receipt
function clearReceipt() {
    var receiptItemsContainer = document.querySelector('.receipt-items-container')
    var receiptTotal = document.querySelector('.receipt-total')

    receiptItemsContainer.innerHTML = ''
    receiptTotal.setAttribute('data-total', '0')
    receiptTotal.innerHTML = '<h3>Total - $0 </h3>'
}

document.getElementById('pay-cancel-button').onclick = clearReceipt

function addToReceipt(event) {
    // Get the product details
    var product = event.target.closest('.product')
    var name = product.getAttribute('data-name')
    var price = parseFloat(product.getAttribute('data-price'))

    // Get receipt container
    var receiptItemsContainer = document.querySelector('.receipt-items-container')
    var receiptTotalElement = document.querySelector('.receipt-total')

    // Check product is already in receipt
    var existingItem = receiptItemsContainer.querySelector(`[data-name="${name}"]`)

    // If in  receipt
    if (existingItem) {
        // Update amount of items in cart and cost associated
        var currentAmount = parseInt(existingItem.getAttribute('data-amount'))
        var newAmount = currentAmount + 1
        existingItem.setAttribute('data-amount', newAmount)
        existingItem.querySelector('.receipt-item-amount').textContent = `x${newAmount}`
        existingItem.querySelector('.receipt-item-price').textContent = `$${newAmount * price}`
    } else {
        // TODO: Add items when not already in receipt
        console.log("Item not in receipt yes")  
    }

    var currentTotal = parseFloat(receiptTotalElement.getAttribute('data-total'))
    var newTotal = currentTotal + price;
    receiptTotalElement.setAttribute('data-total', newTotal)
    receiptTotalElement.innerHTML = `<h3>Total - $${newTotal}</h3>`
}

// for every product-add-button, add the item to the receipt
document.querySelectorAll('.product-add-button').forEach((button) => {
    button.onclick = addToReceipt
})