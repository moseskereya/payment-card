const Fix = document.querySelector('.footer');
const show = document.querySelector('.container2');
const saw = document.querySelector('.container');
let Hide = 1;
Fix.addEventListener('click', function(){
    if(Hide === 1){
    show.style.display = 'none';
    Hide = 0;
    }else{
        show.style.display = 'block';
        saw.style.display = 'none';
        Hide = 1;
    }
})

const another = document.querySelector('.back').addEventListener('click', function(){
    let moses = 1
    if(moses===1){
    saw.style.display = 'block'
     show.style.display = "none"
    }
})