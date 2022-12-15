/*=================================================
                    Menu Page 
 =================================================*/

 const wineBeerBtn = document.querySelector('.wine-beer')
 const whiskeyChampagneBtn = document.querySelector('.whiskey-champagne')
 const cocktailsBtn = document.querySelector('.cocktails')
 const softDrinksBtn = document.querySelector('.soft-hot-drinks-fruit-juice')
 const dessertBtn = document.querySelector('.dessert')
 const sandwichBurgersBtn = document.querySelector('.sandwich-burgers')
 const menuItems = document.querySelectorAll('.betmomo-menu-items')

//  wine & beer btn
 wineBeerBtn.addEventListener('click', () => {
    const wineBeer = document.getElementById('wine-beer')
   const dataMenu = wineBeer.getAttribute('data-menu-list', 'active')
   if (!dataMenu) {
    menuItems.forEach(menuItem => {
        menuItem.removeAttribute('data-menu-list')
    })
    wineBeer.setAttribute('data-menu-list', 'active')
   }
 })

//  whiskey & champagne btn
 whiskeyChampagneBtn.addEventListener('click', () => {
    const whiskeyChampagne = document.getElementById('whiskey-champagne')
   const dataMenu = whiskeyChampagne.getAttribute('data-menu-list', 'active')
   if (!dataMenu) {
    menuItems.forEach(menuItem => {
        menuItem.removeAttribute('data-menu-list')
    })
    whiskeyChampagne.setAttribute('data-menu-list', 'active')
   }
 })

//  cocktails btn

cocktailsBtn.addEventListener('click', () => {
    const cocktails = document.getElementById('cocktails')
   const dataMenu = cocktails.getAttribute('data-menu-list', 'active')
   if (!dataMenu) {
    menuItems.forEach(menuItem => {
        menuItem.removeAttribute('data-menu-list')
    })
    cocktails.setAttribute('data-menu-list', 'active')
   }
 })

//  soft, hot drinks & fruit juice
softDrinksBtn.addEventListener('click', () => {
    const softHotDrinks = document.getElementById('soft-hot-drinks-fruit-juice')
   const dataMenu = softHotDrinks.getAttribute('data-menu-list', 'active')
   if (!dataMenu) {
    menuItems.forEach(menuItem => {
        menuItem.removeAttribute('data-menu-list')
    })
    softHotDrinks.setAttribute('data-menu-list', 'active')
   }
 })

//  dessert btn

dessertBtn.addEventListener('click', () => {
    const dessert = document.getElementById('dessert')
   const dataMenu = dessert.getAttribute('data-menu-list', 'active')
   if (!dataMenu) {
    menuItems.forEach(menuItem => {
        menuItem.removeAttribute('data-menu-list')
    })
    dessert.setAttribute('data-menu-list', 'active')
   }
 })

//  sandwich & burgers btn

sandwichBurgersBtn.addEventListener('click', () => {
    const sandwichBurgers = document.getElementById('sandwich-burgers')
   const dataMenu = sandwichBurgers.getAttribute('data-menu-list', 'active')
   if (!dataMenu) {
    menuItems.forEach(menuItem => {
        menuItem.removeAttribute('data-menu-list')
    })
    sandwichBurgers.setAttribute('data-menu-list', 'active')
   }
 })