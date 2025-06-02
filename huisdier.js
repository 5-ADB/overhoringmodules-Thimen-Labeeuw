function Huisdier(dier, naam, leeftijd) {
  (this.dier = dier), (this.naam = naam), (this.leeftijd = leeftijd);
  infoDier = `mijn ${this.dier}, ${this.naam} is ${this.leeftijd} jaar oud`;
  return infoDier;
}

module.exports = { Huisdier };
