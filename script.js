let elem1 = document.querySelector('#elem1')
elem1.addEventListener('click', (e) => {
    let kok = e.target
    console.log(kok)// e.target получить елемент на котором произошло событие
})