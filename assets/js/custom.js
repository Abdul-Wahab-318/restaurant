//toggle Hidden navbar
var hiddenNavbar =document.querySelector('#hiddenNavbar');
var navbarToggler = document.querySelector('#navbarToggler');

navbarToggler.addEventListener('click', function(){
    hiddenNavbar.classList.toggle('hide-collapse');
    hiddenNavbar.classList.toggle('show-collapse');
})

// cart functionality
let cartParent = document.querySelector('#cartParent');
let hoverCart = document.querySelector('#hoverCart');
let cartDetails = document.querySelector('#cartDetails');
function toggleCartDetails(){
    console.log('clickable')
    cartDetails.classList.toggle('show-cart-details');
    hoverCart.style.display='none';
    setTimeout(function(){
        hoverCart.style.display='block';
    },300)
}
cartParent.addEventListener('click',function(){
    toggleCartDetails();
})

//delete cart item
var cartCross = document.getElementsByClassName('cart-item-cross');

function deleteCartItem(e)
{
    e.parentElement.style.display="none"
    // taking item price removing dollar sign and converting to number
    var itemPrice = e.nextElementSibling.nextElementSibling.lastElementChild.innerHTML;
    var arrayItem = itemPrice.split("");
    arrayItem.shift();
    arrayItem = arrayItem.join("");
    var numberItem = parseInt(arrayItem);
    console.log(`numberItem : ${numberItem}`);
// taking subtotal price removing dollar sign and converting to number
    var bill = document.getElementById('bill').innerHTML;
    var arrayBill=bill.split("");
    arrayBill.shift();
    arrayBill = arrayBill.join("");
    var numberBill = parseInt(arrayBill);
    console.log(`numberBill : ${numberBill}`);
    numberBill = numberBill - numberItem;
    console.log(numberBill);
    //CONVERTING BACK TO STRING AND ADDING DOLLAR SIGN

    bill = String(numberBill);
    arrayBill = bill.split("");
    arrayBill.unshift('$');
    bill = arrayBill.join("");
    console.log(bill)

    document.getElementById('bill').innerText = bill;

    // reducing item counter
    var itemCounter =document.querySelector('#itemCounter').innerText;
    itemCounterArray = itemCounter.split("");
    itemCounterArray[0]--;
    itemCounter = itemCounterArray.join("");
    document.querySelector('#itemCounter').innerText = itemCounter;
    console.log(itemCounterArray);
}