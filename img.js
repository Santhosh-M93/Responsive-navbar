const btn=document.getElementsByClassName('btn')[0];
const nav=document.getElementsByClassName('links')[0];
btn.addEventListener('click',()=>{
    nav.classList.toggle('active');
})