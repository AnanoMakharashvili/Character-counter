const switchThem = document.getElementById("icon-moon");
const textInput = document.getElementById("textInput");
const switchWhiteThem = document.getElementById("icon-sun");
const headerThemDark = document.getElementById("logo-dark-theme");
const headerThemLight = document.getElementById("logo-light-theme");
const checkBoxDark = document.getElementById("checkbox");
const totalCharacters = document.getElementById("total-characters");
const wordCount = document.getElementById("word-count");
const sentenceCount = document.getElementById("sentence-count");
console.log(sentenceCount);

switchThem.addEventListener("click", () => {
  document.body.classList.add("dark-mode");
  textInput.style.backgroundColor = "#21222C";
  textInput.style.color = "#E4E4EF";
  switchThem.style.display = "none";
  switchWhiteThem.style.display = "block";
  headerThemDark.style.display = "block";
  headerThemLight.style.display = "none";
  checkBoxDark.style.accentColor = "#D3A0FA";
});

switchWhiteThem.addEventListener("click", () => {
  document.body.classList.remove("dark-mode");
  textInput.style.backgroundColor = "#F2F2F7";
  textInput.style.color = "black";
  switchThem.style.display = "block";
  switchWhiteThem.style.display = "none";
  headerThemDark.style.display = "none";
  headerThemLight.style.display = "block";
  checkBoxDark.style.accentColor = "#D3A0FA";
});

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

const letterDensityContainer = document.getElementById("letterDensity");

textInput.addEventListener("input", () => {
  let text = textInput.value.toUpperCase();
  let letterCounts = {};

  for (let char of text) {
    if (char.match(/[A-Z]/)) {
      letterCounts[char] = (letterCounts[char] || 0) + 1;
    }
  }

  let totalLetters = Object.values(letterCounts).reduce(
    (sum, count) => sum + count,
    0
  );

  let sortedLetters = Object.entries(letterCounts)
    .map(([letter, value]) => ({
      letter,
      value,
      percentage:
        totalLetters > 0 ? ((value / totalLetters) * 100).toFixed(2) : 0,
    }))
    .sort((a, b) => b.value - a.value);

  letterDensityContainer.innerHTML = "";
  sortedLetters.forEach((item) => {
    const letterItem = document.createElement("div");
    letterItem.className = "letter-item";
    letterItem.innerHTML = `
      <div class="letter">${item.letter}</div>
      <div class="bar-container">
          <div class="bar" style="width: ${item.percentage}%"></div>
      </div>
      <div class="value">${item.value} (${item.percentage}%)</div>
    `;
    letterDensityContainer.appendChild(letterItem);
  });
});

textInput.addEventListener("input", () => {
  let text = textInput.value;

  let characters = text.length;

  let words = text.trim().length > 0 ? text.trim().split(/\s+/).length : 0;

  let sentences = text
    .split(/[.!?]+/)
    .filter((sentence) => sentence.trim().length > 0).length;

  totalCharacters.textContent = characters;
  wordCount.textContent = words;
  sentenceCount.textContent = sentences;
});
