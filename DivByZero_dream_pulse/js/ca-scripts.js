var customerName = "Alliance  ";

function addCustomerName() {
    let pageHeader = document.querySelector('#tm-header')
    pageHeader.textContent = customerName

    let title = document.querySelector('#title')
    title.textContent = customerName
}

function toggleColors() {
    let el = document.querySelectorAll('.tm-white-rect')
    for(i = 0; i<el.length; i++) {
        el[i].classList.add('tm-blue-rect');
        el[i].classList.remove('tm-white-rect');
    }
}

function hideElement() {
    let links = document.querySelectorAll('.tm-social-links')
    links.style.visibility = 'none'
}

function addText() {
    let introHeader = document.querySelector('#introheader')
    introHeader.textContent = "Alliance"

    let introPara1 = document.querySelector('#intropara1')
    introPara1.textContent = "Alliance was founded in 1931 by Albert Daniels."
}
/*

Dream Pulse Template Customer Customizations
<h1 id=“tm-header” class=“tm-brand text-uppercase”></h1>
Add Customer Name to h1

<span class=“d-inline-block tm-white-rect”></span>
Change all class names ‘tm-white-rect’ to ‘tm-blue-rect’

<ul class=“nav flex-row tm-social-links”>
Hide social links

<h2 id=“introheader” class=“tm-section-title mb-5 text-uppercase tm-color-primary”></h2>
Add the text ‘Alliance’ to h2

<p id=“intropara1” class=“tm-color-gray”>
Add the text ‘Alliance was founded in 1931 by Albert Daniels.’

<p id=“intropara2” class=“tm-color-gray”>
Add the text ‘The company is a leader in P.C. Manufacturing’

<p id=“aboutpara1”>
Add the text ‘We deliver the best service this side of creation’

<p id=“aboutpara2">
Add the text ‘Our motto is satisfaction guaranteed’

<p id=“addresspara”>
Add the text ‘1-800-565-5656’

*/
