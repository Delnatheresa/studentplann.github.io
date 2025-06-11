const calender = document.getElementById("calender");
const modal = document.getElementById("reminderModal");
const modalDate = document.getElementById("modalDate");
const reminderText = document.getElementById("reminderText");
const monthSelect = document.getElementById("monthSelect");
const yearSelect = document.getElementById("yearSelect");

let reminders = {};
let selectedDate = "";

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Populate month and year dropdowns
function populateSelectors() {
  monthNames.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.text = month;
    monthSelect.appendChild(option);
  });

  for (let y = 2000; y <= 2100; y++) {
    const option = document.createElement("option");
    option.value = y;
    option.text = y;
    yearSelect.appendChild(option);
  }

  const today = new Date();
  monthSelect.value = today.getMonth();
  yearSelect.value = today.getFullYear();
}

function generateCalender() {
  const year = parseInt(yearSelect.value);
  const month = parseInt(monthSelect.value);

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  calender.innerHTML = "";

  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    calender.appendChild(empty);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateKey = `${year}-${month + 1}-${day}`;
    const div = document.createElement("div");
    div.className = "day";
    div.innerText = day;

    if (reminders[dateKey]) {
      const dot = document.createElement("div");
      dot.className = "reminder-dot";
      div.appendChild(dot);
    }

    div.onclick = () => openModal(dateKey);
    calender.appendChild(div);
  }
}

function openModal(date) {
  selectedDate = date;
  modalDate.innerText = `Reminder for ${date}`;
  reminderText.value = reminders[date] || "";
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function saveReminder() {
  const text = reminderText.value.trim();
  if (text) {
    reminders[selectedDate] = text;
  } else {
    delete reminders[selectedDate];
  }
  closeModal();
  generateCalender();
}

// Event listeners
monthSelect.addEventListener("change", generateCalender);
yearSelect.addEventListener("change", generateCalender);

// Init
populateSelectors();
generateCalender();
