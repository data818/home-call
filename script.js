const checkButton = document.querySelector("#checkButton");
const result = document.querySelector("#result");

checkButton.addEventListener("click", function () {
  const worldInput = document.querySelector("#wordInput").value;
  if (word === "") {
    result.textContent = "გთხოვთ შეიყვანოთ სიტყვა";
    return;
  }
  console.log(word[0]);

  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(word[0])) {
    result.textContent = `სიტყვა იწყება ხმოვანით,რომელიც არის ${word[o]}`;
  } else result.textContent = `სიტყვა არ იწყება ხმოვანით,რომელიც არის ${word[0]}`;
});
