const search = document.querySelector('.search');
const input = document.querySelector('.input');
const  btn = document.querySelector('.btn');


search.addEventListener('mouseenter', () => {
    search.classList.add('active');
    input.focus();
})


search.addEventListener('mouseleave', () => {
    if(input.value == ''){
        search.classList.remove('active');
        input.focus();
    }else{
        search.classList.add('active');
    }
    
})
