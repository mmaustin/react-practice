import { Box, Stack } from "@mui/material";

const SixPrototypeBoard = () => {
  return (
    <Stack direction={'row'}>
      <Box height={'245px'} width={'80px'} sx={{border: '1px solid blue', bgcolor: 'yellow'}}>ONE</Box>
      <Box height={'245px'} width={'80px'} sx={{border: '1px solid blue', bgcolor: 'red'}}>TWO</Box>
      <Box height={'245px'} width={'80px'} sx={{border: '1px solid blue', bgcolor: 'pink'}}>THREE</Box>
      <Box height={'245px'} width={'80px'} sx={{border: '1px solid blue', bgcolor: 'green'}}>FOUR</Box>
      <Box height={'245px'} width={'80px'} sx={{border: '1px solid blue', bgcolor: 'blue'}}>FIVE</Box>
      <Box height={'245px'} width={'80px'} sx={{border: '1px solid blue', bgcolor: 'orange'}}>SIX</Box>
    </Stack>
  )
}
export default SixPrototypeBoard