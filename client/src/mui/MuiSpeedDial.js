import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import {FileCopyOutlined, Print, Share} from '@mui/icons-material';

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{position: 'absolute', bottom: 16, right: 16}}
      icon={<SpeedDialIcon/>}
    >
      <SpeedDialAction icon={<FileCopyOutlined/>} tooltipTitle='Copy' />
      <SpeedDialAction icon={<Print/>} tooltipTitle='Print' />
      <SpeedDialAction icon={<Share/>} tooltipTitle='Share' />
    </SpeedDial>
  )
}
export default MuiSpeedDial;