function spin() {
  const actions = [
    "Сделай отжимания на максимум отжиманий",
    "Выжми эспандер на максимум",
    "Подтянись, кусок тюфяка",
    "Напиши пост",
    "Открой Тироля и прочитай один абзац",
    "Открой Агибарриа и прочитай один абзац"
  ];
  const result = actions[Math.floor(Math.random() * actions.length)];
  document.getElementById("result").innerText = result;
  document.getElementById("log-section").style.display = "block";

  // сохраним текущее задание в data-action
  document.getElementById("input-result").dataset.action = result;
}

function saveResult() {
  const input = document.getElementById("input-result");
  const action = input.dataset.action;
  const value = input.value;
  const timestamp = new Date().toLocaleString();

  const entry = { action, value, timestamp };

  // Получим текущую историю
  let history = JSON.parse(localStorage.getItem("dopamineLog") || "[]");
  history.unshift(entry);
  localStorage.setItem("dopamineLog", JSON.stringify(history));

  input.value = "";
  displayHistory();
}

function displayHistory() {
  const history = JSON.parse(localStorage.getItem("dopamineLog") || "[]");
  const list = document.getElementById("history");
  list.innerHTML = "";

  history.forEach(entry => {
    const li = document.createElement("li");
    li.innerText = `[${entry.timestamp}] ${entry.action} → ${entry.value}`;
    list.appendChild(li);
  });
}

window.onload = displayHistory;
