

const SixPrototypeQuizTwo = ({score, correctAnswers, correctGuesses, wrongTwice}) => {
  return (
    <div>
      {/* {score >= 5 ? (
        <p>Good Job, My Friend.</p>
      ) :
         (<p>Why Don't You Give That Another Try.</p>
      )} */}
      {score >= 5 && correctAnswers <= 2 && (
        <p>You Guessed Well, My Friend.</p>
      )}
      {score >= 5 && correctAnswers === 3 && (
        <p>Ok, You Earned This W.</p>
      )}
      {score >= 5 && correctAnswers >= 4 && (
        <p>History Boss!</p>
      )}
      {score < 5 && correctAnswers === 3 && (
        <p>Game Effort. Random History Can Be Unfair.</p>
      )}
      {score < 5 && correctAnswers >= 3 && (
        <p>That's Just Cruel. But You Still Lost.</p>
      )}
      {score < 5 && correctAnswers <= 2 && (
        <p>I'm Ain't Even Gone Say Nothing.</p>
      )}
    </div>
  )
}
export default SixPrototypeQuizTwo