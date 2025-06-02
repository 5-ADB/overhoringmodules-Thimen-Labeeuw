// schrijf op 2 verschillende manieren een constructor voor onderstaande object

const factuur = {
  id: 1,
  klant: "Jos Joskens",
  producten: [appel, peer, banaan],
  betaald: false,
};

function Factuur(id, klant, producten, betaald) {
  (this.id = id),
    (this.klant = klant),
    (this.producten = producten),
    (this.betaald = betaald);
}

function AddFactuur(id, klant, producten, betaald) {
  const Newfactuur = {
    id: id,
    klant: klant,
    producten: producten,
    betaald: betaald,
  };
  return Newfactuur;
}
