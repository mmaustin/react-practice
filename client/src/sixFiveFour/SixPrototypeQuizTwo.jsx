import { Box,Typography } from "@mui/material"


const SixPrototypeQuizTwo = ({score, correctAnswers, correctGuesses, wrongTwice}) => {
  return (
    <Box ml='20px' mr='20px' sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: "wrap"
    }}>
      {/* {score >= 5 ? (
        <p>Good Job, My Friend.</p>
      ) :
         (<p>Why Don't You Give That Another Try.</p>
      )} */}
      {score >= 5 && correctAnswers <= 2 && (
        <Typography color='green' mb='20px' variant="h6" >You Guessed Well, My Friend.</Typography >
      )}
      {score >= 5 && correctAnswers === 3 && (
        <Typography color='green' mb='20px' variant="h6" >Ok, You Earned This W.</Typography >
      )}
      {score >= 5 && correctAnswers >= 4 && (
        <Typography color='green' mb='20px' variant="h6" >History Boss!</Typography >
      )}
      {score < 5 && correctAnswers === 3 && (
        <Typography color='red' mb='20px' variant="h6" >Random History Can Be Unfair.</Typography >
      )}
      {score < 5 && correctAnswers >= 4 && (
        <Typography color='red' mb='20px' variant="h6" >That's Just Cruel.</Typography >
      )}
      {score < 5 && correctAnswers <= 2 && (
        <Typography color='red' mb='20px' variant="h6" >I Ain't Even Gone Say Nothing.</Typography >
      )}
    </Box>
  )
}
export default SixPrototypeQuizTwo