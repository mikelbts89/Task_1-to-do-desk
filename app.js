let textContentArr = [];
let dateContentArr = [];
let textContent = document.getElementById("text_input");
let dateContent = document.getElementById("date_input");
let mainContentDiv = document.getElementById("main_content_div");

function refreshPage() {
  location.reload();
}

function clearLocalStorage() {
  localStorage.clear();
}

window.onload = () => {
  if (localStorage.getItem("textContent") != null) {
    textContentArr = JSON.parse(localStorage.getItem("textContent"));
    dateContentArr = JSON.parse(localStorage.getItem("dateContent"));
  }
  drawAfterRefresh();
};

function getData() {
  if (!textContent.value.trim()) {
    return alert("No task!");
  }
  if (!dateContent.value) {
    return alert("No date!");
  }
  let text = textContent.value.trim();
  let date = dateContent.value;
  textContentArr.push(text);
  dateContentArr.push(date);
  console.log(textContentArr, dateContentArr);
  localStorage.setItem("textContent", JSON.stringify(textContentArr));
  localStorage.setItem("dateContent", JSON.stringify(dateContentArr));
  console.log(localStorage.getItem("textContent"));
  console.log(localStorage.getItem("dateContent"));
  draw();
  textContent.value = "";
  dateContent.value = "";
}

function draw() {
  let cardDiv = document.createElement("div");
  cardDiv.className = "card_div";
  let textDiv = document.createElement("div");
  textDiv.className = "text_div";
  let dateDiv = document.createElement("div");
  dateDiv.className = "date_div";
  for (let i = 0; i < textContentArr.length; i++) {
    textDiv.innerText = textContentArr[i];
    dateDiv.innerText = dateContentArr[i];
  }
  cardDiv.appendChild(textDiv);
  cardDiv.appendChild(dateDiv);
  mainContentDiv.appendChild(cardDiv);
  delElement(cardDiv);
}

function drawAfterRefresh() {
  for (let i = 0; i < textContentArr.length; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card_div";
    let textDiv = document.createElement("div");
    textDiv.className = "text_div";
    let dateDiv = document.createElement("div");
    dateDiv.className = "date_div";
    textDiv.innerText = textContentArr[i];
    dateDiv.innerText = dateContentArr[i];
    cardDiv.appendChild(textDiv);
    cardDiv.appendChild(dateDiv);
    mainContentDiv.appendChild(cardDiv);
    delElement(cardDiv);
  }
}

function delElement(div) {
  div.addEventListener("mouseenter", () => {
    let delBtn = document.createElement("button");
    delBtn.innerText = "✗";
    delBtn.className = "del_btn";
    delBtn.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
    div.appendChild(delBtn);
    div.addEventListener("mouseleave", () => {
      delBtn.remove();
    });
  });
}
