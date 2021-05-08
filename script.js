const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/user/max_libertine/'
const rows = 10
const modal = document.querySelector('#myModal')
const modalImg = document.querySelector('#modalImg')
const closeBtn = document.querySelector('#close')
const modalContent = document.querySelector('#modal-content')



for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    img.addEventListener('click', () => {
        modalImg.src = img.src
        modal.style.display = "block"
        modalContent.style.width = 'min-content'
    })
    container.appendChild(img)
}


function getRandomSize() {
    return `${getRandomNum1()}x${getRandomNum2()}`
}

function getRandomNum1() {
    return Math.ceil(Math.random() * 10) + 600
}


function getRandomNum2() {
    return Math.floor(Math.random() * 10) + 600
}

closeBtn.onclick = function(){
    modal.style.display = 'none'
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }