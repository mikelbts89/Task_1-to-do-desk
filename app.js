let tasks_div = document.getElementById("tasks_div");
let text_inp = document.getElementById("text_inp");
let date_inp = document.getElementById("date_inp");

const createTask = () => {
  console.log(date_inp.value);
  let main_div = document.createElement("div");
  let paragraph = document.createElement("div");
  let date_span = document.createElement("span");
  date_span.innerText = date_inp.value;
  paragraph.className = "main_parag";
  main_div.className = "main_div";
  let text_value = text_inp.value;
  if (!text_value.trim()) {
    return alert("No Task !");
  }
  paragraph.innerText = text_value;
  main_div.appendChild(paragraph);
  main_div.appendChild(date_span);
  tasks_div.appendChild(main_div);

  main_div.addEventListener("mouseenter", () => {
    let delete_btn = document.createElement("button");
    delete_btn.className = "delete_btn";
    delete_btn.innerText = "X";
    main_div.appendChild(delete_btn);
    delete_btn.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
    main_div.addEventListener("mouseleave", () => {
      delete_btn.remove();
    });
  });
  localStorage.setItem(date_inp.value, text_value);
  text_inp.value = null;
  date_inp.value = null;
};
