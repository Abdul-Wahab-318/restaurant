//toggle Hidden navbar
var hiddenNavbar =document.querySelector('#hiddenNavbar');
var navbarToggler = document.querySelector('#navbarToggler');

navbarToggler.addEventListener('click', function(){
    hiddenNavbar.classList.toggle('hide-collapse');
    hiddenNavbar.classList.toggle('show-collapse');
})

// cart functionality

let hoverCart = document.querySelector('#hoverCart');
hoverCart.addEventListener('click',function() {
    console.log('clickable')
    cartDetails.classList.toggle('show-cart-details');
    hoverCart.style.display='none';
    setTimeout(function(){
        hoverCart.style.display='';
    },1000)
})
let cart = document.querySelector('#cart');
let cartDetails = document.querySelector('#cartDetails');

//delete cart item
