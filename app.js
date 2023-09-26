async function fetchData() {
    try {
        //tomo el archivo json
      const response = await fetch('./json/db.json');
      const data = await response.json();
        //div con id container
      const container = document.getElementById('container');
        //for para recorrer el json y mostrar los datos
      for (let i = 0; i < data.length; i++) {
        const li = document.createElement('li');
        li.innerText = `Nombre: ${data[i].name}, Telefono: ${data[i].phone}, Ciudad: ${data[i].country}`;
        container.appendChild(li);
      }
    } catch (error) {
      console.log(error);
    }
  }

fetchData();

  
function displayResults(results) {
    resultsList.innerHTML = '';
  
    if (results.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'No se encontraron resultados';
      resultsList.appendChild(li);
    } else {
      results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = `Nombre: ${result.name}, Telefono: ${result.phone}, Ciudad: ${result.country}`;
        resultsList.appendChild(li);
      });
    }
}

//tomo form e input
const form = document.querySelector('form');
const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('results');

form.addEventListener('submit', function(event) {
    //para prevenir errores
    event.preventDefault();
    //tomo el valor del input con lowercase
    const searchTerm = searchInput.value.toLowerCase();
    const results = [];
    //fetch al json
    fetch('./json/db.json')
      .then(response => response.json())
      .then(data => {
        //for recorriendo data
        for (let i = 0; i < data.length; i++) {
          for (let key in data[i]) {
            //condicional para ver si incluye el input
            if (data[i][key].toLowerCase().includes(searchTerm)) {
              results.push(data[i]);
              break;
            }
          }
        }
        
        displayResults(results);
      })
      .catch(error => console.log(error));

});


const modoBtn = document.getElementById('modoBtn');
const body = document.body;

modoBtn.addEventListener('click', () => {
    if (body.classList.contains('modo-dia')) {
        body.classList.remove('modo-dia');
        body.classList.add('modo-noche');
    } else {
        body.classList.remove('modo-noche');
        body.classList.add('modo-dia');
    }
});

const btnOscuro = document.querySelector('#modoBtn');

btnOscuro.addEventListener('click', ()=>{
    document.body.classList.toggle('oscuro');
    btnOscuro.classList.toggle('active');
});

