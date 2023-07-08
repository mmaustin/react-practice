import { Box, Breadcrumbs, Link, Typography } from "@mui/material"


const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link underline="hover" href='#'>Home</Link>
        <Link underline="hover" href='#'>Catalog</Link>
        <Link underline="hover" href='#'>Accessories</Link>
        <Typography color='text.primary' >Shoes</Typography>
      </Breadcrumbs>
    </Box>
  )
}
export default MuiBreadcrumbs