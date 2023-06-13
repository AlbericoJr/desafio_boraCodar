const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

function render() {
  let output = "";
  let active = "";
  const thisMonth = months[new Date().getMonth()];
  const thisYear = new Date().getFullYear();
  const currentYear = document.getElementById("year").innerText;

  for (let month of months) {
    if (currentYear == thisYear) {
      active = thisMonth == month ? "active" : "";
    }
    output += `<a href="calendario.html?monthSelected=${month}&yearSelected=${currentYear}"><div class="${active}">${month}</div></a>`;
  }
  return output;
}

function handlePreviewYear() {
  let next = document.getElementById("year");
  let sum = parseInt(next.innerText) - 1;
  next.innerText = sum;
  app.querySelector("main").innerHTML = render();
}

function handleNextYear() {
  let next = document.getElementById("year");
  let sum = parseInt(next.innerText) + 1;
  next.innerText = sum;
  app.querySelector("main").innerHTML = render();
}
app.querySelector("main").innerHTML = render();
app.querySelector("header span").innerHTML = new Date().getFullYear();