const burger = document.querySelector('.burger-img')
const cocktail = document.querySelector('.cocktail-img')
const textContainerOne = document.querySelector('.text-container-1')
const textContainerTwo = document.querySelector('.text-container-2')

const mainBackground = document.querySelector('.main-section')

// Array
const autoPlayAnimation = () => {
    setTimeout(() => {
    const cocktailActive = cocktail.getAttribute("data-cocktail");
    if(cocktailActive !== "active") {
        cocktail.setAttribute("data-cocktail", "active")
        burger.setAttribute("data-burger", "inactive")
    } 
    // Take A Sip Animation
    const takeASip = textContainerTwo.getAttribute("data-text-slider2")
    
    if(takeASip !== "active") {
        textContainerTwo.setAttribute("data-text-slider2", "active")
        textContainerOne.setAttribute("data-text-slider-1", "inactive")
    } 
    // Background Animation
    const bgAnimation = mainBackground.getAttribute("data-background")
    if(bgAnimation !== "active") {
        mainBackground.setAttribute("data-background", "active")
    }
    }, 1000)
    setTimeout(() => {
        // Burger Animation
            const burgerActive = burger.getAttribute("data-burger");
            if(burgerActive !== "active") {
                burger.setAttribute("data-burger", "active")
                cocktail.setAttribute("data-cocktail", "inactive")
            } 
            // Want a meal animation 
            const wantAMeal = textContainerOne.getAttribute("data-text-slider-1")

            if(wantAMeal !== "active") {
                textContainerOne.setAttribute("data-text-slider-1", "active")

                textContainerTwo.setAttribute("data-text-slider2", "inactive")
            } 
            const bgAnimation = mainBackground.getAttribute("data-background")
            if(bgAnimation !== "inactive-1") {
                mainBackground.setAttribute("data-background", "inactive-1")
            }
    }, 20000);
}

// const burgerGrowing = [
//     {transform: 'scale(1)', easing: 'ease-out'},
//     {transform: 'scale(1.05)', easing:'ease-in', offset: 0.5},
//     {transform: 'scale(1)', easing: 'ease-out'}
// ]

// const burgerTiming = {
//     duration: 3000,
//     iterations: Infinity,
//     delay: 4000
// }

// burger.animate(burgerGrowing, burgerTiming)


window.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        autoPlayAnimation()
    }, 40000);
})