// Store elements for popups
var popupBg = document.getElementById("popup-backdrop")
var payPopup = document.getElementById("payment-popup")

// Register payment toggle function to payment button
document.getElementById('pay-button').onclick = function() {  
    //popupBg.classList.toggle("hidden")
    payPopup.classList.toggle("hidden")
}



document.getElementById('payment-cancel')



/*
    <div id="payment-popup-header">
        <button type="button" id="payment-cancel-button">Cancel</button>
        <h1 id="payment-popup-title">Select Payment Method</h1>
    </div>
    <div class="payment-option">
        <button type="button" class="payment-button" id="payment-cash-button">Cash</button>
        <img src="https://img.freepik.com/free-psd/money-illustration-isolated_23-2151568528.jpg" alt="Cash icon" class="payment-option-img">
    </div>
    <div class="payment-option">
        <button type="button" class="payment-button" id="payment-card-button">Card</button>
        <img src="https://pngimg.com/d/credit_card_PNG100.png" alt="Card icon" class="payment-option-img">
    </div>
*/
// Payment popup cancel button should close payment popup

// Payment popup cash/credit button should display popup for "Transaction completed"