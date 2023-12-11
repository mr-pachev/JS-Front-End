function attachEvents() {
  const inputFirstName = document.querySelector('input[name=”firstName”]'); 
  const inputlLastName = document.querySelector('input[name=”lastName”]'); 
  const inputFacultyNumber = document.querySelector('input[name=”facultyNumber”]'); 
  const inputGrade = document.querySelector('input[name=”grade”]'); 
  const submitBTN = document.getElementById('submit');



  
  console.log(inputFirstName.value);
  console.log(inputlLastName.value);
  console.log(inputFacultyNumber.value);
  console.log(inputGrade.value);
}

attachEvents();