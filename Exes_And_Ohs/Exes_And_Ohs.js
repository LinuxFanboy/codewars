function XO(str) {
  let xNum = "";
  let oNum = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      xNum += str[i];
    } else if (str[i].toLowerCase() === "o") {
      oNum += str[i];
    }
  }

  return xNum.length === oNum.length;
}
