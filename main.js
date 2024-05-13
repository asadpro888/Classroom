function getTab(el){
   
    const visible = document.querySelector('.content-visible');
    const tabContent = document.getElementById(el.href.split('#')[1]);

    visible.classList.toggle('content-visible')

    
    tabContent.classList.add('content-visible')
}

document.addEventListener('click', (e)=>{
    if(e.target.matches('.tab-item a')){
        getTab(e.target)
    }
})
let body = document.querySelector('body');
let input = document.querySelector('.inp');

input.addEventListener('input', (e)=>{
    body.style.backgroundColor = e.target.value;
})