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

/*const cargarRazas = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById('select-raza');
            Object.keys(data.message).forEach(raza => {
                const option = document.createElement('option');
                option.value = raza;
                option.textContent = raza;
                select.appendChild(option);
            });
        })
}*/

const boton = document.getElementById('btn-buscar');
boton.addEventListener('click', () =>{
    const input = document.getElementById('input-raza');
    estado.raza = input.value;
    //const select = document.getElementById('select-raza');
    //estado.raza = select.value;
    const contenedor = document.getElementById('contenedor-resultados'); //busca el elemento que tenga id = 'contenedor-resultados'
    contenedor.innerHTML = "";
    //estado.fotos = ["https://www.vitakraft.com/fileadmin/_processed_/1/3/csm_el_origen_del_perro_3cc21c0da1.jpg", "https://www.purina.com/sites/default/files/2025-09/beagle2_red-collar.jpg", "https://www.webanimales.com/ficheros/2014/03/Bull-terrier.jpg"];
    buscarPerros();
});

const buscarPerros = () => {
    const url = "https://dog.ceo/api/breed/" + estado.raza + "/images";
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error ("Raza no encontrada!");
            return response.json();
        })
        .then(responseJSON => {
            console.log(responseJSON)
            estado.fotos = responseJSON.message;
            render();
        })
        .catch(error => {
            console.log("Error al buscar la raza: ", error.message);
            const contenedor = document.getElementById('contenedor-resultados');
            const mensajeErr = document.createElement('p'); // crea un elemento <p>, en HTML es parrafo de texto
            mensajeErr.textContent = "RAZA NO ENCONTRADA";
            mensajeErr.className = "mensaje-error"; // le agregás una clase
            contenedor.appendChild(mensajeErr); // mete el elemento dentro del contenedor
        })
}