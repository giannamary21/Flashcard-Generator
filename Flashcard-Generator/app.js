var ClozeCard = require("./ClozeCard.js");

var BasicCard = require("./BasicCard.js");



var stateCapital = new BasicCard(
    "What is the Capital of New Jersey?", "Trenton");

			console.log(stateCapital.front); 

			console.log(stateCapital.back);

var stateCapitalCloze = new ClozeCard(
    "Trenton in the Capital of New Jersey.", "Trenton");

			console.log(stateCapitalCloze.cloze); 

			console.log(stateCapitalCloze.partial);

			console.log(stateCapitalCloze.fullText);

