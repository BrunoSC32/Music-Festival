document.addEventListener('DOMContentLoaded', () => {
    loadGallery()
    navBar()
})

function navBar() {
    const header = document.querySelector('.header')
    const hero = document.querySelector('.hero')

    document.addEventListener('scroll', () => {
        if(hero.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }
    })
}

function loadGallery() {

    const NUM_IMG = 16

    const gallery = document.querySelector('.content-gallery')

    for (let i = 1; i <= NUM_IMG; i++) {

        const img = document.createElement('IMG')
        img.loading = 'lazy'
        img.width = '300'
        img.height = '200'
        img.src = `src/img/gallery/thumb/${i}.jpg`
        img.alt = 'image gallery'
        
        img.onclick = () => {
            modalImage(i)
        }

        gallery.appendChild(img)

    }
}

function modalImage(i) {

    // Create a element IMG 
    const img = document.createElement('IMG')
    img.src = `src/img/gallery/full/${i}.jpg`
    img.alt = 'image gallery'

    // Create a elemento div for the modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = closeModal

    // Create close button
    const closeButton = document.createElement('BUTTON')
    closeButton.textContent = 'X'
    closeButton.classList.add('btn-close')
    closeButton.onClick = closeModal

    modal.appendChild(img)
    modal.appendChild(closeButton)

    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)

}

function closeModal() {

    const modal = document.querySelector('.modal')
    modal.classList.add('fadeOut')

    setTimeout(() => {
        modal?.remove();

        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    }, 500)

}