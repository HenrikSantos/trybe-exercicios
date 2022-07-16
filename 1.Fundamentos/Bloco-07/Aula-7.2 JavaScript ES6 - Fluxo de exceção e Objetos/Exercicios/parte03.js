const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const addProperty = (object, property, value) => {
  object[property] = value;
};

addProperty(lesson2, "turno", "noite");
console.log(lesson2);

const listKeys = (object) => {
  return Object.keys(object);
};

console.log(listKeys(lesson1));

const listObjectLength = (object) => {
  return Object.keys(object).length;
};

console.log(listObjectLength(lesson1));

const listObjectValues = (object) => {
  return Object.values(object);
};

console.log(listObjectValues(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

const numberOfStudents = (object) => {
  let totalOfStudents = 0;
  let currentLesson = "lesson";
  for (index = 1; index <= Object.keys(object).length; index += 1) {
    currentLesson += index;
    totalOfStudents += object[currentLesson].numeroEstudantes;
    currentLesson = "lesson";
  }
  return totalOfStudents;
};
console.log(numberOfStudents(allLessons));

const getValueByNumber = (object, number) => {
  return Object.values(object)[number];
};

console.log(getValueByNumber(lesson1, 0));

const verifyPair = (object, propriedade, valor) => {
  return object[propriedade].includes(valor);
};
console.log(verifyPair(lesson3, "turno", "noite"));
console.log(verifyPair(lesson3, "materia", "Maria Clara"));

const estudantesDeMatematica = (object) => {
  let totalOfStudents = 0;
  let currentLesson = "lesson";
  for (index = 1; index <= Object.keys(object).length; index += 1) {
    currentLesson += index;
    if (object[currentLesson].materia === "Matemática") {
      totalOfStudents += object[currentLesson].numeroEstudantes;
    }
    currentLesson = "lesson";
  }
  return totalOfStudents;
};

console.log(estudantesDeMatematica(allLessons));

const createReport = (object, professor) => {
  let totalDeEstudantes = 0;
  let currentLesson = "lesson";
  let totalAulas = [];
  for (index = 1; index <= Object.keys(object).length; index += 1) {
    currentLesson += index;
    if (object[currentLesson].professor === professor) {
      totalDeEstudantes += object[currentLesson].numeroEstudantes;
      totalAulas.push(` ${object[currentLesson].materia}`);
    }
    currentLesson = "lesson";
  }
  return `professor: ${professor}, 
aulas: ${totalAulas},
estudantes: ${totalDeEstudantes}`;
};

console.log(createReport(allLessons, "Maria Clara"));
