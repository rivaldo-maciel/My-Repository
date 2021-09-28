const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function exerciseOne(obj, key, value) {
  obj[key] = value
  return lesson2
}

function listKeys(obj) {
  return Object.keys(obj)
}

function showLength(obj) {
  return Object.keys(obj).length
}

function listValues(obj) {
  return Object.values(obj)
}

let allLessons = Object.assign({},{lesson1,lesson2,lesson3})

function totalStudents(obj) {
  return allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes
}

function returnValueKey(obj,position) {
  return Object.values(obj)[position]
}

function verifyKey(obj,key,value) {
  const pairs = Object.entries(obj)
  let isEqual = false
  for (let i = 0; i < pairs.length; i += 1 ){
    if (pairs[i][0] === key && pairs[i][1] === value) {
      isEqual = true
    }
  }
  return isEqual
}
console.log(verifyKey(lesson3,'numeroEstudantes',1))

/* const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson3,'numeroEstudantes',10)); */