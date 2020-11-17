//VIEW
const valueSpace = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn')

//MODEL
let value = 0;

//CONTROLLER

buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        
        if (btn.innerHTML == 'decrease') {
            value--;
        } else if (btn.innerHTML == 'increase') {
            value++;
        } else{
            value = 0;
        }

        //Change number color
        if (value > 0) {
            valueSpace.style.color = 'blue'
        }else if (value < 0){
            valueSpace.style.color = 'red'
        }else {
            valueSpace.style.color = '#000';
        }

        valueSpace.innerHTML = value;
    })
})