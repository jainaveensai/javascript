const cart = ['shoes', 'pants', 'kurta']

api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet()
        })
    })
})

//promiss chaining

createOrder()
    .then(orderId => proceedToPayment(orderId))
    .then(paymentId => showOrderSummary(paymentId))
    .then(walletId => updateWallet(walletId))