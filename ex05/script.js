function genNum(){
    const min = Math.ceil(Number(document.querySelector('#x1').value));
    const max = Math.floor(Number(document.querySelector('#x2').value));
    const result = document.querySelector('.result');

    const num = Math.floor(Math.random() * (max - min + 1) + min);

    result.innerHTML = num
}

