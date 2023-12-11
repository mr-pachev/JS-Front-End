function attachEvents() {
  const inputFirstName = document.querySelector('input[name="firstName"]'); 
  const inputlLastName = document.querySelector('input[name="lastName"]'); 
  const inputFacultyNumber = document.querySelector('input[name="facultyNumber"]'); 
  const inputGrade = document.querySelector('input[name="grade"]'); 
  const submitBtn = document.getElementById('submit');
  const containerResult = document.querySelector('tbody');
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
    .then(() => {
      loadStudents()
    })
  })

  async function loadStudents(){
    fetch (BASE_URL)
    .then((res) => res.json())
    .then((studensData) => {
      
      const values = Object.values(studensData);
      
      for (const obj of values){
        
        let tr = document.createElement('tr');
        let th = document.createEvent('th');
        // console.log(obj.firstName, obj.lastName, obj.facultyNumber, obj.grade)

        let td = document.createElement('td');
        td.textContent = obj.firstName;
        th.appendChild(td);
        td.textContent = obj.lastName;
        th.appendChild(td);
        td.textContent = obj.facultyNumber;
        th.appendChild(td);
        td.textContent = obj.grade;
        th.appendChild(td);

        tr.appendChild(th);
        console.log(tr);

        containerResult.appendChild(tr);
      }

      
    })
  }
  
}

attachEvents();