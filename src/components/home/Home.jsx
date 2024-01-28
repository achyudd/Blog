import React, { useState, useEffect } from 'react'
import {Box, Typography, Link} from '@mui/material'
import axios from 'axios'

const Home=()=>{
    const [blogs, setBlogs] = useState([])
    const [userId, setUserId] = useState('')
    const [Id, setId] = useState('')
    const [title, setTitle] = useState('')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setBlogs(response.data)
      })
      .catch(error => {
        console.error('Error fetching blogs:', error)
      });
  }, []);

  const whenClicked = (userid, id, title)=>{
    setUserId(userid)
    setId(id)
    setTitle(title)
  }

  return (
    <Box sx={{display:'flex', justifyContent:'center', fontFamily:'verdana', fontSize:'30px', backgroundColor: '#525252'}}>
        <Box sx={{display:'flex', justifyContent:'top', flexDirection:'column', alignItems:'center', width:'25%', margin:'1%', borderRadius: '20px', backgroundColor: 'ButtonFace', paddingLeft: '1vw', paddingRight: '1vw'}}>
            <Typography variant='h4' sx={{ width:'100%', textAlign:'center', fontFamily: "verdana", fontSize:"30px", marginTop: '3vh', marginBottom: '1vh'}}>Blog Dashboard</Typography>
            <nav>
                <Link href="/home" sx={{textDecoration:'none', padding:'0 2.7vw', fontSize:"20px", backgroundColor: 'white', borderRadius: '8px', paddingTop: '0.5vh', paddingBottom: '0.5vh'}}>Home</Link>{''}
                <Link href="/blogform" sx={{textDecoration:'none',color:'green', padding:'0 2.7vw', fontSize:"20px", backgroundColor: 'white', borderRadius: '8px', paddingTop: '0.5vh', paddingBottom: '0.5vh'}}>Add Blog</Link>
            </nav>
            <ul style={{listStyleType:'none', padding:'0'}}>
                {blogs.map(blog => (
                    <li key={blog.id} style={{borderBottom:'1px solid black', width:'100%'}}>
                        <p><a onClick={() => whenClicked(blog.userId, blog.id, blog.title)} style={{cursor:'pointer'}}>{blog.id}.{blog.title}</a></p>
                    </li>
                ))}
            </ul>
        </Box>
      
      <Box sx={{padding:'10vh 5vw', width:'75%', margin:'1%', marginLeft:'-0.5vw', borderRadius: '20px', backgroundColor: "buttonFace"}}>
        <Typography variant='h4' sx={{textAlign:'center', fontFamily: "verdana", fontWeight: "bold"}}>Blogs</Typography>
        <Box sx={{backgroundColor: 'white', paddingLeft: '25px', paddingTop: '5px',paddingBottom:'5px', marginTop: '5vh', borderRadius: '20px'}}>
        <p>UserId: {userId}</p> 
        <p>Id: {Id}</p>  
        <p>Title: {title}</p>   
        </Box>
       
      </Box>
    </Box>
  )
}

export default Home

