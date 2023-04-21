/******משתנים זמניים עד לפיתוח המסגרת המלאה*****/
// בקובץ settings
const settings = {
  defaultSite: {
    tanach: wikitext,
    talmud: shitufta
  }
}

function Open(url) {
  open(url);
}

/************פונקציות עזר***********/

// בדיקת הגדרות המשתמש
function checkBookSettings(book) {
  return settings.defaultSite[book];
}

// הסרת תת-מחרוזות ממחרוזת
String.prototype.del = function() {
  let fixedString = this;
  Array.prototype.forEach.call(arguments, (badStr) => fixedString = fixedString.replaceAll(badStr, ""));
  return fixedString;
}

// חישוב גימטריה
String.prototype.gimatria = function() {
  const alphabet = {
    'א': 1,
    'ב': 2,
    'ג': 3,
    'ד': 4,
    'ה': 5,
    'ו': 6,
    'ז': 7,
    'ח': 8,
    'ט': 9,
    'י': 10,
    'כ': 20,
    'ך': 20,
    'ל': 30,
    'מ': 40,
    'ם': 40,
    'נ': 50,
    'ן': 50,
    'ס': 60,
    'ע': 70,
    'פ': 80,
    'ף': 80,
    'צ': 90,
    'ץ': 90,
    'ק': 100,
    'ר': 200,
    'ש': 300,
    'ת': 400
  };

  let sum = 0;
  for (let ot of this) {
    sum += alphabet[ot] || 0;
  }
  return sum;
}

// פונקציה לבדיקת תקינות החלקים של מראה מקום
function checkTalmud(theMasechet, page, amud) {
  // אם אחד מהם לא תקין זרוק שגיאה
}

/********פונקציה לפתיחת מראה מקום לתלמוד**********/
function talmud(path) {
  let theMasechet, path1, split, page, pageNumber, amud, englishAmud, url;

  // חילוץ המסכת
  const masechtot = [{
    names: ["ברכות"],
    hebrawName: "ברכות",
    englishName: "Brachot"
  }];

  for (let mas of masechtot) {
    for (let masName of mas.names) {
      if (path.startsWith(masName)) {
        theMasechet = mas;
        path1 = path.del(masName).trim();
        break;
      }
    } //for
  } //for

  // חילוץ הדף

  split = path1.split(" ");
  if (split.length > 2) {
    throw "מראה המקום שהוזן אינו תקין"
  }
  page = split[0].del(`"`, `'`).trim();

  // טיפול בסימון עמוד כנקודה או נקודתיים
  nekuda = page.match(/(:|\.)$/);
  if (nekuda) {
    amud = nekuda[0] == "." ? "א" :
      "ב";
    page = page.del(".", ":");
  }

  // הגדרת העמוד
  amud = amud || split[1] || null;

  /* checkTalmud(theMasechet, page, amud);
 
        if (!theMasechet) {
      throw "לא הוזן שם מסכת תקין";
      return;
    }

      */


  url = checkBookSettings("talmud").createURLFunctions.talmud(theMasechet, page, amud);
  console.log(url)


}

talmud("בבא קמא לח ב")
