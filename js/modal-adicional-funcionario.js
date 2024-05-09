var openModalAdicionarFuncionario = document.querySelector('#openModalAdicionarFuncionario')
var modalAdicionarFuncionario = document.querySelector('#modalAdicionarMonitor');
var closeAdicionarFuncionario = document.querySelector('#closeAdicionarMonitor');

openModalAdicionarFuncionario.addEventListener('click', function(){
    modalAdicionarFuncionario.classList.toggle('active');
})

closeAdicionarFuncionario.addEventListener('click', function(){
    modalAdicionarFuncionario.classList.toggle('active');
})