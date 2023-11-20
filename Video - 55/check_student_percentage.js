let per;

per = prompt("Enter Your Percentage in exams : ");

if (per >= 80) {
  document.write("You got A+");
} else if (per >= 70) {
  document.write("You got A");
} else if (per >= 60) {
  document.write("You got B");
} else if (per >= 50) {
  document.write("You got C Grade");
} else {
  document.write(
    "You are fail and you can't be promoted to next class !!! Sorry "
  );
}

// Always keep in mind that else is not necessary
