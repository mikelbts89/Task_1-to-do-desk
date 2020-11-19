let taskDataArr = [];
let textContent = document.getElementById("text_input");
let dateContent = document.getElementById("date_input");
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
  let taskData = {
    task: textContent.value,
    date: dateContent.value,
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
    let dateDiv = document.createElement("div");
    cardDiv.className = "card_div";
    textDiv.innerText = taskDataArr[i].task;
    dateDiv.innerText = taskDataArr[i].date;
    cardDiv.appendChild(textDiv);
    cardDiv.appendChild(dateDiv);
    mainContentDiv.appendChild(cardDiv);
    delTask(cardDiv, taskDataArr[i].id);
    finishedTask(cardDiv);
  }
  textContent.value = "";
};

let delTask = (cDiv, buttonId) => {
  let delBtn = document.createElement("button");
  delBtn.className = "del_btn";
  delBtn.innerText = "Delet Task";
  delBtn.name = buttonId;
  cDiv.appendChild(delBtn);
  delBtn.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    for (let i = 0; i < taskDataArr.length; i++) {
      if (taskDataArr[i].id == delBtn.name) {
        taskDataArr.splice(i, 1);
        localStorage.setItem("taskData", JSON.stringify(taskDataArr));
      }
    }
  });
};

let finishedTask = (cDiv) => {
  let finishBtn = document.createElement("button");
  finishBtn.className = "del_btn";
  finishBtn.innerText = "Finished Task";
  cDiv.appendChild(finishBtn);
  finishBtn.onclick = (e) => {
    e.target.parentElement.remove();
  };
};
