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
    let studentObj = {
      firstName: inputFirstName.value,
      lastName: inputlLastName.value,
      facultyNumber: inputFacultyNumber.value,
      grade: inputGrade.value,
    };

    if (
      inputFirstName.value !== "" &&
      inputlLastName.value !== "" &&
      inputFacultyNumber.value !== "" &&
      inputGrade.value !== ""
    ) {
      fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentObj),
      })
        .then((res) => res.json())
        .then(() => {
          inputFirstName.value = "";
          inputlLastName.value = "";
          inputFacultyNumber.value = "";
          inputGrade.value = "";

          loadStudents();
        });
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
          let th = document.createElement("th");

          th.innerHTML = obj.firstName;
          tr.appendChild(th);
          console.log(tr);

          th = document.createElement("th");
          th.textContent = obj.lastName;
          tr.appendChild(th);
          console.log(tr);

          th = document.createElement("th");
          th.textContent = obj.facultyNumber;
          tr.appendChild(th);
          console.log(tr);

          th = document.createElement("th");
          th.textContent = obj.grade;
          tr.appendChild(th);

          console.log(tr);

          containerResult.appendChild(tr);
        }
      });
  }
}

attachEvents();
