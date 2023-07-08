import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionSummary, AccordionDetails, Typography} from "@mui/material";
import { useState } from "react";



const MuiAccordian = () => {

  const [expanded, setExpanded] = useState(false);
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  }

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')} >
        <AccordionSummary expandIcon={<ExpandMore/>} id='panel1-header' aria-controls="panel1-header" >
          <Typography>Accordian 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            where are we going? and what's the future showing?
            where are we headed? 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')} >
        <AccordionSummary expandIcon={<ExpandMore/>} id='panel2-header' aria-controls="panels-header" >
          <Typography>Accordian 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            where are we going? and what's the future showing?
            where are we headed? 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}>
        <AccordionSummary expandIcon={<ExpandMore/>} id='panel3-header' aria-controls="panel3-header" >
          <Typography>Accordian 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            where are we going? and what's the future showing?
            where are we headed? 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
export default MuiAccordian;