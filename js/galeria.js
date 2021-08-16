/*LightBox  galeria*/

const images = document.querySelectorAll('.GImagen');
const containerIMG = document.querySelector(".container-img");
const ImgShow = document.querySelector(".img-show");
const copy = document.querySelector(".copy");
const closeLightBox = document.querySelector("#close");
images.forEach(image => {
    image.addEventListener('click', () => {
        addImage(image.getAttribute('src'), image.getAttribute('alt'));
    })
})

const addImage = (src, alt) => {
    containerIMG.classList.toggle("Move");
    ImgShow.classList.toggle("show");
    ImgShow.src = src;
    copy.innerHTML = alt;
}

closeLightBox.addEventListener('click', () => {
    containerIMG.classList.toggle("Move");
    ImgShow.classList.toggle("show");
})