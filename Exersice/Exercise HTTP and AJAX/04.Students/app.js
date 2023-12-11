function attachEvents() {
//   const inputFirstName = document.querySelector('input[name="firstName"]');
//   const inputlLastName = document.querySelector('input[name="lastName"]');
//   const inputFacultyNumber = document.querySelector(
//     'input[name="facultyNumber"]'
//   );
//   const inputGrade = document.querySelector('input[name="grade"]');
//   const submitBtn = document.getElementById("submit");
//   const containerResult = document.querySelector("tbody");
//   const BASE_URL = "http://localhost:3030/jsonstore/collections/students/";

//   submitBtn.addEventListener("click", creatStudent);

//   async function creatStudent(){

//     if (
//       inputFirstName.value !== "" &&
//       inputlLastName.value !== "" &&
//       inputFacultyNumber.value !== "" &&
//       inputGrade.value !== ""
//     ) {
//       let studentObj = {
//         firstName: inputFirstName.value,
//         lastName: inputlLastName.value,
//         facultyNumber: inputFacultyNumber.value,
//         grade: inputGrade.value,
//       };

//       fetch(BASE_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(studentObj),
//       })
//         .then((res) => res.json())
//         .then(() => {
//           studentObj = {};
//           inputFirstName.value = "";
//           inputlLastName.value = "";
//           inputFacultyNumber.value = "";
//           inputGrade.value = "";

//           // loadStudents();
//         })
//         .catch((err) => console.error(err));
//     } else {
//       loadStudents();
//     }
//   };

//  async function loadStudents() {
//    fetch(BASE_URL)
//       .then((res) => res.json())
//       .then((studensData) => {
//         const values = Object.values(studensData);
//         containerResult.innerHTML = "";

//         for (const obj of values) {

//           let row = document.createElement('tr');
// 	        row.innerHTML = ` <tr>
//                                 <th>${obj.firstName}</th>
//                                 <th>${obj.lastName}</th>
//                                 <th>${obj.facultyNumber}</th>
//                                 <th>${obj.grade}</th>
//                         		</tr>`;
//           containerResult.appendChild(row);

//           // let tr = document.createElement("tr");
//           // let td = document.createElement("td");

//           // td.innerHTML = obj.firstName;
//           // tr.appendChild(td);

//           // td = document.createElement("td");
//           // td.textContent = obj.lastName;
//           // tr.appendChild(td);

//           // td = document.createElement("td");
//           // td.textContent = obj.facultyNumber;
//           // tr.appendChild(td);
       
//           // td = document.createElement("td");
//           // td.textContent = obj.grade;
//           // tr.appendChild(td);

//           // containerResult.appendChild(tr);
//         }
//       })
//       .catch((err) => console.error(err));
//   }

const issueURL = "http://localhost:3030/jsonstore/collections/students";
const submitButton = document.querySelector("#submit");
const tableBody = document.querySelector("#results tbody");

loadStudents();

submitButton.addEventListener("click", submitStudent);

async function submitStudent() {
  const firstName = document.querySelector("input[name=firstName]").value;
  const lastName = document.querySelector("input[name=lastName]").value;
  const facultyNumber = document.querySelector("input[name=facultyNumber]").value;
  const grade = document.querySelector("input[name=grade]").value;

  let sutedntObject = { firstName, lastName, facultyNumber, grade }
  if (firstName && lastName && facultyNumber && grade) {
    await fetch(issueURL, {
      method: "POST",
      body: JSON.stringify(sutedntObject)
    });
  }
  tableBody.textContent = "";
  loadStudents()
}
async function loadStudents() {
  let studentsInfo = await fetch(issueURL);
  let body = await studentsInfo.json();
  let bodyValues = Object.values(body);
  bodyValues.forEach(value => {
    tableBody.appendChild(createTableRow(value));
  })
}

function createTableRow(object) {
  let tr = document.createElement("tr");
  let firstNameBox = document.createElement("td");
  firstNameBox.textContent = object["firstName"];
  let lastNameBox = document.createElement("td");
  lastNameBox.textContent = object["lastName"];
  let facultyNumberBox = document.createElement("td");
  facultyNumberBox.textContent = object["facultyNumber"];
  let gradeBox = document.createElement("td");
  gradeBox.textContent = object["grade"];
  tr.appendChild(firstNameBox);
  tr.appendChild(lastNameBox);
  tr.appendChild(facultyNumberBox);
  tr.appendChild(gradeBox);
  return tr;
}
}

attachEvents();
