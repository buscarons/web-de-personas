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
const modoBtn = document.getElementById('modoBtn');
const body = document.body;

modoBtn.addEventListener('click', () => {
    if (body.classList.contains('modo-dia')) {
        body.classList.remove('modo-dia');
        body.classList.add('modo-noche');
        modoBtn.textContent = 'Modo Día';
    } else {
        body.classList.remove('modo-noche');
        body.classList.add('modo-dia');
        modoBtn.textContent = 'Modo Noche';
    }
});

