//VIEW

const button = document.getElementById('btn');
const colorSpace = document.querySelector('.color');

//MODEL
const colors = ['blue', 'yellow', 'red', 'green'];

//CONTROLLER
function generate_num() {
    return Math.floor(Math.random() * colors.length);
}

button.addEventListener('click', function () {
    
    const random_num = generate_num();

    document.body.style.backgroundColor = colors[random_num];
    colorSpace.innerHTML = colors[random_num]

})

