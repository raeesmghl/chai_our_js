




let els = document.querySelectorAll('.button');

let body = document.body;

els.forEach((el)=>{
    el.addEventListener('click',()=>{
        body.style.backgroundColor = el.id;
    })
})
