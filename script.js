const estado = {
    raza: '', 
    fotos: [] 
}

const render = () =>{
    const contenedor = document.getElementById('contenedor-resultados'); //en el documento, busca el elemento que tenga id = 'contenedor-resultados'
    estado.fotos.forEach(foto =>{
        const img = document.createElement('img'); // crea un elemento <img>
        img.src = foto; // al elemento le agrega la URL
        contenedor.appendChild(img); // mete el elemento dentro del contenedor
    })
}

const boton = document.getElementById('btn-buscar');
boton.addEventListener('click', () =>{
    const input = document.getElementById('input-raza');
    estado.raza = input.value;
    const contenedor = document.getElementById('contenedor-resultados'); //busca el elemento que tenga id = 'contenedor-resultados'
    contenedor.innerHTML = "";
    estado.fotos = [
        "https://www.vitakraft.com/fileadmin/_processed_/1/3/csm_el_origen_del_perro_3cc21c0da1.jpg",
        "https://www.purina.com/sites/default/files/2025-09/beagle2_red-collar.jpg",
        "https://www.webanimales.com/ficheros/2014/03/Bull-terrier.jpg"
    ];
    render();
});