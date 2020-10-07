function checkAnswers(standard, yourAnswer) {

	var finalScore = yourAnswer.reduce(checkAnswer, 0);

	return finalScore > 0 ? finalScore : 0;

	function checkAnswer(score, currentAnswer, currentAnswerIndex) {
		if (currentAnswer.length == 0) return score;
		if (currentAnswer == standard[currentAnswerIndex]) return score += 4;
		return score -= 4;
	}
}


console.log(checkAnswers(["a", "a", "b", "d"], ["a", "a", "b", ""]));


