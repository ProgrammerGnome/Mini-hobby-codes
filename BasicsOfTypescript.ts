// FŐ VÁLTOZÓ
let mixedValue: (number | string)[];
const numbersArray1 = [3, 1, 77, 4, 5, 11, 6, 9];
const numbersArray2 = [5, 6, 32, 1, 34, 7, 34, 43, 32, 2];
const stringArray: String[] = ["Ez","az","amaz","hosszabb","szöveg","amely","nem","tartalmaz","valamilyen","példa"];

// SECTION 1.FELADAT
// 1. Részszöveg kinyerése
// Írjon egy függvényt, amely egy szöveg meghatározott részét adja vissza. A függvény két paramétert fogad: a kezdő és záró indexeket, és visszaadja a kinyert részszöveget.
function printData(variable: string | number) {
    if (typeof variable === "string") {
      console.log(`A változó típusa: ${typeof variable}, értéke: ${variable.toUpperCase()}`);
    } else {
      console.log(`A változó típusa: ${typeof variable}, értéke: ${variable}`);
    }
  }
printData("123");
printData(123);

// SECTION 2.FELADAT
// 2. Szöveg nagybetűssé alakítása
// Írjon egy függvényt, amely nagybetűssé alakít egy szöveget, és visszaadja az eredményt.
function changingFunction(input: string | number) {
    if (typeof input === "string") {
        console.log(`Teszt: ${input.concat(" teszt")}.`)
    } else {
        console.log('404')
    }
  }

changingFunction("abc");

// SECTION 3.FELADAT
// 3. Szöveg cseréje
// Írjon egy függvényt, amely egy adott szövegben egy meghatározott részt kicserél egy másikra. A függvénynek három bemenő paramétere van: az eredeti szöveg, a kicserélendő szöveg, és az új, beillesztendő szöveg.
const greeting1 = "Hello, World!";
function replaceFunction(greeting: string, oldWord: string, newWord: string) {
    return greeting.replace(oldWord, newWord);
}
console.log(replaceFunction(greeting1, "World", "TypeScript"));

// SECTION 4.FELADAT
// 4. Leghosszabb szó megtalálása
// Írjon egy függvényt, amely megtalálja és visszaadja a leghosszabb szót egy adott mondatban. Ha két vagy több ilyen leghosszabb szó van, akkor adja vissza az elsőt. Tegyük fel, hogy a mondat nem tartalmaz írásjeleket.
function longestWord(sentence: string) {
    const words = sentence.split(" ");
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  }
  console.log(longestWord("The quick brown fox jumpsLililili over the lazy dog"));

// SECTION 5.FELADAT
// 5. Minden szó megfordítása
// Írjon egy függvényt, amely megfordít minden szót egy mondatban, és visszaadja az eredményül kapott mondatot. A szavak sorrendjét tartsa meg változatlanul.
const sentence = "The quick brown fox jumps over the lazy dog";
function reverseWordFunc(sentence : string) {
    const words = sentence.split(" ");
    const reversedSentence: string[] = [];
    for (let word of words) {
        word = word.split("").reverse().join("");
        reversedSentence.push(word);
    };
    return reversedSentence.join(" ");
}
console.log(reverseWordFunc(sentence));

// SECTION 6.FELADAT
// 6. Tömbök összefésülése és rendezése
// Írjon egy függvényt, amely összefésül két számtömböt, és egy új tömböt ad vissza, amelyben az elemek növekvő sorrendbe vannak rendezve.
function properlySorted(arr1: Array<number>, arr2: Array<number>) {
  const numbersToSort: number[][] = [];
  numbersToSort.push(numbersArray1);
  numbersToSort.push(numbersArray2);
  const resultList= numbersToSort.flat();
  resultList.sort((a, b) => a - b);
  return console.log("properly sorted:", resultList.join(" "));;
}
properlySorted(numbersArray1, numbersArray2);

