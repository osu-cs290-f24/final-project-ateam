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