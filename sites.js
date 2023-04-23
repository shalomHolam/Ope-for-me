const wikitext = {
  name: "wikitext",
  addres: "https://he.wikisource.org/wiki/",
  createURLFunctions: {
    talmud: function (mas, daf, am = "א") {
    return wikitext.addres + mas.hebrawName + "_" + daf + "_" + am;
    }
  }
}

const shitufta = {
  name: "shitufta",
  addres: "https://shitufta.org.il/",
  createURLFunctions: {
      talmud: function (mas, daf, am = "א") {
          let englishAmud = am === "א" ? "a" : am === "ב" ? "b" : "",
          pageNumber = daf.gimatria();
          
        return shitufta.addres + mas.englishName + "/" + pageNumber + englishAmud;
      }
  }
}
const sites = [wikitext, shitufta]
exsport {sites};
