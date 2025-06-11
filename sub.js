const gradesData = [
  { subject: "Linear Algebra and probability", grade: "A" },
  { subject: "Computer Hardware", grade: "B+" },
  { subject: "C programming", grade: "A" },
  { subject: "Economics", grade: "A" },
  { subject: "Physics", grade: "A+" },
  { subject: "Digital Logics", grade: "B+" }
];

function populateTable() {
  const tableBody = document.querySelector("#gradesTable tbody");

  gradesData.forEach(item => {
    const row = document.createElement("tr");

    const subjectCell = document.createElement("td");
    subjectCell.textContent = item.subject;
    row.appendChild(subjectCell);

    const gradeCell = document.createElement("td");
    gradeCell.textContent = item.grade;
    row.appendChild(gradeCell);

    tableBody.appendChild(row);
  });
}

populateTable();
