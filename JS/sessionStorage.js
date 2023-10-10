const guardarDatosButton = document.getElementById('guardar');

guardarDatosButton.addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const pais = document.getElementById('pais').value;
    const biografia = document.getElementById('biografia').value;

    const datos = {
        nombre,
        pais,
        biografia
    };
    sessionStorage.setItem('datos', JSON.stringify(datos));
});

setTimeout(function(){
    const nombre = document.getElementById('nombre').value;
    const pais = document.getElementById('pais').value;
    const biografia = document.getElementById('biografia').value;

    const datos = {
        nombre,
        pais,
        biografia
    };
    sessionStorage.setItem('datos', JSON.stringify(datos));

}, 5000);
   