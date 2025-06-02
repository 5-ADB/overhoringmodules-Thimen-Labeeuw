function Huisdier(dier, naam, leeftijd) {
  (this.dier = dier), (this.naam = naam), (this.leeftijd = leeftijd);
}

function print() {
  return `mijn ${this.dier} ${this.naam}, is ${leeftijd} jaar oud`;
}

module.exports = { Huisdier };
