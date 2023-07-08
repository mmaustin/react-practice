import {Stack, Avatar, AvatarGroup} from '@mui/material'


const MuiAvatar = () => {

  const row = 'row'

  return (
    <Stack spacing={4} >
      <Stack direction={row} spacing={2}>
        <Avatar sx={{bgcolor: 'primary.light'}}>BW</Avatar>
        <Avatar sx={{bgcolor: 'success.light'}}>CK</Avatar>
      </Stack>
      <Stack direction={row} spacing={2}>
        <AvatarGroup max={2}>
          <Avatar sx={{bgcolor: 'primary.light'}}>BW</Avatar>
          <Avatar sx={{bgcolor: 'success.light'}}>CK</Avatar>
          <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' alt='Jane Doe' />
          <Avatar src='https://randomuser.me/api/portraits/men/51.jpg' alt='John Doe'/>
        </AvatarGroup>
      </Stack>
    </Stack>
  )
}
export default MuiAvatar