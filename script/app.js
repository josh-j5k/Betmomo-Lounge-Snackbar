const navMenuToggle = document.querySelector('.mobile-menu-toggle');
const closeMenu = document.querySelector('.close-menu-icon')
const navMenu = document.getElementById('nav-menu')


navMenuToggle.addEventListener('click', () => {
    if (navMenu.classList.contains('show-nav'))    {
        navMenu.classList.remove('show-nav')
    } else {
        navMenu.classList.add('show-nav')
        closeMenu.setAttribute("data-active", "true")
        document.body.addEventListener("touchmove", e => {
            e.preventDefault()
            e.stopPropagation()
        }, { passive: false}) 
    }
    const dataActive = navMenuToggle.getAttribute('data-active')
    if (dataActive === 'true') {
        navMenuToggle.setAttribute("data-active", "false")
    }
})

closeMenu.addEventListener('click', () => {
    if (navMenu.classList.contains('show-nav'))    {
        navMenu.classList.remove('show-nav')
        closeMenu.setAttribute("data-active", "false")
        navMenuToggle.setAttribute("data-active", "true")
    }

})
