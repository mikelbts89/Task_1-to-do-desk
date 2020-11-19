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
  console.log(taskDataArr);
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
    console.log(taskDataArr[i]);
  }
};
