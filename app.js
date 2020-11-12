let tasksDiv = document.getElementById("tasks_div");
let textInp = document.getElementById("text_inp");

const createTask = () => {
  let mainDiv = document.createElement("div");
  let paragraph = document.createElement("div");
  paragraph.className = "main_parag";
  mainDiv.className = "main_div";
  let textValue = textInp.value;
  paragraph.innerText = textValue;
  mainDiv.appendChild(paragraph);
  tasksDiv.appendChild(mainDiv);

  mainDiv.addEventListener("mouseenter", () => {
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete_btn";
    deleteBtn.innerText = "X";
    mainDiv.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
    mainDiv.addEventListener("mouseleave", () => {
      deleteBtn.remove();
    });
  });

  textInp.value = " ";
};
