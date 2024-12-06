// Make home button link to products page
var homeButton = document.getElementById('home-start-button')
if(homeButton) {
    homeButton.onclick = function () {
        location.href = "index.html";
    };
}

// Store references to product page elements
function clearReceipt()
{




}





/*
            <div class="reciept-items-container">
                 <!-- receipt item-->
                <div class="reciept-item" data-name="Water Bottle" data-amount="2" data-price="2">
                    <span class="reciept-item-title">Water Bottle</a> <span class="reciept-item-amount">x2</span> <span class="reciept-item-price">$2</span>
                </div>
                 <!-- receipt item-->
                <div class="reciept-item" data-name="Soda" data-amount="3" data-price="6">
                    <span class="reciept-item-title">Soda</span> <span class="reciept-item-amount">x3</span> <span class="reciept-item-price">$6</span>
                </div>
            </div>
            <div class="reciept-total" data-total="20">
                <h3>Total - $20</h3>
            </div>
*/




// Add itemType dropdown HTML
// Completed transaction popup has okay button that returns to home page


// Filtering products display by entered product name and itemType when user presses enter on search box





// Cancel button should remove everything from receipt
function clearReceipt() {
    var receiptItemsContainer = document.querySelector('.receipt-items-container')
    var receiptTotal = document.querySelector('.receipt-total')

    receiptItemsContainer.innerHTML = ''
    receiptTotal.setAttribute('data-total', '0')
    receiptTotal.innerHTML = '<h3>Total - $0 </h3>'
}

document.getElementById('pay-cancel-button').onclick = clearReceipt

// Pay button should show payment popup
    

// Add button on a product should add its information to the receipt and update the current receipt total

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

// Payment popup cancel button should close payment popup


// Payment popup cash/credit button should display popup for "Transaction completed"


// Completed transaction popup okay button should return to home page


/*
        "name": "Beige Bed",
        "price": "399.99",
        "image": "Beds/Beige_Bed_F.avif",
        "mouseImage": "Beds/Beige_Bed_S.avif",
        "amount": "4",
        "itemType": "Beds"
*/