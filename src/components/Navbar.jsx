import React from 'react'
import  Container  from '@material-ui/core/Container'
import Typography  from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import  AppBar  from '@material-ui/core/AppBar'
import  {makeStyles}  from '@material-ui/core/styles'
import  Toolbar  from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import  SwipeableDrawer  from '@material-ui/core/SwipeableDrawer'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import  ListItem  from '@material-ui/core/ListItem'
import { useState } from 'react'

const navigationLinks=[
    {name:'Home',href:'#home',},
    {name:'Skills',href:'#skills',},
    {name:'Projects',href:'#projects',},
    {name:'Education',href:'#education',},
    {name:'Certificates',href:'#certificates',},
    {name:'Contact',href:'#contact',}

]

const useStyles=makeStyles((theme)=>({
    navLeft:{
        marginRight:'auto',
    },
    link:{
        marginRight:20,
        cursor:'pointer'
    },
    icon:{
        position:'absolute',
        top:'10px',
       right:'20px',
    },
    list:{
        marginTop:"40px",
    },
   
}))

// Main navbar starts
const Navbar = () => {
    const styles=useStyles();
    const [open,setOpen]=useState(false)
  return (
    <AppBar position='sticky' color='default' >
    <Container maxWidth='md'>
        <Toolbar>
        <div className={styles.navLeft}>
        <Typography >Arya</Typography>
        </div>
        <Hidden xsDown>
        {navigationLinks.map((item)=>(
           
                <Link key={item.href}
                color='textPrimary'
                variant='button'
                underline='none'
                className={styles.link}
                href={item.href}
                >{item.name}</Link>
            
        ))}
        </Hidden>
        <Hidden smUp>
            <IconButton>
                <MenuIcon onClick={()=>setOpen(true)}/>
            </IconButton>
        </Hidden>
        </Toolbar>
    </Container>
    <SwipeableDrawer position='relative' anchor='right' open={open} onOpen={()=>setOpen(true)} onClose={()=>setOpen(false)}>
        <div className={styles.icon}>
            <IconButton>
                <ChevronRightIcon onClick={()=>setOpen(false)}/>
            </IconButton>
        </div>
        <div className="divider">

        <Divider/>
        </div>
        <List className={styles.list}>

       
        {navigationLinks.map((item)=>(
            <ListItem>
            <Link key={item.href} 
            color='textPrimary'
            href={item.href}
            variant='button'
            underline='none'
            className={styles.link}
            >{item.name}</Link>
            </ListItem>

        ))}
        </List>
    </SwipeableDrawer>
    </AppBar>
  )
}

export default Navbar