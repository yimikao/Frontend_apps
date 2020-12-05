const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const heightSpace = document.getElementById('height');
    const weightSpace = document.getElementById('weight');
    const resultSpace = document.querySelector('#results');
    
    const height = parseInt(heightSpace.value);
    const weight = parseInt(weightSpace.value);
    
    if (height === "" || height < 0 || isNaN(height)) {
        resultSpace.innerHTML = 'provide valid height';

    }else if (weight === "" || weight < 0 || isNaN(weight)) {
        resultSpace.innerHTML = 'provide valid weight';
    }else {
        
        const result = (weight/((height*height)/10000)).toFixed(2);
        resultSpace.innerHTML = `<span>${result}</span>`
    }
    
});