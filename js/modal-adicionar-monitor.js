var openModalAdicionar = document.querySelector('#openModalAdicionar')
var modalAdicionarMonitor = document.querySelector('#modalAdicionarMonitor');
var closeAdicionarMonitor = document.querySelector('#closeAdicionarMonitor');

openModalAdicionar.addEventListener('click', function(){
    modalAdicionarMonitor.classList.toggle('active');
})

closeAdicionarMonitor.addEventListener('click', function(){
    modalAdicionarMonitor.classList.toggle('active');
})