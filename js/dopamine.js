
function spin() {
  const actions = [
    "Сделай 10 отжиманий",
    "Прыгни как гиббон",
    "Бахни кофе",
    "Посмотри на сайт и похвали себя",
    "Погладь собаку или себя",
    "Открой статью и просто прочитай один абзац",
    "Ничего не делай 1 минуту и гордись этим"
  ];
  const result = actions[Math.floor(Math.random() * actions.length)];
  document.getElementById("result").innerText = result;
}
