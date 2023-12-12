let someValue;
function scuberGreetingForFeet(someValue){
  if (someValue <= 400) {
    const freeRide = "This one is on me!"
    return freeRide;
  }
  else if (someValue > 400 & someValue < 2000) {
    const twentyRide = "That will be twenty bucks."
    return twentyRide;
  }
  else if (someValue >= 2000 & someValue <= 2500) {
    const thirtyRide = "I will gladly take your thirty bucks."
    return thirtyRide;
  }
  else {
    const noRide = "No can do."
    return noRide;
  }
}
let someCity;
function ternaryCheckCity(someCity){
  if (someCity === "NYC") {
    const goodToGo = "Ok, sounds good."
    return goodToGo;
  }
  else {
    const noGo = "No go."
    return noGo;
  }
}
let tipLuck;
function switchOnCharmFromTip(tipLuck){
  if (tipLuck === "generous") {
    const greatTip = "Thank you so much."
    return greatTip;
  }
  else if (tipLuck === "not as generous") {
    const goodTip = "Thank you."
    return goodTip;
  }
  else {
    const badTip = "Bye."
    return badTip;
  }
}