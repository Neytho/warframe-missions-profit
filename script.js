const missions = [
  {
    name: "Capture Neo",
    planet: "Void",
    duration: 2,
    relic: "Neo",
    rareLoot: "Aklex Prime BP",
    profit: 35.5
  },
  {
    name: "Survie Lith",
    planet: "Earth",
    duration: 10,
    relic: "Lith",
    rareLoot: "Paris Prime String",
    profit: 18.0
  },
  {
    name: "Interception Meso",
    planet: "Mars",
    duration: 12,
    relic: "Meso",
    rareLoot: "Lex Prime Receiver",
    profit: 44.2
  },
  {
    name: "Survie Axi",
    planet: "Void",
    duration: 15,
    relic: "Axi",
    rareLoot: "Soma Prime Stock",
    profit: 52.0
  },
  {
    name: "Excavation Neo",
    planet: "Europa",
    duration: 8,
    relic: "Neo",
    rareLoot: "Carrier Prime BP",
    profit: 29.4
  },
  {
    name: "Espionnage Lith",
    planet: "Mercury",
    duration: 6,
    relic: "Lith",
    rareLoot: "Boar Prime Receiver",
    profit: 16.8
  },
  {
    name: "Defense Meso",
    planet: "Ceres",
    duration: 10,
    relic: "Meso",
    rareLoot: "Orthos Prime Blade",
    profit: 33.0
  },
  {
    name: "Interception Axi",
    planet: "Sedna",
    duration: 14,
    relic: "Axi",
    rareLoot: "Nekros Prime Systems",
    profit: 48.5
  }
];

const planetFilter = document.getElementById("planetFilter");
[...new Set(missions.map(m => m.planet))].forEach(p => {
  const opt = document.createElement("option");
  opt.value = p;
  opt.textContent = p;
  planetFilter.appendChild(opt);
});

function renderTable() {
  const planetVal = planetFilter.value;
  const durationVal = parseInt(document.getElementById("durationFilter").value);
  const relicVal = document.getElementById("relicFilter").value;

  const tbody = document.getElementById("missionsTable");
  tbody.innerHTML = "";

  missions
    .filter(m => (!planetVal || m.planet === planetVal))
    .filter(m => (!durationVal || m.duration <= durationVal))
    .filter(m => (!relicVal || m.relic === relicVal))
    .forEach(m => {
      const tr = document.createElement("tr");

      const profitClean = (typeof m.profit === "number" && !isNaN(m.profit)) 
        ? `${m.profit.toFixed(1)} platine`
        : "N/A";

      tr.innerHTML = `
        <td>${m.name}</td>
        <td>${m.planet}</td>
        <td>${m.duration} min</td>
        <td>${m.relic}</td>
        <td>${m.rareLoot}</td>
        <td>${profitClean}</td>
      `;
      tbody.appendChild(tr);
    });
}

document.getElementById("planetFilter").addEventListener("change", renderTable);
document.getElementById("durationFilter").addEventListener("input", renderTable);
document.getElementById("relicFilter").addEventListener("change", renderTable);

renderTable();
