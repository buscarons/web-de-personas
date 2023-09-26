let buscadorFiltrado = undefined;

let search = document.getElementById("formulario");

function buscarInfo() {
    search.addEventListener("input", e => {
        const inpuText = e.target.value.toUpperCase().trim();

        console.log(inpuText)

        buscadorFiltrado = arregloActualInfo.filter(persona => persona.name.toUpperCase().includes(inpuText) || persona.description.toUpperCase().includes(inpuText));
        
        // LLama a la función de Bryan con buscadorFiltrado
    })
}

document.addEventListener("DOMContentLoaded", buscarInfo);