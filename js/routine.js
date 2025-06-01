from pathlib import Path

# Redefine paths and content due to code execution state reset
routine_html = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Утренняя Рутина</title>
  <script src="js/routine.js" defer></script>
</head>
<body>
  <h1>🦷 Утренняя Рутина</h1>

  <label><input type="checkbox" id="teeth" /> Почистил зубы</label><br>
  <label><input type="checkbox" id="shower" /> Принял душ</label><br><br>

  <label for="runDistance">Пробежка (км):</label>
  <input type="number" id="runDistance" min="0" step="0.1" /><br><br>

  <label for="runTime">Время (мин):</label>
  <input type="number" id="runTime" min="0" /><br><br>

  <button onclick="saveRoutine()">💾 Сохранить рутину</button>

  <hr>
  <h2>История</h2>
  <ul id="history"></ul>
</body>
</html>
"""

routine_js = """function saveRoutine() {
  const teeth = document.getElementById("teeth").checked;
  const shower = document.getElementById("shower").checked;
  const distance = document.getElementById("runDistance").value;
  const time = document.getElementById("runTime").value;
  const date = new Date().toLocaleDateString();

  const log = {
    date,
    teeth,
    shower,
    distance: parseFloat(distance) || 0,
    time: parseInt(time) || 0
  };

  const logs = JSON.parse(localStorage.getItem("routineLogs") || "[]");
  logs.push(log);
  localStorage.setItem("routineLogs", JSON.stringify(logs));

  renderHistory();
}

function renderHistory() {
  const logs = JSON.parse(localStorage.getItem("routineLogs") || "[]");
  const history = document.getElementById("history");
  history.innerHTML = "";
  logs.reverse().forEach(log => {
    const item = document.createElement("li");
    item.textContent = `[${log.date}] Зубы: ${log.teeth ? "✓" : "✗"}, Душ: ${log.shower ? "✓" : "✗"}, Бег: ${log.distance} км за ${log.time} мин`;
    history.appendChild(item);
  });
}

document.addEventListener("DOMContentLoaded", renderHistory);
"""

# Create folder structure and save files
base_path = Path("/mnt/data/morning_routine")
(base_path / "js").mkdir(parents=True, exist_ok=True)

(base_path / "routine.html").write_text(routine_html, encoding="utf-8")
(base_path / "js" / "routine.js").write_text(routine_js, encoding="utf-8")

base_path.as_posix()
