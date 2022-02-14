document.getElementById("detail-submit-btn").addEventListener("click", function () {
    const buyerDetails = document.getElementById("buyer-details-input");
    const buyerInfo = document.getElementById("buyer-info")

    buyerInfo.innerText = buyerDetails.value
    buyerDetails.value = ""
})

function element(params) {
    const elements = document.createElement(params)
    return elements
}
function elementId(params) {
    const element = document.getElementById(params)
    return element
}



document.getElementById("add-details-btn").addEventListener("click", function () {
    // const item = document.getElementById("item-name-input")
    // const price = document.getElementById("item-price-input")
    // const quantity = document.getElementById("item-quantity-input")

    const item = elementId("item-name-input")
    const price = elementId("item-price-input")
    const quantity = elementId("item-quantity-input")

    const itemPrice = parseFloat(price.value)
    const itemQuantity = parseInt(quantity.value)

   // console.log(item.value, price.value, quantity.value);
    const tHead = document.getElementById("info-table")
    
    const tr = element("tr")
    const tdName = element("td")
    const tdPrice = element("td")
    const tdQuantity = element("td")
    const tdTotal = element("td")

    // const tr = document.createElement("tr")
    // const tdName = document.createElement("td")
    // const tdPrice = document.createElement("td")
    // const tdQuantity = document.createElement("td")
    // const tdTotal = document.createElement("td")


    tdTotal.classList.add("total-price")

    tdName.innerText = item.value
    tdPrice.innerText = price.value
    tdQuantity.innerText = quantity.value
    tdTotal.innerText = itemPrice * itemQuantity

    tr.appendChild(tdName)
    tr.appendChild(tdPrice)
    tr.appendChild(tdQuantity)
    tr.appendChild(tdTotal)

    tHead.appendChild(tr)


    
   
    function subTotalPrice() {
        const totalPrice = document.getElementsByClassName("total-price")
        let getSubtotal = 0
        for (let i = 0; i < totalPrice.length; i++) {
            getSubtotal = getSubtotal + parseFloat(totalPrice[i].innerText)
            
        }
        return getSubtotal
        
    }
    // const priceSubtotal = document.getElementById("sub-total")
    // const taxid = document.getElementById("tax")
    // const grandTotalId = document.getElementById("grand-total")

    const tax = subTotalPrice() * 20 / 100
    const grandTotal = subTotalPrice() + tax
    console.log(grandTotal);

    elementId("sub-total").innerText = subTotalPrice()
    elementId("tax").innerText = tax
    elementId("grand-total").innerText = grandTotal
    elementId("grand-total-2").innerText = grandTotal

    

   

    
})