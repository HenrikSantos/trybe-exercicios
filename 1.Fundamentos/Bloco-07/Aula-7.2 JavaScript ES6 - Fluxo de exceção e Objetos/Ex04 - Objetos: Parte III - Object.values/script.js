const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

// Sem Object.values
const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for(let value in student) {
    skills.push(student[value]);
  }

  return skills;
};
console.log(listSkillsValuesWithFor(student));

// Com Object.values
const listSkillsValuesWithValues = (student) => Object.values(student);
console.log(listSkillsValuesWithValues(student));
