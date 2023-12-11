function attachEvents() {
  const inputFirstName = document.querySelector('input[name="firstName"]');
  const inputlLastName = document.querySelector('input[name="lastName"]');
  const inputFacultyNumber = document.querySelector(
    'input[name="facultyNumber"]'
  );
  const inputGrade = document.querySelector('input[name="grade"]');
  const submitBtn = document.getElementById("submit");
  const containerResult = document.querySelector("tbody");
  const BASE_URL = "http://localhost:3030/jsonstore/collections/students/";

  submitBtn.addEventListener("click", async () => {

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
        .then(() => {
          studentObj = {};
          inputFirstName.value = "";
          inputlLastName.value = "";
          inputFacultyNumber.value = "";
          inputGrade.value = "";

          loadStudents();
        })
        .catch((err) => console.error(err));
    } else {
      loadStudents();
    }
  });

 async function loadStudents() {
   fetch(BASE_URL)
      .then((res) => res.json())
      .then((studensData) => {
        const values = Object.values(studensData);
        containerResult.innerHTML = "";

        for (const obj of values) {
          let tr = document.createElement("tr");
          let td = document.createElement("td");

          td.innerHTML = obj.firstName;
          tr.appendChild(td);

          td = document.createElement("td");
          td.textContent = obj.lastName;
          tr.appendChild(td);

          td = document.createElement("td");
          td.textContent = obj.facultyNumber;
          tr.appendChild(td);
       
          td = document.createElement("td");
          td.textContent = obj.grade;
          tr.appendChild(td);

          containerResult.appendChild(tr);
        }
      })
      .catch((err) => console.error(err));
  }
}

attachEvents();
