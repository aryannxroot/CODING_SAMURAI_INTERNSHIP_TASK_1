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


function checkifdivzero(pmtr){
    for(let i = 0; i < pmtr.length; i++){
        if(((pmtr[i]==='%' || pmtr[i]==='/') && (i!== pmtr.length-1) ) && pmtr[i+1]==='0'){
            return true;
        }
    }
    return false;
}