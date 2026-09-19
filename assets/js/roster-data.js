// Klassenfarben nach offiziellem WoW-Farbschema.
const CLASS_COLORS = {
  "Krieger": "#C79C6E",
  "Paladin": "#F58CBA",
  "Jäger": "#ABD473",
  "Schurke": "#FFF569",
  "Priester": "#FFFFFF",
  "Schamane": "#0070DE",
  "Magier": "#69CCF0",
  "Hexenmeister": "#9482C9",
  "Druide": "#FF7D0A",
  "Noch nicht entschieden": "#7d8494"
};

// Reihenfolge, in der alle Allianz-Klassen im Kader angezeigt werden.
const ALL_CLASSES = [
  "Krieger", "Paladin", "Jäger", "Schurke",
  "Priester", "Schamane", "Magier", "Hexenmeister", "Druide",
  "Noch nicht entschieden"
];

// Specc-Werte: "Tank", "Heal", "DPS", "Hybrid" oder null (noch offen).
// photo zeigt auf das Profilbild; fehlt eins, wird ein Initialen-Avatar genutzt.
// armoryUrl / logsUrl bleiben leer, bis nach Release echte Charakterprofile existieren.
const ROSTER = [
  { name: "Killmann", class: "Krieger", spec: "Tank", photo: "assets/img/players/killman.jpg", armoryUrl: null, logsUrl: null },
  { name: "Bittner", class: "Priester", spec: "Heal", photo: "assets/img/players/bittner.jpg", armoryUrl: null, logsUrl: null },
  { name: "Felix", class: "Schamane", spec: "DPS", photo: "assets/img/players/felix.jpg", armoryUrl: null, logsUrl: null },
  { name: "Philipp", class: "Hexenmeister", spec: "DPS", photo: "assets/img/players/philipp.jpg", armoryUrl: null, logsUrl: null },
  { name: "Ristow", class: "Schurke", spec: "DPS", photo: "assets/img/players/ristow.jpg", armoryUrl: null, logsUrl: null },
  { name: "Myles", class: "Paladin", spec: "Tank", photo: "assets/img/players/myles.jpg", armoryUrl: null, logsUrl: null },
  { name: "Rani", class: "Paladin", spec: "Hybrid", photo: "assets/img/players/rani.jpg", armoryUrl: null, logsUrl: null },
  { name: "Philbert", class: "Magier", spec: "DPS", photo: "assets/img/players/philbert.jpg", armoryUrl: null, logsUrl: null },
  { name: "Timo", class: "Magier", spec: "DPS", photo: "assets/img/players/timo.jpg", armoryUrl: null, logsUrl: null },
  { name: "Karl", class: "Druide", spec: "Hybrid", photo: "assets/img/players/karl.jpg", armoryUrl: null, logsUrl: null },
  { name: "Francis", class: "Magier", spec: "DPS", photo: "assets/img/players/francis.jpg", armoryUrl: null, logsUrl: null }
];
