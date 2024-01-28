import { Box, Typography, Card, Stack, Input, InputLabel, TextareaAutosize, Button, CardContent, Link } from '@mui/material';
import React from 'react'
import {useNavigate} from 'react-router-dom'

const BlogForm=()=>{
    const navigate=useNavigate()

    return (
        <Box sx={{display:'flex', justifyContent:'center', marginTop:'20vh'}}>
            <Box>
                <Card sx={{backgroundColor:'ButtonFace', padding:'3vh 3vw', width:'20vw', borderRadius: '30px'}}>
                    <CardContent>
                        <Typography variant='h3' sx={{fontFamily: 'sans-serif', fontWeight:'bold', paddingLeft:'20', textAlign: 'center'}}>Add Blog</Typography>
                        <Stack style={{width:'100%'}}>
                            <InputLabel htmlFor="blogName" sx={{marginTop: '2vh'}}>Blog Name:</InputLabel>
                            <Input variant='contained' type="text" id="blogName" name="blogName"/>
                            
                            <InputLabel htmlFor="authorName" sx={{marginTop:'2vh'}}>Author Name:</InputLabel>
                            <Input variant='contained' type="text" id="authorName" name="authorName"/>

                            <InputLabel htmlFor="description" sx={{marginTop:'2vh', marginBottom: '1vh'}}>Description:</InputLabel>
                            <TextareaAutosize variant='contained' id="description" name="description" minRows={5} ></TextareaAutosize>
                                
                            <Button variant='contained' onClick={()=>{navigate('/home')}} type="submit" sx={{marginTop:'5vh', backgroundColor: "black"}}>Submit Blog</Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </Box>
      )
  }
  
export default BlogForm