import React from 'react'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import  Typography  from '@mui/material/Typography'
import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineDot from '@mui/lab/TimelineDot'
import './education.css'

const useStyles=makeStyles(theme=>({
    section:{
   
      
       position:'relative',
       padding:'2rem '
    },
    content:{
        height:'100%',
        zIndex:'100',
        position:'relative',
    },
    timeline:{
        display:'flex',
        justifyContent:'flex-start'
    },
    timelineContent:{
        width:'100%',
        border:'2px solid red'
    },
    border:{
        border:'2px solid red',
        display:'flex',
        justifyContent:'start',
        width:'60vw',
        position:'relative'
    },
    typo:{
        display:'flex',
        border:'2px solid red',
       
    },
}))

const Education = () => {
    const styles=useStyles();
  return (
    <div id='education'>
        <Paper className={styles.section}>
            <Container maxWidth='md' >
                <Grid className={styles.content} container alignItems='center' justifyContent='space-between'>
                    <Grid item sm={8}>
                    <Typography component='h1' variant='h3'>
                        Education
                    </Typography>
                    <Timeline >
                        <Grid container>
                            <Grid item sm={4}>
                                <TimelineItem width="100%">
                                    <TimelineSeparator>
                                        <TimelineDot/>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
        
                                    <TimelineContent>
                                        <Grid item className='typoContainer'direction='row' sm={12}>
                                            <div className='typo'>
                                                <Typography variant='h5' className='typoHeading'>Electronics And Communication Engineering</Typography>
                                                <Typography variant='h5' className='typoHeading'>2016 -2020</Typography>
                                            </div>
                                            <div className='typo'>
                                                <Typography variant='h6'>Heera College of Engineering And Technology</Typography>
                                                <Typography variant='h6'>Trivandrum,Kerala</Typography>
                                            </div>
                                            <div>
                                                <Typography variant='h6' sx={{marginTop:'10px'}}>Graduated with 7.28 CGPA from Abdul Kalam Technological University, Kerala</Typography>
                                        </div>
                                    </Grid>
                                </TimelineContent>
                                </TimelineItem>
                                <TimelineItem width="100%">
                                    <TimelineSeparator>
                                        <TimelineDot/>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
        
                                    <TimelineContent>
                                        <Grid item className='typoContainer'direction='row' sm={12}>
                                            <div className='typo'>
                                                <Typography variant='h5' className='typoHeading'>Higher Secondary Education</Typography>
                                                <Typography variant='h5' className='typoHeading'>2014-2016 </Typography>
                                            </div>
                                            <div className='typo'>
                                                <Typography variant='h6'>GGHSS Cottenhill</Typography>
                                                <Typography variant='h6'>Trivandrum,Kerala</Typography>
                                            </div>
                                            <div>
                                                <Typography variant='h6' sx={{marginTop:'10px'}}>Graduated with 84.58% from Board of Higher Secondary Education, Kerala</Typography>
                                        </div>
                                    </Grid>
                                </TimelineContent>
                                </TimelineItem>
                                <TimelineItem width="100%">
                                    <TimelineSeparator>
                                        <TimelineDot/>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
        
                                    <TimelineContent>
                                        <Grid item className='typoContainer'direction='row' sm={12}>
                                            <div className='typo'>
                                                <Typography variant='h5' className='typoHeading'>High School Education</Typography>
                                                <Typography variant='h5' className='typoHeading'>2013-2014</Typography>
                                            </div>
                                            <div className='typo'>
                                                <Typography variant='h6'>ST.Mary's HSS Pattom</Typography>
                                                <Typography variant='h6'>Trivandrum,Kerala</Typography>
                                            </div>
                                            <div>
                                                <Typography variant='h6' sx={{marginTop:'10px'}}>Graduated with 84%  from General Education Department, Kerala</Typography>
                                        </div>
                                    </Grid>
                                </TimelineContent>
                                </TimelineItem>
                            </Grid>
                        </Grid>
                    </Timeline>
        
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    </div>
  )
}

export default Education