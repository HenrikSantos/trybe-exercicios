const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  author: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

//Sem o Object.keys()
for (const property in coolestTvShow) {
  console.log(property);
}


//Com o Object.keys()
console.log(Object.keys(coolestTvShow));


console.log(' ')
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  for (const key in student) {
    console.log(`${key}, Nível: ${student[key]}`)
  }
}
listSkills(student1)
listSkills(student2)