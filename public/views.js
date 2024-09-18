const searchFun = () => {
  let filter = document.getElementById("myInput").value.toUpperCase();

  if (filter.length < 3) {
    let myData = document.querySelectorAll(".javascipt");
    for (let i = 1; i < myData.length; i++) {
      myData[i].style.display = "";
    }
    return;
  }

  let myData = document.querySelectorAll(".javascipt");
  for (let i = 0; i < myData.length; i++) {
    let h5 = myData[i].getElementsByTagName("h5")[0];
    let value =  h5.innerText;
    let normalizedValue = value.toUpperCase();

    if (normalizedValue.includes(filter) || isFuzzyMatch(normalizedValue, filter)) {
      myData[i].style.display = "";
    } else {
      myData[i].style.display = "none";
    }
  }
};

const isFuzzyMatch = (text, pattern) => {
  let patternIndex = 0;
  for (let char of text) {
    if (char === pattern[patternIndex]) {
      patternIndex++;
      if (patternIndex === pattern.length) return true;
    }
  }
  return false;
};

document.getElementById("myInput").addEventListener("input", searchFun);
