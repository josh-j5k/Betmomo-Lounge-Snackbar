const images = document.querySelectorAll('.gallery-img');
let options = {
    rootMargin: '40px 0px 0px 0px',
    threshold: 0.4
}


let observer = new IntersectionObserver( (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.toggle('show-image')
            observer.unobserve(entry.target)
        }
    })
}, options);

images.forEach(image => {
    observer.observe(image)
})