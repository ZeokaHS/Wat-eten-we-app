import { useEffect, useState } from "react";
import "./App.css";

function haalOpUitOpslag(key, fallback) {
  const opgeslagen = localStorage.getItem(key);

  if (!opgeslagen) {
    return fallback;
  }

  return JSON.parse(opgeslagen);
}

const startGerechten = [
  {
    naam: "Bootje hete kip (2 personen)",
    categorieen: ["Kip"],
    ingredienten: ["400 gram kippendij", "4 eetlepels ketjap", "5 eetlepels sweet chilisaus", "sambal naar smaak", "1 eetlepel pindakaas", "zonnebloemolie", "2 teentjes knoflook", "1 paprika", "1 rode ui", "pita broodjes", "ijsbergsla"],
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
    naam: "Kaiserschmarnn",
    categorieen: ["Vegetarisch"],
    ingredienten: ["4 eieren", "50g kristalsuiker", "zakje vanillesuiker", "100g bloem", "100 ml melk", "Vanille aroma", "eventueel vleugje kaneel", "zonnebloemolie of boter om mee te bakken"],
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
    naam: "TraTimtionele pasta",
    categorieen: ["Pasta", "Gehakt"],
    ingredienten: ["4 wortels", "2 stengels bleekselderij", "3 uien", "1 kilo gehakt", "Klein flesje rode wijn 250ml", "2 bouillon blokjes in 150ml water", "300 ml creme fraiche (je kunt ook slagroom of beiden gebruiken)", "Muchos peper", "690 gram passata", "390 gram tomatenblokjes", "Flinke scheut ketjap manis", "Olijfolie", "Pasta naar keuze"],
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
    naam: "Oma's spaghetti",
    categorieen: ["Pasta", "Gehakt"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "Pasta carbonara",
    categorieen: ["Pasta", "Varken"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "Bobotie",
    categorieen: ["Rijst", "Gehakt"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "Shoarma",
    categorieen: ["Kip"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "Gebakken aardappelen met panga",
    categorieen: ["Aardappelen", "Vis"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "Gebakken aardappelen met zalm",
    categorieen: ["Aardappelen", "Vis"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "Gebakken aardappelen met schnitzel",
    categorieen: ["Aardappelen", "Kip"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "Pannekoeken",
    categorieen: ["Vegetarisch"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "Kip Rezala",
    categorieen: ["Rijst", "Kip"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "Butter Chicken",
    categorieen: ["Rijst", "Kip"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "Tikka Masala",
    categorieen: ["Rijst", "Kip"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "Pasta met garnalen",
    categorieen: ["Pasta", "Garnalen"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "Bami",
    categorieen: ["Mie", "Kip"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "Quessadillas met kip",
    categorieen: ["Kip"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "Quessadillas met gehakt",
    categorieen: ["Gehakt"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "Mexicaanse schotel",
    categorieen: ["Gehakt"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "Omurice",
    categorieen: ["Rijst", "Kip"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
  {
    naam: "Kip met honingtijm en sinaasappel",
    categorieen: ["Rijst", "Kip"],
    ingredienten: ["Volgt nog"],
    recept: [
  "Recept volgt nog."
],
  },
    {
    naam: "Varkenshaas met rijst",
    categorieen: ["Rijst", "Varken"],
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

const zichtbareGerechten = gerechten.filter((gerecht) => {
  return (
    actieveCategorieen.length === 0 ||
      actieveCategorieen.every((categorie) =>
        gerecht.categorieen.includes(categorie)
      )
  );
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

function toggleCategorie(categorie) {
  setActieveCategorieen((vorige) =>
    vorige.includes(categorie)
      ? vorige.filter((item) => item !== categorie)
      : [...vorige, categorie]
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
          )

      return nietVerboden && categoriePast;
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

const uniekeBoodschappen = [...new Set(alleIngredienten)].filter(
  (ingredient) => !ingredientenThuis.includes(ingredient)
);

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
</section>

<div className="buttons">
  <button onClick={kiesGerecht}>Kies willekeurig gerecht</button>
  <button onClick={resetAlles}>Reset alles</button>
</div>

      {gekozenGerecht && (
        <div style={{ marginTop: "24px", border: "1px solid #ccc", padding: "16px" }}>
          <h2>{gekozenGerecht.naam}</h2>

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

<section className="card">
  <h2>Gerechten</h2>

  {zichtbareGerechten.map((gerecht) => (
    <div key={gerecht.naam} className="dish-row">
      <strong>{gerecht.naam}</strong>

      <div className="dish-actions">
        <button onClick={() => toggleFavoriet(gerecht.naam)}>
          {favorieten.includes(gerecht.naam) ? "❤️ Favoriet" : "🤍 Favoriet"}
        </button>

        <button onClick={() => toggleVerbodenVandaag(gerecht.naam)}>
          {verbodenVandaag.includes(gerecht.naam)
            ? "✅ Mag weer"
            : "🚫 Verboden vandaag"}
        </button>
      </div>
    </div>
  ))}
</section>

      <h2>Boodschappenlijst</h2>

      <ul>
        {uniekeBoodschappen.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

            <h2>Weekplanning</h2>

      {["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"].map(
        (dag) => (
          <div key={dag}>
            <strong>{dag}: </strong>
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

      <h2>Statistieken</h2>

      <ul>
        {Object.entries(statistieken).map(([naam, aantal]) => (
          <li key={naam}>
            {naam}: {aantal}x gekozen
          </li>
        ))}
      </ul>
    </div>
  );
}