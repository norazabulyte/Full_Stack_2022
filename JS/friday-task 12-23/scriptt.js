let addToCartBtns = document.getElementsByClassName('btn-info')
let mainContainer = document.getElementsByTagName('tbody')[0]
let quantityFields = document.getElementsByClassName('num')
let delete_buttons = document.getElementsByClassName('btn-danger')

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener('click', addToCart)
}

function addToCart(event) {
    let btn = event.target;
    let btn_parent = btn.parentElement
    let btn_gparent = btn.parentElement.parentElement
    let itemName = btn_parent.children[0].innerText
    let itemPrice = btn_parent.children[1].innerText
    let itemImage = btn_gparent.children[0].src

    let itemContainer = document.createElement('tr')
    itemContainer.innerHTML = itemContainer.innerHTML = `
    <td><img class="" src=${itemImage} width="40" alt=""></td>
    <td><h3 class = "item-name">${itemName}</h3></td>
    <td class="item-price"><h3>${itemPrice}</h3></td>
    <td><input type = 'number' class = 'num' value = '1'></td>
    <td class="total-price"><h3>${itemPrice}</h3></td>
    <td><button type="button" class="btn btn-danger">Remove</button></td>`;

    mainContainer.append(itemContainer)

    for (let i = 0; i < quantityFields.length; i++) {
        quantityFields[i].value = 1
        quantityFields[i].addEventListener('change', totalCost)

    }

    for (let i = 0; i < delete_buttons.length; i++) {
        delete_buttons[i].addEventListener('click', removeItem)
    }

    grandTotal()

    function totalCost(event) {
        let quantity = event.target
        quantity_parent = quantity.parentElement.parentElement
        price_field = quantity_parent.getElementsByClassName('item-price')[0]
        total_field = quantity_parent.getElementsByClassName('total-price')[0]
        price_field_content = price_field.innerText.replace('$', '')
        total_field.children[0].innerText = '$' + quantity.value * price_field_content
        grandTotal()
        if (isNaN(quantity.value) || quantity.value <= 0) {
            quantity.value = 1
        }



    }
    function grandTotal() {
        let total = 0
        let grand_total = document.getElementsByClassName('grand-total')[0]
        all_total_fields = document.getElementsByClassName('total-price')
        for (let i = 0; i < all_total_fields.length; i++) {
            all_prices = Number(all_total_fields[i].innerText.replace('$', ''))
            total += all_prices
        }
        grand_total.children[0].innerText = "$" + total
        grand_total.children[0].style.fontWeight = 'bold'
        console.log(total)
    }


    function removeItem(event) {
        del_btn = event.target
        del_btn_parent = del_btn.parentElement.parentElement
        del_btn_parent.remove()
        console.log(del_btn)
        grandTotal()

    }
}
