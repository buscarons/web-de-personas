// GET PEOPLE DATA
// Elements
const peopleData = document.getElementById('people');

// Fetch people function
async function fetchData() {
  try {
    const response = await fetch('https://api.npoint.io/3692c8a1c9c3f5da1727');
    const data = await response.json();
    console.log(data)

    data.forEach(person => {
      peopleData.innerHTML += `
      <div class="card m-1" style="width: 18rem;">
        <img src="https://robohash.org/${Math.random()}?set=set2" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title fw-bold">${person.name}</h5>
          <hr>
          <p class="card-text"><span class="fw-bold">Country</span>: ${person.country}</p>
          <hr>
          <p class="card-text"><span class="fw-bold">Phone</span>: ${person.phone}</p>
        </div>
      </div>`
    })
    darkM();
  } catch (error) {
    console.log(error);
  }
};

fetchData();

// SEARCH PEOPLE
// Elements
const form = document.querySelector('form');
const searchInput = document.getElementById('searchInput');

// Alert
const alert = document.getElementById('alert-error');

function showAlert() {
  alert.classList.remove('visually-hidden');
  setTimeout(() => {
    alert.classList.add('visually-hidden')
  }, 5000);
}

// Display search results 
function displayResults(results) {
    peopleData.innerHTML = '';
  
    if (results.length === 0) {
      showAlert();
    } else {
      results.forEach(person => {
        peopleData.innerHTML += `
        <div class="card m-1" style="width: 18rem;">
          <img src="https://robohash.org/${Math.random()}?set=set2" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title fw-bold">${person.name}</h5>
            <hr>
            <p class="card-text"><span class="fw-bold">Country</span>: ${person.country}</p>
            <hr>
            <p class="card-text"><span class="fw-bold">Phone</span>: ${person.phone}</p>
          </div>
        </div>
        `
      });
      darkM();
    }
}

// Event handler search person
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const searchTerm = searchInput.value.toLowerCase();
  const results = [];

  fetch('https://api.npoint.io/3692c8a1c9c3f5da1727')
    .then(response => response.json())
    .then(data => {
      data.forEach(person => {
        if (searchTerm !== '') {
          if (person.name.toLowerCase().includes(searchTerm) ||
            person.country.toLowerCase().includes(searchTerm)) {
            results.push(person)
          }
        }
      })
      console.log(results);
      displayResults(results);
      darkM();
    })
    .catch(error => {
      console.log(error);
      showAlert();
    });
});

// DARK MODE FUNCTIONALITY
// Elements

// Dark mode function
function darkM() {
  const modeBtn = document.getElementById('modoBtn');
  const body = document.body;
  const card = document.querySelectorAll('.card');
  
  // Set previous dark mode preference
  if (localStorage.getItem('darkMode') === 'true') {
    modeBtn.classList.add('active');
    body.classList.remove('modo-dia');
    body.classList.add('modo-noche');
    card.forEach(elem => {
      elem.classList.add('card-noche')
    })
  } else {
    modeBtn.classList.remove('active')
    body.classList.add('modo-dia');
    body.classList.remove('modo-noche')
    card.forEach(elem => {
      elem.classList.remove('card-noche')
    })
  }
  
  modeBtn.addEventListener('click', () => {
      if (body.classList.contains('modo-dia')) {
          body.classList.remove('modo-dia');
          body.classList.add('modo-noche');
          card.forEach(elem => {
            elem.classList.add('card-noche')
          })
          localStorage.setItem('darkMode', true);
      } else {
          body.classList.remove('modo-noche');
          body.classList.add('modo-dia');
          card.forEach(elem => {
            elem.classList.remove('card-noche')
          })
          localStorage.setItem('darkMode', false)
      }
  });
  
  modeBtn.addEventListener('click', ()=>{
      modeBtn.classList.toggle('active');
  });
}

