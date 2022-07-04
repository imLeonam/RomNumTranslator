const message = 'Write a Roman Numeral:';
// Update header text
document.querySelector('#header').innerHTML = message;

function parseInput() {
    let input = document.querySelector('#input').value.toUpperCase();
    const matchRoman = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

    if (!matchRoman.test(input)) {
        document.querySelector('#result').innerHTML = 'Digite um Valor Válido!';
        let isValid = document.getElementById('result');
        isValid.classList.remove('success');
        isValid.classList.add('failure');
        return;
    }

    let roman = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    }

    let result = 0;
    for (let i = 0; i < input.length; i++) { // enquanto i for menor que o tamanho do numeral some i
        let current = roman[input[i]]; // current recebe o valor do numeral romano na posição i (posição atual) que é acessado pela posição do char do input
        let next = roman[input[i + 1]]; // next recebe o valor do numeral romano na posição i + 1 (proxima posição) que é acessado pela posição do char do input
        if (current < next) { // se current for menor que next
            result -= current; // o resultado é subtraído do valor do numeral romano na posição i
        } else {
            result += current; // se não, o resultado é somado ao valor do numeral romano na posição i
        }
    }
    console.log(input + ' = ' + result);
    document.querySelector('#result').innerHTML = result;
    let isValid = document.getElementById('result');
    isValid.classList.remove('failure');
    isValid.classList.add('success');
}