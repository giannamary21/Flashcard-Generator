var ClozeCard = function(text, cloze)
{
	this.fullText = text;
	this.cloze = cloze;
	//this.clozeDeleted //
	this.partial = this.fullText.replace(this.cloze, '_____');
}
module.exports = ClozeCard;