// SECTION 7.FELADAT
// 7. Duplikátumok eltávolítása egy tömbből
// Írjon egy függvényt, amely eltávolít minden duplikátum értéket egy számtömbből, és visszaadja az eredményül kapott tömböt.
const A = [1, 1, 2, 2, 2, 2, 5, 5];
function duplicateRemoverFunciton() {
  let set = new Set(A);
  console.log(JSON.stringify([...set]));
}
duplicateRemoverFunciton();

// SECTION 8.FELADAT
// 8. Két tömb metszetének megtalálása
// Írjon egy függvényt, amely megtalálja két tömb metszetét (azaz azokat az elemeket, amelyek mindkét tömbben jelen vannak), és visszaadja a metsző elemeket egy új tömbként.
function interSectioner(arr1: Array<number>, arr2: Array<number>) {
  const intersectionArray = numbersArray1.filter(number => numbersArray2.includes(number));
  console.log('longer than 5 letters:', intersectionArray);
}
interSectioner(numbersArray1, numbersArray2);

// SECTION 9.FELADAT
// 9. Tömb jobbra forgatása
// Írjon egy függvényt, amely jobbra forgatja egy tömb elemeit egy adott lépésszám szerint. Például a [1, 2, 3, 4, 5] tömb jobbra forgatása két lépéssel az [4, 5, 1, 2, 3] eredményt adja.
function rotateArrayToRight(inputNumber: number) {
  const ujTomb: number[] = [];
  const ujTomb2: number[] = [];
  let counter = 0;
  while (counter < numbersArray2.length) {
    if (counter < numbersArray2.length - inputNumber) {
      ujTomb.push(numbersArray2[counter]);
    } else {
      ujTomb2.push(numbersArray2[counter]);
    }
    counter++;
  }
  const rotatedArray = ujTomb2.concat(ujTomb);
  return console.log('Jobbraforgatás példa:',rotatedArray.join(" "));
}
rotateArrayToRight(3);

// SECTION 10.FELADAT
// 10. Az összes elem összege egy számtömbben
// Számolja ki az összes elem összegét egy számtömbben a i) forEach() ii) reduce() használatával
var sumNumber = numbersArray1.reduce((acc, current) => acc + current, 0);
console.log('Az összeg:',sumNumber);

sumNumber = 0;
numbersArray1.forEach(number => {
  sumNumber += number;
});
console.log("Így is annyi az összeg:",sumNumber);

// SECTION 11.FELADAT
// 11. Elemek négyzetének kiszámítása map() használatával
// Hozzon létre egy új tömböt, amely tartalmazza az eredeti tömb minden számának négyzetét
function seconderFunc(arr: Array<number>) {
  const newNumbers = numbersArray1.map(number => number * number);
  console.log(newNumbers.join(" "));
}
seconderFunc(numbersArray1);

// SECTION 12.FELADAT
// 12. Minden páros szám kiszűrése
// Szűrje ki az összes páros számot egy tömbből a filter() használatával
function filterer(arr: Array<number>) {
  const newNumbers = numbersArray1.filter(number => number % 2 === 0);
  console.log("Párosak:",newNumbers.join(" "));
}
filterer(numbersArray1);

// SECTION 13.FELADAT
// 13. Minden 4 karakternél hosszabb sztring kiszűrése a paraméterként megadott tömbből
function fourPlustFilter(arr: Array<String>) {
  const newNumbers = arr.filter(element => element.length > 4);
  console.log("4 karakternél hoszabb string:",newNumbers.join(" "));
}
fourPlustFilter(stringArray);

// SECTION 14.FELADAT
// 14. A legnagyobb szám megtalálása egy tömbben, reduce() használatával
const sumArray = numbersArray2.reduce((acc, current) => (current > acc ? current : acc), 0);
console.log('Az összeg:',sumArray);

// SECTION 15.FELADAT
// 15. Az összes sztring összefűzése egy tömbben egyetlen sztringgé, reduce() használatával
const fullString = "";
const sumString = stringArray.reduce((acc, current) => fullString.concat(acc.toString(), current.toString()), "");
console.log('Osszefuzve:',sumString);
