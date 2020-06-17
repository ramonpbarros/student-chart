
function gpaCalc(materia) {
  if (materia === "A") {
    return 4;
  } else if (materia === "B") {
    return 3;
  } else if (materia === "C") {
    return 2;
  } else if (materia === "D") {
    return 1;
  } else {
    return 0;
  }
}

export default gpaCalc