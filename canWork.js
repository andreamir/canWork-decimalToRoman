// ----------- ¿Puede trabajar?   ----------

const people = [
  {
    name: 'Jona',
    address: 'xxx',
    birthDay: new Date(2020, 3, 26),
    parents : [
      {
        name: 'Paco',
        address: 'xxx',
        authorizeTheirSon: true,
      },
      {
        name: 'Mar',
        address: 'xxx',
        authorizeTheirSon: false,
      }
    ]
  },
  {
    name: 'Drea',
    birthDay: new Date(1979, 8, 16),
    address: 'zzz',
    parents : [
      {
        name: 'Hernan',
        address: 'zzz',
        authorizeTheirSon: false,
      },
      {
        name: 'Paqui',
        address: 'zzz',
        authorizeTheirSon: false,
      }
    ]
  }
];

function isAdult(person) {
  const todayDate = new Date();
  const birthDate = new Date(person.birthDay);
  const age = todayDate.getFullYear() - birthDate.getFullYear();
  return age >= 18;
}
function permission(person) {
  const [dad,mum] = person.parents;
  if (isAdult(person)) {return true;}
  if (mum.address !== person.address && dad.adress !== person.address) {
    return true;
  }
  if (!isAdult(person)) {
    if (mum.authorizeTheirSon ||  dad.authorizeTheirSon)
    {return true;}
    // si en un futuro necesitaramos "más padres", este código no funcionaria
    // for (const parent of person.parents)
    // {independent = parent.address !== person.address ? independent : false;
    // permission = parent.authorizeTheirSon ? true : permission}
  }
  return false;
}
function canWork(person) {
  for (const person of people) {
    if (permission(person)) {
      console.log(`${person.name} puede trabajar.`);
    } else {
      console.log(`${person.name} no puede trabajar.`);
    }
  }
}
canWork();