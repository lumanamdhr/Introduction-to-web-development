let count=0;

const display= document.querySelector('.js-counter-text');
const incre= document.querySelector('.js-increment-btn');
const decre = document.querySelector('.js-decrement-btn');


incre.addEventListener('click', function(){
    count++;
    display.textContent=count;
});

decre.addEventListener('click', function(){
    count--;
    if (count<0){
        display.textContent=0;
    }
    else{
        display.textContent=count;
    }
});

const dogage= document.querySelector('.js-age-input');
const buttonElement= document.querySelector('.js-calculate-btn');
const result= document.querySelector('.js-result');

buttonElement.addEventListener('click',function(){
    const age=dogage.value;
    if(age<0){
        result.textContent= 'Age cannot be negative';
    }
    else if(!age){
        result.textContent= 'This field is rquired';
    }
    else{
        const dogagecalc=age*7;
        result.textContent="Your age in dog years is "+dogagecalc;
    }
    
});
