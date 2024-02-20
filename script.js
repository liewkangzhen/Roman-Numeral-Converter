const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const conversionList = [["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], ["M", "MM", "MMM"]]

convertBtn.addEventListener("click", startCalculation);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    startCalculation();
  }
});

//function to start calculation
function startCalculation() {
  output.classList.remove("warning");
  output.innerText = "";
  output.style.display = "block";

  if (numberInput.value === "") {
    warning("Please enter a valid number");
    return;
  } else if (numberInput.value < 1) {
    warning("Please enter a number greater than or equal to 1");
    return;
  } else if (numberInput.value > 3999) {
    warning("Please enter a number less than or equal to 3999");
    return;
  }

  output.innerText = convertNumber(numberInput.value);
};

//function to convert Arabic to Roman Numerals
function convertNumber(input) {
  const numberArr = input.split("").reverse();
  const numberLength = numberArr.length;
  const romanNumberArr = [];
  for (let i = 0; i < numberLength; i++) {
    romanNumberArr.push(conversionList[i][parseInt(numberArr[i])-1]);
  }
  return romanNumberArr.reverse().join("");
}

//warning function (creating red box)
function warning(str) {
  output.classList.add("warning");
  output.innerText = str;
  return;
}