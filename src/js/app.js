document.addEventListener('DOMContentLoaded', () => {
    loadGallery()
})

function loadGallery() {

    const NUM_IMG = 16

    const gallery = document.querySelector('.content-gallery')

    for (let i = 1; i <= NUM_IMG; i++) {

        const img = document.createElement('IMG')
        img.src = `src/img/gallery/full/${i}.jpg`
        img.alt = 'image gallery'

        gallery.appendChild(img)

    }


}