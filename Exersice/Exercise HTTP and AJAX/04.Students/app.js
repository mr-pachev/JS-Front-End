function attachEvents() {
  const inputFirstName = document.querySelector('input[name="firstName"]'); 
  const inputlLastName = document.querySelector('input[name="lastName"]'); 
  const inputFacultyNumber = document.querySelector('input[name="facultyNumber"]'); 
  const inputGrade = document.querySelector('input[name="grade"]'); 
  const submitBtn = document.getElementById('submit');

  submitBtn.addEventListener('click', async() => {
    let studentObj = {
        "firstName": inputFirstName.value,
        "lastName": inputlLastName.value,
        "facultyNumber": inputFacultyNumber,
        "grade": Number(inputGrade.value).toFixed(2),
    }
    
    console.log(studentObj)
  })


  
}

attachEvents();