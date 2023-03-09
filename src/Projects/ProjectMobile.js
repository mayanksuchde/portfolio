import React from 'react';
import { styled } from '@mui/material/styles';
import {Box, Card,AspectRatio} from '@mui/joy/';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        backgroundImage:'linear-gradient(to bottom right,#757ab8, #25274d)' ,
        borderRadius:'8px',
        color:'#f7f8f8',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    }));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
    backgroundImage:'linear-gradient(to bottom right,#757ab8, #919db6)' ,
    borderRadius:'8px',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  overflow:'scroll',
  maxHeight: '370px',
  borderRadius:'8px'
}));

function ProjectMobile({list}) {
    const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
    return ( 
        <div className='ProjectsMobile'>
            {list.map((project,i)=>
            <Accordion expanded={expanded === `panel${i+1}`} key={i} onChange={handleChange(`panel${i+1}`)}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography className='font'>{project.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                 <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                        py: 1,
                        overflow: 'auto',
                        width: 343,
                        scrollSnapType: 'x mandatory',
                        '& > *': {
                        scrollSnapAlign: 'center',
                        },
                        '::-webkit-scrollbar': { display: 'none' },
                    }}
                    >
                    {project.screenshot.map((pic,i)=> (
                        <Card
                        orientation="horizontal"
                        key={pic}
                        overflow="scroll"
                        sx={{
                            gap: 1,
                            '--Card-padding': (theme) => theme.spacing(0),
                            width:'300px',
                        }}
                        >
                        <AspectRatio sx={{ minWidth: 300 }}>
                            <img
                            src={`${pic}?h=490&fit=fill&auto=format`}
                            srcSet={`${pic}?h=490&fit=fill&auto=format&dpr=2 2x`}
                            alt={pic}
                            />
                        </AspectRatio>
                        {/* <Box sx={{ whiteSpace: 'nowrap' }}>
                            <Typography fontWeight="md">{item.title}</Typography>
                            <Typography level="body2">{item.description}</Typography>
                        </Box> */}
                        </Card>
                    ))}
                    </Box>
                    <Typography className='font'>
                        {project.description}
                    </Typography>
                </AccordionDetails>
            </Accordion>)}
            {/* <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Collapsible Group Item #1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Collapsible Group Item #2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Collapsible Group Item #3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion> */}
        </div> 
    );
}

export default ProjectMobile;




