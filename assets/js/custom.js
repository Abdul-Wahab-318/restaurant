//toggle Hidden navbar
var hiddenNavbar =document.querySelector('#hiddenNavbar');
var navbarToggler = document.querySelector('#navbarToggler');

navbarToggler.addEventListener('click', function(){
    hiddenNavbar.classList.toggle('hide-collapse');
    hiddenNavbar.classList.toggle('show-collapse');
})