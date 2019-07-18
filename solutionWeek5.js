//1
function hello(name) {
  if (name === "" || name === null) {
    return null
  }
  return "HELLO " + name + " !"
}
hello("")
hello("Jouza")
hello("Alex")
hello(null)


//2
function calculateTax(sales, tax) {
  return "You got " + sales + " JD from sales, you should pay " + (sales * tax) + " JD for tax and you will have " + (sales - sales * tax) + " JD as net sales."
}
calculateTax(500, 0.16)
calculateTax(315, 0.10)
calculateTax(100, 0.15)


//3
function repeatChar(char, n) {
  var result = "";
  while (n !== 0) {
    if (n % 2 === 0) {
      result = result + char.toLowerCase() + ", ";
    } else {
      result = result + char.toUpperCase() + ", ";
    }
    n -= 1;
  }
  return result.slice(0, result.length - 2);
}
repeatChar("a", 2);
repeatChar("C", 5);


//4
function stringToCapital(str) {
  if (str.length === 0) {
    return ""
  }
  return str[0].toUpperCase() + stringToCapital(str.slice(1))
}

stringToCapital("My Name Is: Alex !")
stringToCapital("Are you a student in coding ACADEMY by ORANGE ?")
