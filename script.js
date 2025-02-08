const data = [
  { letter: "E", value: 40, percentage: 16.06 },
  { letter: "I", value: 29, percentage: 11.65 },
  { letter: "T", value: 28, percentage: 11.24 },
  { letter: "O", value: 22, percentage: 8.84 },
  { letter: "N", value: 21, percentage: 8.43 },
];

const container = document.getElementById("letterDensity");

data.forEach((item) => {
  const letterItem = document.createElement("div");
  letterItem.className = "letter-item";

  letterItem.innerHTML = `
        <div class="letter">${item.letter}</div>
        <div class="bar-container">
            <div class="bar" style="width: ${item.percentage}%"></div>
        </div>
        <div class="value">${item.value} (${item.percentage}%)</div>
    `;

  container.appendChild(letterItem);
});
