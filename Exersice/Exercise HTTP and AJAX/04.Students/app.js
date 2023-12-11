function attachEvents() {
  const inputFirstName = document.querySelector('input[name="firstName"]'); 
  const inputlLastName = document.querySelector('input[name="lastName"]'); 
  const inputFacultyNumber = document.querySelector('input[name="facultyNumber"]'); 
  const inputGrade = document.querySelector('input[name="grade"]'); 
  const submitBtn = document.getElementById('submit');
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students/';

  submitBtn.addEventListener('click', async() => {
    let studentObj = {
        "firstName": inputFirstName.value,
        "lastName": inputlLastName.value,
        "facultyNumber": inputFacultyNumber,
        "grade": Number(inputGrade.value).toFixed(2),
    }
    
    fetch(BASE_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(studentObj)
  })
    .then((res) => res.json())
    .then(loadStudents)
  })

  async function loadStudents(){
    fetch (BASE_URL)
    .then((res) => res.json())
    .then((studensData) => {
      const tr = document.createElement('tr');
      const th = document.createElement('th');

      th.textContent += inputFirstName;
      th.textContent += inputlLastName;
      th.textContent += inputFacultyNumber;

      tr.appendChild(th);
    })
  }
  
}

attachEvents();