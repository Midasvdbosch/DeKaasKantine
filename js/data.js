/*
 * De Kaaskantine — alle inhoud die regelmatig verandert staat hier.
 *
 * Weekend special wisselen? Pas alleen het blok `weekendSpecial` aan.
 * Menu aanpassen? Pas de items in `menu` aan. Prijzen in euro's (9 = €9,-  10.25 = €10,25).
 * Labels die iets doen: "Nieuw" (gele badge) en "Halal" (gouden /Halal achter de prijs).
 */
window.KAASKANTINE = {
  bestellink: "https://bit.ly/3VYHcHa",

  weekendSpecial: {
    naam: "Broodje Zoete Stoofvlees",
    beschrijving: "Langzaam gegaard zoet stoofvlees, romige mayo, krokante kentang en verse bosui.",
    prijs: 9.5,
    afbeelding: "images/weekend-special.jpg",
    alt: "Broodje zoete stoofvlees met bosui en krokante kentang op een bordje"
  },

  // 0 = zondag, 1 = maandag … 6 = zaterdag. null = gesloten.
  openingstijden: {
    0: ["10:00", "16:00"],
    1: null,
    2: null,
    3: ["10:00", "17:00"],
    4: ["10:00", "17:00"],
    5: ["10:00", "17:00"],
    6: ["10:00", "17:00"]
  },

  menu: [
    {
      naam: "Specials",
      intro: "Onze signature broodjes. Een bescheiden broodje was nooit de bedoeling.",
      items: [
        { naam: "Broodje Brandalarm", beschrijving: "Malse hete kippendij, chipotlemayonaise, rode ui, gebakken ui", prijs: 9, labels: ["Nieuw", "Halal"] },
        { naam: "Broodje Dakduif", beschrijving: "Pulled chicken, little gem, limoenmayonaise, rode ui, gebakken ui, bosui", prijs: 9 },
        { naam: "Broodje Dikke Nek", beschrijving: "Lichtgerookte ribeye, truffelmayonaise, gepofte tomaat, rucola, gebakken ui, rode ui", prijs: 9 },
        { naam: "Broodje Kaaskop", beschrijving: "Brie, honingmosterdmayonaise, rucola, walnoten", prijs: 9 },
        { naam: "Broodje Don Morta", beschrijving: "Mortadella, stracciatella, pesto, pistachecrumble", prijs: 10.25, labels: ["Nieuw"] },
        { naam: "Broodje Tuna Smelt", beschrijving: "Tonijn, rode ui, mosterd, ketchup, mayonaise, kaas, chili-olie, paprikapoeder, gesmolten kaas", prijs: 9 },
        { naam: "Brioche Krokante Karel", beschrijving: "Gefrituurde kippendij, coleslaw, uiencompote, srirachamayonaise op brioche", prijs: 10.25, labels: ["Nieuw", "Halal"] },
        { naam: "Broodje Baastrami", beschrijving: "Pastrami, rucola, truffelmayonaise, rode ui, srirachamayonaise", prijs: 10, labels: ["Nieuw"] }
      ]
    },
    {
      naam: "Klassiekers",
      intro: "Gewoon goed. Precies zoals 'ie hoort.",
      items: [
        { naam: "Broodje Bal", beschrijving: "Bal van slagerij Louman in jus, met huisgemaakte pindasaus", prijs: 5.5 },
        { naam: "Broodje Ossenworst", prijs: 7 },
        { naam: "Broodje Grillworst", prijs: 7 },
        { naam: "Broodje Grillworst Kaas", prijs: 7.5 },
        { naam: "Broodje Grillworst Kaas & Jalapeño", prijs: 7.5 },
        { naam: "Broodje Filet José", prijs: 7.5 },
        { naam: "Broodje Tonijnsalade", prijs: 7 },
        { naam: "Broodje Oude Kaas", prijs: 6 },
        { naam: "Broodje Jonge Kaas", prijs: 5.5 }
      ]
    },
    {
      naam: "Koffie & thee",
      intro: "Sicilian blend. Goede koffie voor een eerlijke prijs.",
      items: [
        { naam: "Espresso", prijs: 1.95 },
        { naam: "Dubbele espresso", prijs: 2.25 },
        { naam: "Zwarte koffie", prijs: 2.5 },
        { naam: "Cappuccino", prijs: 2.75 },
        { naam: "Cappuccino haver", prijs: 3 },
        { naam: "Flat white", prijs: 3 },
        { naam: "Café bombón", prijs: 3 },
        { naam: "Gemberthee", prijs: 2.5 },
        { naam: "Muntthee", prijs: 2.5 },
        { naam: "IJskoffie", beschrijving: "Alleen in de zomer", prijs: 3.5 },
        { naam: "Koffie of cappuccino + croissant", beschrijving: "Onze vaste ochtenddeal", prijs: 5.5 }
      ]
    },
    {
      naam: "Zoet & drinken",
      intro: "Cookies van Dough Department uit Alkmaar, en fris van makers met een verhaal.",
      items: [
        { naam: "Cookie Choco Chip", beschrijving: "NYC-style, 140 g. Knapperig van buiten, gooey van binnen", prijs: 5.5 },
        { naam: "Cookie Triple Choco", beschrijving: "NYC-style, 140 g", prijs: 5.5 },
        { naam: "Cookie Red Velvet", beschrijving: "NYC-style, 140 g", prijs: 5.5 },
        { naam: "Galvanina", beschrijving: "Aranciata Rossa, Té alla Pesca of Pompelmo Rosso", prijs: 3.95 },
        { naam: "Thijs BIO", beschrijving: "Appel, gember of aardbei", prijs: 3.95 },
        { naam: "Kombucha", prijs: 3.95 },
        { naam: "Cola", beschrijving: "No name. Just taste.", prijs: 4.2 }
      ]
    }
  ]
};
