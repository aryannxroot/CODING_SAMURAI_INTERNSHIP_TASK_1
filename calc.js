function checkifdivzero(pmtr){
    for(let i = 0; i < pmtr.length; i++){
        if(((pmtr[i]==='%' || pmtr[i]==='/') && (i!== pmtr.length-1) ) && pmtr[i+1]==='0'){
            return true;
        }
    }
    return false;
}


const input = document.querySelector('.input-field')
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click',() =>{
        if(button.id === 'clear'){
            input.value = '';
        }else if(button.id === 'backspace'){
            input.value = input.value.slice(0, -1);
        }else if(button.id === '=' && input.value.length > 0){
            if(checkifdivzero(input.value)){
                input.value = 'Error!!!';
            }
            else{
                input.value = eval(input.value);
            }
        }else{
            input.value += button.id
        }
    })
})

const togglebtn = document.querySelector('.js-toggler-btn');
const calculator = document.querySelector('.calculator');
const inputFieldContainer = document.querySelector('.input-container');
const calculatorBtns = document.querySelector('.calculator-buttons');

togglebtn.addEventListener('click', () => {
    calculator.classList.toggle('js-dark-calculator');
    inputFieldContainer.classList.toggle('js-dark-input-field');
    calculatorBtns.classList.toggle('js-dark-calculator-buttons');
})