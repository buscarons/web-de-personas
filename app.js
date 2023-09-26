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
