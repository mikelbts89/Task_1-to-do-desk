let taskDataArr = [];
let textContent = document.getElementById("text_input");
let dateContent = document.getElementById("date_input");
let mainContentDiv = document.getElementById("main_content_div");

window.onload = () => {
  if (localStorage.getItem("taskData") != null) {
    taskDataArr = JSON.parse(localStorage.getItem("taskData"));
  }
  draw(taskDataArr);
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
  draw(taskDataArr);
};

let draw = () => {
  mainContentDiv.innerHTML = "";
  for (let i = 0; i < taskDataArr.length; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card_div";
    cardDiv.innerText = taskDataArr[i].task;
    mainContentDiv.appendChild(cardDiv);
    delTask(cardDiv, taskDataArr[i].id);
  }
  textContent.value = "";
};

let delTask = (cDiv, buttonId) => {
  let delBtn = document.createElement("button");
  delBtn.className = "del_btn";
  delBtn.innerText = "X";
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
