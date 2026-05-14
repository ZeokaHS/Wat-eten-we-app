import { useEffect, useState } from "react";
import "./App.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function haalOpUitOpslag(key, fallback) {
  const opgeslagen = localStorage.getItem(key);

  if (!opgeslagen) {
    return fallback;
  }

  return JSON.parse(opgeslagen);
}

const startGerechten = [
  {
    naam: "🐔 Bootje hete kip (2 personen)",
    vlag: "/flags/sr.svg",
    afbeelding: "/dishes/bootjehetekip.jpg",
    categorieen: ["Kip 🐔"],
    ingredienten: ["400 gram kippendij", "4 eetlepels ketjap", "5 eetlepels sweet chilisaus", "Sambal naar smaak", "1 eetlepel pindakaas", "Scheutje zonnebloemolie", "2 teentjes knoflook", "1 paprika", "1 rode ui", "Pita broodjes", "Ijsbergsla", "Bakpapier"],
    recept: [
  "Snij de rode ui in kleine stukjes en de paprika in reepjes. (of ook in kleine stukjes als je dat lekkerder vindt! Reepjes hebben mijn voorkeur in dit recept)",
  "Hak je kippendijen in blokjes en marineer met de ketjap, sweet chilisaus, sambal, pindakaas en knoflook",
  "Roer dit allemaal door elkaar en laat even tien minuten intrekken. Verwarm in de tussentijd je oven alvast voor.",
  "Bak de stukjes kip op en als het van de buitenkant volledig dichtgeschroeid is kun je de uitjes mee laten bakken. Dit gerecht moet best lang bakken omdat er veel vocht vrijkomt.",
  "Vergeet tussendoor niet de pita broodjes in de oven te bakken, dan zijn ze het lekkerst!",
  "Terug naar de pan! De ketjap en sweet chilisaus mogen plakkerig worden door het bakken. Als je ziet dat het plakkerig is kun je de paprika reepjes nog even laten meebakken.",
  "Als alles goed is gegaan zijn nu je pitabroodjes ook ongeveer klaar.",
  "Eet smakelijk!"
],
  },
  {
    naam: "🌿 Kaiserschmarnn",
    vlag: "/flags/at.svg",
    afbeelding: "/dishes/kaiserschmarnn.jpg",
    categorieen: ["Vegetarisch 🌿"],
    ingredienten: ["4 eieren", "50g kristalsuiker", "Zakje vanillesuiker", "100g bloem", "100 ml melk", "Vanille aroma", "Eventueel vleugje kaneel", "Zonnebloemolie of boter om mee te bakken"],
    recept: [
  "Pak twee kommen.",
  "In de ene kom de eiwitten, de andere de rest.",
  "Klop de eiwitten stijf en de andere ingrediënten door elkaar.",
  "Vouw de eiwitten door het andere mengsel",
  "Bak dit mengsel op.",
  "Eet smakelijk!"
],
  },
  {
    naam: "🐮🍝 TraTimtionele pasta",
    vlag: "/flags/it.svg",
    afbeelding: "/dishes/tratimtionelepasta.jpg",
    categorieen: ["Pasta 🍝", "Gehakt 🐮"],
    ingredienten: ["4 wortels", "2 stengels bleekselderij", "3 uien", "1 kilo gehakt", "Klein flesje rode wijn 250ml", "2 bouillon blokjes in 150ml water", "300 ml creme fraiche (je kunt ook slagroom of beiden gebruiken)", "Muchos peper", "690 gram passata", "390 gram tomatenblokjes", "Flinke scheut ketjap manis", "Olijfolie", "Pasta 🍝 naar keuze"],
    recept: [
  "Hak de wortels, bleekselderij en uien fijn. Eventueel kun je dit pureren.",
  "Olijfolie in de pan, sofrito erin en goed glazig bakken zoals met ui.",
  "Vlees erbij rullen.",
  "Afblussen met de rode wijn. Geef het verdampen van de rode wijn echt voldoende tijd, anders blijft het enorm naar alcohol smaken. Dit kan echt wel een half uur duren.",
  "Bouillon, passata, tomatenblokjes en ketjap manis erin. Gevolgd door muchos peper.",
  "2-3 uur laten sudderen. Dat is lang maar het ontzuurt alle tomaten.",
  "Maak je pasta en als dit bijna klaar is voeg dan je creme fraiche (of slagroom of beide) erdoor.",
  "Eet smakelijk!"
],
  },
  {
    naam: "🐮🍝 Oma's spaghetti",
    vlag: "/flags/it.svg",
    afbeelding: "/dishes/omasspaghetti.jpg",
    categorieen: ["Pasta 🍝", "Gehakt 🐮"],
    ingredienten: ["500 gram Gehakt", "1 Ui", "Scheutje olijfolie", "Pasta naar keuze", "Scheutje ketjap", "2 blikjes tomatenpuree", "Eventueel paprika", "Eventueel courgette", "Eventueel champignons", "Peper", "Paprikapoeder", "Kurkuma", "Bouillonblokje"],
    recept: [
  "Hak de groentes in stukken, grootte naar keuze.",
  "Doe een scheutje olijfolie in de pan en laat warm worden.",
  "Zet een pan op met water om voor te bereiden voor de pasta en voeg een bouillonblokje toe. Bij voorkeur bouillonblokje kip.",
  "Volg de volgende stappen maar wanneer het water begint te koken voeg je de pasta toe.",
  "Let op dat wanneer je de pasta in de pan kookt je de kooktijd van de pasta aanhoudt en het dan afgiet. Zet bij voorkeur een wekker.",
  "Als de pasta klaar is dan giet je deze af en kun je het in een vergiet laten staan met een deksel erop als je eerder bent dan je andere stappen.",
  "Doe de gehakte ui in de pan en bak glazig.",
  "Voeg het gehakt toe en voeg peper, paprikapoeder en kurkuma toe naar smaak gevolgd door een scheut ketjap.",
  "Als je nog meer groentes gaat gebruiken mogen die er nu bij in.",
  "Voeg de inhoud van de blikjes tomatenpuree toe.",
  "Laat dit allemaal samen nog even doorbakken tot de groentes eruit zien alsof ze niet meer rauw zijn en de tomatenpuree de kans heeft gehad om goed op te warmen.",
  "Voeg de pasta toe aan je saus en meng met elkaar.",
  "Eet smakelijk!"
],
  },
  {
    naam: "🐷🍝 Pasta carbonara",
    vlag: "/flags/it.svg",
    afbeelding: "/dishes/pastacarbonara.jpg",
    categorieen: ["Pasta 🍝", "Varken 🐷"],
    ingredienten: ["2 pakken pancetta", "2 eieren", "Peper", "Pasta naar keuze", "Rucola", "Parmezaanse kaas", "Olijfolie", "1 ui", "3 teentjes knoflook"],
    recept: [
  "Hak de ui, knoflook en pancetta.",
  "Maak een mengsel van 2 eieren, parmezaanse kaas en heel veel peper.",
  "Zet een pan op met water en voeg de pasta toe als het water kookt.",
  "Doe een scheut olijfolie in de pan en laat warm worden.",
  "Voeg de ui en de helft van de knoflook toe en bak glazig",
  "Voeg de pancetta toe en laat bakken",
  "Voeg twee á drie scheppen pasta water toe bij de uien, knoflook en pancetta en laat uitkoken. Je zult een dikkere textuur overhouden voor de saus hierdoor.",
  "Zet het vuur uit en voeg het eimengsel toe. Meteen goed roeren!",
  "Voeg de pasta toe en meng het allemaal samen.",
  "Extra stap voor Nadia: Voeg de rucola toe op je bord.",
  "Eet smakelijk!",
  "Eventueel: Voeg extra peper toe op je bord. Heerlijk!"
],
  },
  {
    naam: "🐮🍙 Bobotie (Under construction)",
    vlag: "/flags/za.svg",
    afbeelding: "/dishes/bobotie.jpg",
    categorieen: ["Rijst 🍙", "Gehakt 🐮"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "🐔 Shoarma",
    vlag: "/flags/tr.svg",
    afbeelding: "/dishes/shoarma.jpg",
    categorieen: ["Kip 🐔"],
    ingredienten: ["500 gram kipshoarma", "Pita", "1 rode ui", "1 paprika", "Sla", "1/2 komkommer", "Scheutje zonnebloemolie", "3 teentjes knoflook", "3 eetlepels yoghurt", "1 theelepel honing", "1 theelepel peterselie", "1 theelepel bieslook", "1 theelepel dille", "Knoflooksaus", "Bakpapier"],
    recept: [
  "Snijd alle groentes.",
  "Voeg de knoflook, yoghurt, honing, peterselie, bieslook en dille samen voor een heerlijke knoflooksaus. Wij mengen dit vaak met een knoflooksaus uit een pot.",
  "Zet een pan op het vuur met een scheutje zonnebloemolie.",
  "Bak de kipshoarma op.",
  "Voeg de helft van de paprika en de rode ui toe en bak mee.",
  "Verwarm de oven voor op 200 graden en bak de pita's in 5 minuten af.",
  "Snijd de pita's over en stop de pita's vol met shoarma en rauwe groentes.",
  "Eet smakelijk!",
  "Tip voor als je Tim bent: Je kunt dit ook omtoveren tot een salade en het pita broodje aan de zijkant nemen."
],
  },
  {
    naam: "🥔🐟 Gebakken aardappelen met panga",
    vlag: "/flags/nl.svg",
    afbeelding: "/dishes/gebakkenaardappelenpanga.jpg",
    categorieen: ["Aardappelen 🥔", "Vis 🐟"],
    ingredienten: ["300 gram vastkokende aardappelen", "2 pangafilets", "Scheutjes olijfolie", "Scheutje chilisaus", "Vismix poeder", "3 teentjes knoflook", "3 eetlepels yoghurt", "1 theelepel honing", "1 theelepel peterselie", "1 theelepel bieslook", "1 theelepel dille", "Knoflooksaus"],
    recept: [
  "Zet een pan met aardappelen en genoeg water om ze in onder te dompelen op.",
  "Kook de aardappelen gaar en schil ze.",
  "Stop de geschilde aardappelen in een ovenschaal en besprenkel met olijfolie en chilisaus.",
  "Verwarm de oven voor op 200 graden en stop in de oven voor 20 minuten.",
  "Strooi vismix over de pangafilets en bak op in een pan.",
  "Voeg de knoflook, yoghurt, honing, peterselie, bieslook en dille samen voor een heerlijke knoflooksaus. Wij mengen dit vaak met een knoflooksaus uit een pot.",
  "Eet smakelijk!"
],
  },
  {
    naam: "🥔🐟 Gebakken aardappelen met zalm",
    vlag: "/flags/no.svg",
    afbeelding: "/dishes/gebakkenaardappelenzalm.jpg",
    categorieen: ["Aardappelen 🥔", "Vis 🐟"],
    ingredienten: ["300 gram vastkokende aardappelen", "Zalm", "Scheutjes olijfolie", "3 teentjes knoflook", "3 eetlepels yoghurt", "1 theelepel honing", "1 theelepel peterselie", "1 theelepel bieslook", "1 theelepel dille", "Knoflooksaus"],
    recept: [
  "Zet een pan met aardappelen en genoeg water om ze in onder te dompelen op.",
  "Kook de aardappelen gaar en schil ze.",
  "Stop de geschilde aardappelen in een ovenschaal en besprenkel met olijfolie en chilisaus.",
  "Verwarm de oven voor op 200 graden en stop in de oven voor 20 minuten.",
  "Verwarm een tweede oven voor (die hebben jullie).",
  "Doe de zalm in een ovenschaal",
  "Besprenkel de zalm met olijfolie en bak voor 25 minuten in de oven.",
  "Voeg de knoflook, yoghurt, honing, peterselie, bieslook en dille samen voor een heerlijke knoflooksaus. Wij mengen dit vaak met een knoflooksaus uit een pot.",
  "Eet smakelijk!"
],
  },
  {
    naam: "🥔🐔 Gebakken aardappelen met schnitzel",
    vlag: "/flags/at.svg",
    afbeelding: "/dishes/gebakkenaardappelenschnitzel.jpg",
    categorieen: ["Aardappelen 🥔", "Kip 🐔"],
    ingredienten: ["300 gram vastkokende aardappelen", "Twee kipfilets", "Scheutjes olijfolie", "Scheutjes zonnebloemolie", "Scheutje chilisaus", "3 teentjes knoflook", "3 eetlepels yoghurt", "1 theelepel honing", "1 theelepel peterselie", "1 theelepel bieslook", "1 theelepel dille", "Knoflooksaus", "Een halve citroen", "1 ei", "Scheutje melk", "Chilimosterd", "Chilipoeder", "Peper", "Panko", "Meel/bloem", "Bakpapier"],
    recept: [
  "Zet een pan met aardappelen en genoeg water om ze in onder te dompelen op.",
  "Kook de aardappelen gaar en schil ze.",
  "Stop de geschilde aardappelen in een ovenschaal en besprenkel met olijfolie en chilisaus.",
  "Verwarm de oven voor op 200 graden en stop in de oven voor 20 minuten.",
  "Snijd de kipfilets doormidden en sla ze plat met een hamer. Tip: Stop hier bakpapier tussen zodat je hamer schoon blijft.",
  "Maak de werkstations voor de schnitzel: 3 borden, eentje met meel/bloem, eentje met panko en eentje met een eimengsel, scheutje melk, chilimosterd, chilipoeder en peper.",
  "Verwarm een pan voor op het vuur met flink wat zonnebloemolie. Het moet soort van frituren.",
  "Ga met de kip eerst door de meel/bloem, daarna door het eimengsel en daarna door de panko.",
  "Bak de schnitzel in de pan.",
  "Herhaal met alle kip totdat alles is opgebakken.",
  "Eet smakelijk!",
  "Tip: Gebruik citroensap over de schnitzel. Echt heerlijk!"
],
  },
  {
    naam: "🌿 Pannekoeken",
    vlag: "/flags/nl.svg",
    afbeelding: "/dishes/pannekoeken.jpg",
    categorieen: ["Vegetarisch 🌿"],
    ingredienten: ["Melk", "Meel/bloem", "1 eetlepel yoghurt", "Vanille aroma", "Zakje vanillesuiker", "2 eieren", "Scheutjes zonnebloemolie of boter om in te bakken", "Nadia: 1 elstar appel", "Nadia: kaneel", "Nadia: bruine suiker", "Nadia: meer yoghurt"],
    recept: [
  "Voeg de melk, meel/bloem, yoghurt, vanille aroma, vanille suiker en eieren samen in een beslagkom en meng goed door elkaar.",
  "Verwarm een pan en doe er olie of boter in.",
  "Voeg een schep beslag toe in de pan en bak dit op.",
  "Eet smakelijk!",
  "Nadia: Snijd de appel in stukjes en voeg kaneel en bruine suiker toe.",
  "Nadia: Als je pannekoek is gebakken doe je er een schep Yoghurt in, voeg je de stukjes appel toe en klap je de pannekoek dicht als een wrap."
],
  },
  {
    naam: "🐔🍙 Kip Rezala (Under construction)",
    vlag: "/flags/in.svg",
    afbeelding: "/dishes/rezala.jpg",
    categorieen: ["Rijst 🍙", "Kip 🐔"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "🐔🍙 Butter Chicken (Under construction)",
    vlag: "/flags/in.svg",
    afbeelding: "/dishes/butterchicken.jpg",
    categorieen: ["Rijst 🍙", "Kip 🐔"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "🐔🍙 Tikka Masala (Under construction)",
    vlag: "/flags/gb.svg",
    afbeelding: "/dishes/tikkamasala.jpg",
    categorieen: ["Rijst 🍙", "Kip 🐔"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "🍤🍝 Garnalen pasta in roomsaus (Under construction)",
    vlag: "/flags/gb.svg",
    afbeelding: "/dishes/garnalenroompasta.jpg",
    categorieen: ["Pasta 🍝", "Garnalen 🍤"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "🐔🍱 Bami (Under construction)",
    vlag: "/flags/cn.svg",
    afbeelding: "/dishes/bami.jpg",
    categorieen: ["Mie 🍱", "Kip 🐔"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "🐔🌯 Quesadillas met kip (Under construction)",
    vlag: "/flags/mx.svg",
    afbeelding: "/dishes/quesadillaskip.jpg",
    categorieen: ["Kip 🐔", "Wraps 🌯"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "🐮 Quesadillas met gehakt (Under construction)",
    vlag: "/flags/mx.svg",
    afbeelding: "/dishes/quesadillasgehakt.jpg",
    categorieen: ["Gehakt 🐮"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "🐮 Mexicaanse schotel (Under construction)",
    vlag: "/flags/mx.svg",
    afbeelding: "/dishes/mexicaanseschotel.jpg",
    categorieen: ["Gehakt 🐮"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "🐔🍙 Omurice (Under construction)",
    vlag: "/flags/jp.svg",
    afbeelding: "/dishes/omurice.jpg",
    categorieen: ["Rijst 🍙", "Kip 🐔"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "🐔🍙 Kip met honingtijm en sinaasappel (Under construction)",
    vlag: "/flags/fr.svg",
    afbeelding: "/dishes/kiphoningtijmsinaasappelrijst.jpg",
    categorieen: ["Rijst 🍙", "Kip 🐔"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
    {
    naam: "🐷🍙 Varkenshaas met rijst (Under construction)",
    vlag: "/flags/cn.svg",
    afbeelding: "/dishes/varkenshaashoningsojasausrijst.png",
    categorieen: ["Rijst 🍙", "Varken 🐷"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
    {
    naam: "🐔🍙 Kipkerrie (Under construction)",
    vlag: "/flags/in.svg",
    afbeelding: "/dishes/kipkerrie.jpg",
    categorieen: ["Rijst 🍙", "Kip 🐔"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
    {
    naam: "🐔🌯 Kipwrap (Under construction)",
    vlag: "/flags/us.svg",
    afbeelding: "/dishes/kipwrap.jpg",
    categorieen: ["Wraps 🌯", "Kip 🐔"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
    {
    naam: "🐔🍟 Kipsaté (Under construction)",
    vlag: "/flags/id.svg",
    afbeelding: "/dishes/kipsate.jpg",
    categorieen: ["Friet 🍟", "Kip 🐔"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
    {
    naam: "🐮 Hamburgers (Under construction)",
    vlag: "/flags/us.svg",
    afbeelding: "/dishes/hamburger.jpg",
    categorieen: ["Gehakt 🐮"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
];

export default function App() {
  const [gerechten, setGerechten] = useState(startGerechten);
  const [gekozenGerecht, setGekozenGerecht] = useState(null);
  const alleCategorieen = [
  ...new Set(gerechten.flatMap((gerecht) => gerecht.categorieen))
];
  const [favorieten, setFavorieten] = useState(() =>
    haalOpUitOpslag("favorieten", [])
  );

  const [verbodenVandaag, setVerbodenVandaag] = useState(() =>
    haalOpUitOpslag("verbodenVandaag", [])
  );

  const [statistieken, setStatistieken] = useState(() =>
    haalOpUitOpslag("statistieken", {})
  );

  const [weekplanning, setWeekplanning] = useState(() =>
    haalOpUitOpslag("weekplanning", {})
  );

  const [ingredientenThuis, setIngredientenThuis] = useState(() =>
  haalOpUitOpslag("ingredientenThuis", [])
  );

  const [actieveCategorieen, setActieveCategorieen] = useState(() =>
  haalOpUitOpslag("actieveCategorieen", [])
  );

const [actieveVlaggen, setActieveVlaggen] = useState(() =>
  haalOpUitOpslag("actieveVlaggen", [])
);

const categorieStatistieken = {};

Object.entries(statistieken).forEach(([gerechtNaam, aantal]) => {
  const gerecht = gerechten.find((g) => g.naam === gerechtNaam);

  if (!gerecht) return;

  gerecht.categorieen.forEach((categorie) => {
    categorieStatistieken[categorie] =
      (categorieStatistieken[categorie] || 0) + aantal;
  });
});

const vlagStatistieken = {};

Object.entries(statistieken).forEach(([gerechtNaam, aantal]) => {
  const gerecht = gerechten.find((g) => g.naam === gerechtNaam);

  if (!gerecht || !gerecht.vlag) return;

  vlagStatistieken[gerecht.vlag] =
    (vlagStatistieken[gerecht.vlag] || 0) + aantal;
});

const gerechtGrafiekData = gerechten.map((gerecht) => ({
  naam: gerecht.naam,
  aantal: statistieken[gerecht.naam] || 0,
}));

const categorieGrafiekData = Object.entries(categorieStatistieken).map(
  ([naam, aantal]) => ({
    naam,
    aantal,
  })
);

const vlagGrafiekData = Object.entries(vlagStatistieken).map(
  ([vlag, aantal]) => ({
    naam: vlag,
    aantal,
    isVlag: true,
  })
);

const zichtbareGerechten = gerechten.filter((gerecht) => {
  const categoriePast =
    actieveCategorieen.length === 0 ||
    actieveCategorieen.every((categorie) =>
      gerecht.categorieen.includes(categorie)
    );

  const vlagPast =
    actieveVlaggen.length === 0 ||
    actieveVlaggen.includes(gerecht.vlag);

  return categoriePast && vlagPast;
});

  useEffect(() => {
  localStorage.setItem("favorieten", JSON.stringify(favorieten));
}, [favorieten]);

useEffect(() => {
  localStorage.setItem("verbodenVandaag", JSON.stringify(verbodenVandaag));
}, [verbodenVandaag]);

useEffect(() => {
  localStorage.setItem("statistieken", JSON.stringify(statistieken));
}, [statistieken]);

useEffect(() => {
  localStorage.setItem("weekplanning", JSON.stringify(weekplanning));
}, [weekplanning]);

useEffect(() => {
  localStorage.setItem("ingredientenThuis", JSON.stringify(ingredientenThuis));
}, [ingredientenThuis]);

useEffect(() => {
  localStorage.setItem("actieveCategorieen", JSON.stringify(actieveCategorieen));
}, [actieveCategorieen]);

useEffect(() => {
  localStorage.setItem("actieveVlaggen", JSON.stringify(actieveVlaggen));
}, [actieveVlaggen]);

function toggleCategorie(categorie) {
  setActieveCategorieen((vorige) =>
    vorige.includes(categorie)
      ? vorige.filter((item) => item !== categorie)
      : [...vorige, categorie]
  );
}

function toggleVlag(vlag) {
  setActieveVlaggen((vorige) =>
    vorige.includes(vlag)
      ? vorige.filter((item) => item !== vlag)
      : [...vorige, vlag]
  );
}

function resetAlles() {
  localStorage.clear();
  setFavorieten([]);
  setVerbodenVandaag([]);
  setStatistieken({});
  setWeekplanning({});
  setIngredientenThuis([]);
  setGekozenGerecht(null);
  setActieveCategorieen([]);
  setActieveVlaggen([]);
}

function toggleIngredientThuis(ingredient) {
  setIngredientenThuis((vorige) =>
    vorige.includes(ingredient)
      ? vorige.filter((item) => item !== ingredient)
      : [...vorige, ingredient]
  );
}

  function kiesGerecht() {
    const beschikbareGerechten = gerechten.filter((gerecht) => {
      const nietVerboden = !verbodenVandaag.includes(gerecht.naam);

      const categoriePast =
        actieveCategorieen.length === 0 ||
        actieveCategorieen.every((categorie) =>
          gerecht.categorieen.includes(categorie)
        );

      const vlagPast =
        actieveVlaggen.length === 0 ||
        actieveVlaggen.includes(gerecht.vlag);

      return nietVerboden && categoriePast && vlagPast;
    });

    if (beschikbareGerechten.length === 0) {
      setGekozenGerecht({ naam: "Alles is verboden vandaag 😅" });
      return;
    }

const gewogenGerechten = beschikbareGerechten.flatMap((gerecht) =>
  favorieten.includes(gerecht.naam)
    ? [gerecht, gerecht]
    : [gerecht]
);

const random =
  gewogenGerechten[
    Math.floor(Math.random() * gewogenGerechten.length)
  ];

    setGekozenGerecht(random);

    setStatistieken((vorigeStats) => ({
      ...vorigeStats,
      [random.naam]: (vorigeStats[random.naam] || 0) + 1,
    }));

  }

  function openGerecht(gerecht) {
    setGekozenGerecht(gerecht);
  }

function kiesOpnieuw() {
  if (!gekozenGerecht || !gekozenGerecht.categorieen) {
    return;
  }

  verlaagStatistiek(gekozenGerecht.naam);

  const beschikbareGerechten = gerechten.filter((gerecht) => {
    const nietVerboden = !verbodenVandaag.includes(gerecht.naam);

    const nietHetzelfde =
      gerecht.naam !== gekozenGerecht.naam;

    const categoriePast =
      actieveCategorieen.length === 0 ||
      actieveCategorieen.every((categorie) =>
        gerecht.categorieen.includes(categorie)
      );

    const vlagPast =
      actieveVlaggen.length === 0 ||
      actieveVlaggen.includes(gerecht.vlag);

    return nietVerboden && nietHetzelfde && categoriePast && vlagPast;
  });

  if (beschikbareGerechten.length === 0) {
    setGekozenGerecht({ naam: "Geen alternatief gevonden 😅" });
    return;
  }

  const gewogenGerechten = beschikbareGerechten.flatMap((gerecht) =>
    favorieten.includes(gerecht.naam)
      ? [gerecht, gerecht]
      : [gerecht]
  );

  const random =
    gewogenGerechten[
      Math.floor(Math.random() * gewogenGerechten.length)
    ];

  setGekozenGerecht(random);
  verhoogStatistiek(random.naam);
}

  function verhoogStatistiek(gerechtNaam) {
  setStatistieken((vorigeStats) => ({
    ...vorigeStats,
    [gerechtNaam]: (vorigeStats[gerechtNaam] || 0) + 1,
  }));
}

function verlaagStatistiek(gerechtNaam) {
  setStatistieken((vorigeStats) => {
    const huidigAantal = vorigeStats[gerechtNaam] || 0;

    if (huidigAantal <= 1) {
      const nieuweStats = { ...vorigeStats };
      delete nieuweStats[gerechtNaam];
      return nieuweStats;
    }

    return {
      ...vorigeStats,
      [gerechtNaam]: huidigAantal - 1,
    };
  });
}

  function toggleFavoriet(naam) {
    setFavorieten((vorige) =>
      vorige.includes(naam)
        ? vorige.filter((item) => item !== naam)
        : [...vorige, naam]
    );
  }

  function toggleVerbodenVandaag(naam) {
    setVerbodenVandaag((vorige) =>
      vorige.includes(naam)
        ? vorige.filter((item) => item !== naam)
        : [...vorige, naam]
    );
  }

  function planGerecht(dag, gerechtNaam) {
    setWeekplanning((vorigePlanning) => ({
      ...vorigePlanning,
      [dag]: gerechtNaam,
    }));
  }

const weekplanningIngredienten = Object.values(weekplanning)
  .map((gerechtNaam) =>
    gerechten.find((gerecht) => gerecht.naam === gerechtNaam)
  )
  .filter(Boolean)
  .flatMap((gerecht) => gerecht.ingredienten);

const actieveGerechtIngredienten =
  gekozenGerecht?.ingredienten || [];

const alleIngredienten = [
  ...weekplanningIngredienten,
  ...actieveGerechtIngredienten,
];

const alleVlaggen = [
  ...new Set(gerechten.map((gerecht) => gerecht.vlag).filter(Boolean))
];

const uniekeBoodschappen = [...new Set(alleIngredienten)].filter(
  (ingredient) => !ingredientenThuis.includes(ingredient)
);

function StatistiekGrafiek({ data, bewerkbaar = false }) {
  if (data.length === 0) {
    return <p>Nog geen statistieken.</p>;
  }

  const hoogsteAantal = Math.max(...data.map((item) => item.aantal), 1);

  return (
    <div className="simple-chart">
      {data.map((item) => (
        <div key={item.naam} className="chart-row">
          <div className="chart-label">
            {item.isVlag ? (
              <img src={item.naam} alt="" className="chart-flag" />
            ) : (
              item.naam
            )}
          </div>

          <div className="chart-bar-background">
            <div
              className="chart-bar"
              style={{
                width: `${(item.aantal / hoogsteAantal) * 100}%`,
              }}
            >
              {item.aantal}x
            </div>
          </div>

          <div className="stat-buttons">
            {bewerkbaar && (
              <>
                <button onClick={() => verlaagStatistiek(item.naam)}>-</button>
                <button onClick={() => verhoogStatistiek(item.naam)}>+</button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

  return (
    <div className="app">
      <h1>Wat eten we?</h1>

<section className="card">
  <h2>Categorieën</h2>

  <div className="categories">
    {alleCategorieen.map((categorie) => (
      <label key={categorie} className="checkbox-pill">
        <input
          type="checkbox"
          checked={actieveCategorieen.includes(categorie)}
          onChange={() => toggleCategorie(categorie)}
        />
        {" "}
        {categorie}
      </label>
    ))}
  </div>

<p className="categories-info"><i>Geen categorie aangevinkt = alles mag.</i></p>

<h2>Landen</h2>

<div className="categories">
  {alleVlaggen.map((vlag) => (
    <label key={vlag} className="checkbox-pill">
      <input
        type="checkbox"
        checked={actieveVlaggen.includes(vlag)}
        onChange={() => toggleVlag(vlag)}
      />

      {" "}

      <img
        src={vlag}
        alt=""
        style={{
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          objectFit: "cover",
          verticalAlign: "middle",
        }}
      />
    </label>
  ))}
</div>

</section>

<div className="buttons">
  <button onClick={kiesGerecht}>Kies willekeurig gerecht</button>
  <button onClick={kiesOpnieuw} disabled={!gekozenGerecht || !gekozenGerecht.categorieen}>Kies opnieuw</button>
  <button onClick={resetAlles}>Reset alles</button>
</div>

      {gekozenGerecht && (
<div className="result-card">
  {gekozenGerecht.vlag && (
    <img
      src={gekozenGerecht.vlag}
      alt=""
      className="result-flag"
    />
  )}

  <h2>{gekozenGerecht.naam}</h2>

  {gekozenGerecht.afbeelding && (
  <img
    src={gekozenGerecht.afbeelding}
    alt={gekozenGerecht.naam}
    className="dish-image"
  />
)}

  {gekozenGerecht.ingredienten && (
    <div>
      <h3>Ingrediënten</h3>

      {gekozenGerecht.ingredienten.map((ingredient) => (
        <label key={ingredient} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={ingredientenThuis.includes(ingredient)}
            onChange={() => toggleIngredientThuis(ingredient)}
          />
          {" "}
          {ingredient}
        </label>
      ))}
    </div>
  )}

  {gekozenGerecht.recept && (
    <div>
      <h3>Recept</h3>

      <ol>
        {gekozenGerecht.recept.map((stap, index) => (
          <li key={index}>{stap}</li>
        ))}
      </ol>
    </div>
  )}
</div>
    )}

      <h2>Boodschappenlijst</h2>

      <ul>
        {uniekeBoodschappen.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

<section className="card">
  <h2>Gerechten</h2>

  {zichtbareGerechten.map((gerecht) => (
    <div key={gerecht.naam} className="dish-row" onClick={() => openGerecht(gerecht)}>
      <button className="dish-open-button" onClick={() => openGerecht(gerecht)}>
  {gerecht.vlag && (
    <img src={gerecht.vlag} alt="" className="dish-list-flag"/>
  )}

  <strong>{gerecht.naam}</strong>
</button>

      <div className="dish-actions">
        <button onClick={(e) => {e.stopPropagation(); toggleFavoriet(gerecht.naam);}}>
          {favorieten.includes(gerecht.naam) ? "❤️ Favoriet" : "🤍 Favoriet"}
        </button>

        <button onClick={(e) => {e.stopPropagation(); toggleVerbodenVandaag(gerecht.naam);}}>
          {verbodenVandaag.includes(gerecht.naam)
            ? "✅ Mag weer"
            : "🚫 Verboden vandaag"}
        </button>
      </div>
    </div>
  ))}
</section>

            <h2>Weekplanning</h2>

      {["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"].map(
        (dag) => (
          <div key={dag} className="weekplanning-row">
            <strong className="weekplanning-day">{dag}:</strong>
            <select
              value={weekplanning[dag] || ""}
              onChange={(e) => planGerecht(dag, e.target.value)}
            >
              <option value="">Kies gerecht</option>
              {gerechten.map((gerecht) => (
                <option key={gerecht.naam} value={gerecht.naam}>
                  {gerecht.naam}
                </option>
              ))}
            </select>
          </div>
        )
      )}

<section className="card">
  <h2>Statistieken</h2>

  <h3>Gerechten</h3>
  <StatistiekGrafiek data={gerechtGrafiekData} bewerkbaar />

  <h3>Categorieën</h3>
  <StatistiekGrafiek data={categorieGrafiekData} />

  <h3>Landen</h3>
  <StatistiekGrafiek data={vlagGrafiekData} />
</section>

    </div>
  );
}