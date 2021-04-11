
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
    videoBtn.classList.toggle('d-none');
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
    //reducing cart circular shape counter value
    var shapeCounter = document.querySelector('#cartShapeCounter').innerHTML;
    numberShapeCounter = parseInt(shapeCounter);
    numberShapeCounter--;
    document.querySelector('#cartShapeCounter').innerHTML = numberShapeCounter;

}

//SHARE FUNCIONALITY
var share = document.querySelector("#share");
var shareDetails = document.querySelector('#shareDetails');
var shareList = document.querySelector('#shareList');
share.addEventListener('click',function(){
    shareDetails.classList.toggle('show-share-anime');
    shareDetails.classList.toggle('hide-share-anime');
    shareList.classList.toggle('show-share-link');
    shareList.classList.toggle('hide-share-link');
    

})

setTimeout(function(){
    shareDetails.style.opacity="1"
},1050)

//header scroll function 

var hTop = document.querySelector('#headerTop');
var hBottom = document.querySelector('#headerBottom');
window.addEventListener('scroll',function(){
    
    var distanceFromTop = window.scrollY;
    if(distanceFromTop>120)
    {
        hBottom.classList.add('hide-hBottom');
        
    }
    else 
    {
        hBottom.classList.remove('hide-hBottom');
    }
})
//show video on click
var videoBtn = document.querySelector('#videoBtn');
var embeddedVideo = document.querySelector('#embeddedVideoParent');
var video = document.querySelector('#video');
videoBtn.addEventListener('click',function(){
    embeddedVideo.classList.toggle('d-none');
    createIframe();
})
embeddedVideo.addEventListener('click',function(){
    embeddedVideo.classList.toggle('d-none');
    ifrm.src = '';
})


var ifrm = document.createElement("iframe");
function createIframe(){
            
    ifrm.setAttribute("src", "https://www.youtube.com/embed/9Y9wuCyMkFk");
    ifrm.style.width = "1060px";
    ifrm.style.height = "615px";
    ifrm.style.border = 'transparent';
    video.appendChild(ifrm);
    console.log('creating iframe');
}