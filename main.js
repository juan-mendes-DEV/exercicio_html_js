const form = document.getElementById('container'); 
const nA = document.getElementById('numberA');
const nB = document.getElementById('numberB');
const sucess = document.getElementById('sucesso');
const trolei = document.getElementById('trolei');
const sistema = document.getElementById('sistema');
const carregando = document.getElementById('carregando');
const reset = document.getElementById('reset');


form.addEventListener('submit', function(e){
    e.preventDefault();

    if(nB.value > nA.value){
        
        document.querySelector('#sucesso').innerHTML = 'parabens voçê acertou saia o quanto antes seus dados ja são meus.'
        sucess.style.display = "block";
    }
    else{
        document.querySelector('#reset');
        document.querySelector('#carregando');
        document.querySelector('#sistema');
        document.querySelector('#trolei');
        document.querySelector('#sucesso').innerHTML = ''
        reset.style.display = "block"
        carregando.style.display = "block"
        sistema.style.display = "block";
        trolei.style.display = "block";
        sucess.style.display = "none";
    }
})
