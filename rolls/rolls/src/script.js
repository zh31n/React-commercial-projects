let modal = document.querySelector('.modal');
let btn = document.querySelector('.navBusket');
let span = document.querySelector('.close');

btn.addEventListener('click', ()=>{
    modal.style.display = 'block';
});

span.addEventListener('click', ()=>{
    modal.style.display = 'none';
});

window.addEventListener('click', (event)=>{
    if(event.target == modal) {
        modal.style.display = 'none';
    }
});
