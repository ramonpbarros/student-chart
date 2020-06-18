function gpaCalc(grades) {
  let gpa = 0;
  grades.forEach((element) => {
    let letterGrade = element.split(" ")[2];

    switch (letterGrade) {
      case "A":
        gpa = gpa + 4;
        break;
      case "B":
        gpa = gpa + 3;
        break;
      case "C":
        gpa = gpa + 2;
        break;
      case "D":
        gpa = gpa + 1;
        break;
      default:
        gpa = gpa + 0;
    }
  });

  return gpa / grades.length;
}

export default gpaCalc;
