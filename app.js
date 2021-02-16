document.querySelector('.hamburger').addEventListener('click', ()=>{
    document.querySelector('body').classList.toggle('resp')
})

setTimeout(()=>{
    document.querySelector('body').classList.toggle('fade')
}, 2000)