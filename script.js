const screens = document.querySelectorAll('.mainscreen');
const choose_topic_btns = document.querySelectorAll('.choose-topic-btn');
const start_btn = document.getElementById('start-btn')

let selected_topic = {}

start_btn.addEventListener('click',()=>{
  screens[0].classList.add('hide');
})


choose_topic_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_topic = { src, alt }
        screens[1].classList.add('hide')
    })
})
function bgchange(){
    document.body.style.backgroundImage = "url('./imgs/bgsecscreen.jpeg')";
}
