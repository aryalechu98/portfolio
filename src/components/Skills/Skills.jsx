import React from 'react'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Slider from 'react-slick'
import SkillsCard from '../Skills/SkillsCard'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import  Typography  from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import {MdArrowLeft,MdArrowRight} from 'react-icons/md'

import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles((theme)=>({
 
wrapper:{
 padding:'2rem 0',
height:'100vh',
display:'flex',
flexWrap:'wrap',

justifyContent:"center",
alignItems:"center",

},

title:{
marginBottom:'4rem',
textAlign:'center',
fontSize:'2rem',
fontWeight:'bold'
},
container:{
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
}
}))


const Skills = () => {
    let skillNames = [
        "HTML",
        "JavaScript",
        "React JS",
        "Redux",
        "CSS",
        "SASS",
        "Bootstrap",
        "Material UI",
        "GIT",
    ];
                                                              
    
    
  const styles=useStyles();
  return (
    <div className={styles.wrapper} id='skills'>
        <Container maxWidth='md'  className={styles.container}>
          <Box >
            <Typography className={styles.title}>Skills</Typography>
            </Box>
          <Grid container >
            {skillNames.map(skill=>(
            
              
              <SkillsCard data={skill}/>
           
          ))}
          </Grid>
        </Container>
        </div>
  )
}

export default Skills