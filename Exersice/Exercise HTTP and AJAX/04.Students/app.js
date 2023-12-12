function attachEvents() {
  const inputFirstName = document.querySelector('input[name="firstName"]');
  const inputlLastName = document.querySelector('input[name="lastName"]');
  const inputFacultyNumber = document.querySelector('input[name="facultyNumber"]');
  const inputGrade = document.querySelector('input[name="grade"]');
  const submitBtn = document.getElementById("submit");
  const containerResult = document.querySelector("tbody");
  const BASE_URL = "http://localhost:3030/jsonstore/collections/students/";

  loadStudents();
  submitBtn.addEventListener("click", creatStudent);

  function createRow(object) {
    const values = Object.values(object);
    containerResult.innerHTML = "";

      values.forEach((obj) => {

      let row = document.createElement("tr");
      row.innerHTML = ` <tr>
                                  <th>${obj.firstName}</th>
                                  <th>${obj.lastName}</th>
                                  <th>${obj.facultyNumber}</th>
                                  <th>${obj.grade}</th>
                          		</tr>`;
      containerResult.appendChild(row);
    });
  }

  async function creatStudent() {
    if (
      inputFirstName.value !== "" &&
      inputlLastName.value !== "" &&
      inputFacultyNumber.value !== "" &&
      inputGrade.value !== ""
    ) {
      let studentObj = {
        firstName: inputFirstName.value,
        lastName: inputlLastName.value,
        facultyNumber: inputFacultyNumber.value,
        grade: inputGrade.value,
      };

      fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentObj),
      })
        .then((res) => res.json())
        .then((result) => {
          studentObj = {};
          inputFirstName.value = "";
          inputlLastName.value = "";
          inputFacultyNumber.value = "";
          inputGrade.value = "";
          loadStudents();
        })
        .catch((err) => console.error(err));
    }
  }

  async function loadStudents() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((studensData) => {
        const values = Object.values(studensData);
        containerResult.innerHTML = "";

        values.forEach((obj) => {
          let row = document.createElement("tr");
          row.innerHTML = ` <tr>
                                  <th>${obj.firstName}</th>
                                  <th>${obj.lastName}</th>
                                  <th>${obj.facultyNumber}</th>
                                  <th>${obj.grade}</th>
                          		</tr>`;
      
          containerResult.appendChild(row);
        
      })})
      .catch((err) => console.log(err));
  }
 
}

attachEvents();
