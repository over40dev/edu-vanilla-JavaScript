// Some data we can work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inv50 = inventors.filter(i=>i.year>=1500&&i.year<1600);
console.table(inv50);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const invNames = inventors.map(i => [i.first, i.last]);
console.table(invNames);
const invNamesString = inventors.map(i => `${i.first} ${i.last}`);
console.log(invNamesString);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const invByAge = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
console.table(invByAge);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const invAllLived = inventors.reduce((sum, i) => {
  return sum + (i.passed - i.year)
},0);
console.log(invAllLived);

// 5. Sort the inventors by years lived
const invYearsLived = inventors
.map(i=>[i.first,i.last,i.passed-i.year])
.sort((a,b) => a[2] > b[2] ? 1 : -1);
console.table(invYearsLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// code in console when on this web page:
/*
code: arrStreets.map(s => s.text).filter(s => s.includes('de'));

result:
Array(12) [ "Boulevard de l'Amiral-Bruix", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Marguerite-de-Rochechouart", "Boulevard de Sébastopol", … ]
​
0: "Boulevard de l'Amiral-Bruix"
​
1: "Boulevard des Capucines"
​
2: "Boulevard de la Chapelle"
​
3: "Boulevard de Clichy"
​
4: "Boulevard de l'Hôpital"
​
5: "Boulevard des Italiens"
​
6: "Boulevard de la Madeleine"
​
7: "Boulevard de Magenta"
​
8: "Boulevard Marguerite-de-Rochechouart"
​
9: "Boulevard de Sébastopol"
​
10: "Boulevard de Strasbourg"
​
11: "Boulevard de la Zone"
​
length: 12
*/

// 7. sort Exercise
// Sort the people alphabetically by last name
const peopleLastName = people.sort((a,b) => a > b ? 1 : -1);
console.log(peopleLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'jet' ];

const transportCount = data.reduce((sum, d) => {
  
  if (!sum[d]) {
    sum[d] = 1;
  } else {
    sum[d]++;
  }
  return sum;
}, {});
console.log(transportCount);
