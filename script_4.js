
const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log('Entrepreneurs nés dans les années 70');
let result70 = entrepreneurs.filter(entrepreneur => entrepreneur['year']>=1970 && entrepreneur['year']<1980);
console.log(result70);

console.log('Array prénom et nom des entrepreneurs');
resultName=[];
for(let i in entrepreneurs)
  resultName.push({
    first: entrepreneurs[i].first,
    last: entrepreneurs[i].last
  });
console.log(resultName);

console.log("Âge des inventeurs aujourd'hui ?");
for(let i in entrepreneurs){
  let age = 2022 - entrepreneurs[i].year;
  console.log(entrepreneurs[i].first+" "+entrepreneurs[i].last+' a '+age+" ans aujourd'hui");
};

console.log("Trie par ordre alphabétique.");
console.log(entrepreneurs.sort(function compare(a,b){
  if (a.last < b.last)
    return -1;
  else
    return 1;   
}));