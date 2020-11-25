let taskDataArr = [];
let textContent = document.getElementById("text_input");
let dateContent = document.getElementById("date_input");
let timeContent = document.getElementById("time_input");
let mainContentDiv = document.getElementById("main_content_div");

window.onload = () => {
  if (localStorage.getItem("taskData") != null) {
    taskDataArr = JSON.parse(localStorage.getItem("taskData"));
  }
  draw();
};

function refreshPage() {
  location.reload();
}

function clearLocalStorage() {
  localStorage.clear();
}

let getTaskData = () => {
  let currentDate = new Date();
  if (!textContent.value) {
    return alert("No task !!!");
  }
  if (
    !dateContent.value ||
    new Date(dateContent.value).getTime() <= currentDate.getTime()
  ) {
    return alert("The Date must be Bigger then today date !!!");
  }
  if (!timeContent.value) {
    return alert("No time set !!!");
  }

  let taskData = {
    task: textContent.value,
    date: dateContent.value,
    time: timeContent.value,
    id: new Date(),
  };
  taskDataArr.push(taskData);
  localStorage.setItem("taskData", JSON.stringify(taskDataArr));
  draw();
};

let draw = () => {
  mainContentDiv.innerHTML = "";
  for (let i = 0; i < taskDataArr.length; i++) {
    let cardDiv = document.createElement("div");
    let textDiv = document.createElement("div");
    textDiv.className = "text_div";
    let dateDiv = document.createElement("div");
    dateDiv.className = "date_div";
    let timeDiv = document.createElement("div");
    timeDiv.className = "time_div";
    let cardId = taskDataArr[i].id;
    cardDiv.className = "card_div";
    textDiv.innerText = taskDataArr[i].task;
    dateDiv.innerText = taskDataArr[i].date;
    timeDiv.innerText = taskDataArr[i].time;
    cardDiv.appendChild(textDiv);
    cardDiv.appendChild(dateDiv);
    cardDiv.appendChild(timeDiv);
    mainContentDiv.appendChild(cardDiv);
    cardDiv.addEventListener("mouseenter", () => {
      let delBtn = document.createElement("button");
      delBtn.className = "del_btn";
      delBtn.innerText = "❌";
      delBtn.name = cardId;
      cardDiv.appendChild(delBtn);
      delBtn.addEventListener("click", (e) => {
        e.target.parentElement.remove();
        for (let i = 0; i < taskDataArr.length; i++) {
          if (taskDataArr[i].id == delBtn.name) {
            taskDataArr.splice(i, 1);
            localStorage.setItem("taskData", JSON.stringify(taskDataArr));
          }
        }
      });
      let finishBtn = document.createElement("button");
      finishBtn.className = "finished_btn";
      finishBtn.innerText = "✔️";
      cardDiv.appendChild(finishBtn);
      finishBtn.onclick = (e) => {
        e.target.parentElement.remove();
      };
      cardDiv.addEventListener("mouseleave", () => {
        delBtn.remove();
        finishBtn.remove();
      });
    });
  }
  textContent.value = "";
  dateContent.value = "";
};
