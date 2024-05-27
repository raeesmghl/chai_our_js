let height = document.querySelector('#height');
let weight = document.querySelector('#weight');
let sumbit = document.querySelector('.enter');
let returned = document.querySelector('.card__content');




function bmi(h,w){
    if(isNaN(h) || isNaN(w)){
        returned.innerHTML = 'only Numbers are valid';
        returned.style.color = 'red';
    }else if(h<=0 || w<=0){
        returned.innerHTML = 'please enter actual measurements';
        returned.style.color = 'orange';
    }else{
        let hInMeters = h/100;
        let formula = w/(hInMeters*hInMeters).toFixed(2);

        returned.innerHTML = formula.toFixed(2);
        returned.style.color = 'black'
    }
}

sumbit.addEventListener('click',()=>{
    bmi(height.value,weight.value)
})

    
