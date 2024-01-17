import axios from 'axios';
import React from'react';
import { useState } from'react';
import { useEffect } from'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

// questions container style
const questionsContainerStyle = {
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  justifyContent:"center",
  minHeight:"100vh"
}

// card styles

const cardStyle = {
 display:"flex",
  flexDirection:"column",
  alignItems:"center",
  justifyContent:"center",
  width:"50%",
  margin:"1rem auto",
  padding:"0.5rem",
  border:"1px solid #ccc",
  borderRadius:"10px",
  boxShadow:"0 0 10px #ccc",
  backgroundColor:"#fff",
  cursor:"pointer"
}

export default function Questions(){
  const [questions, setQuestions] = useState([]);

  // Fetch data from backend
  const fetchQuestions = async()=>{
    try{
      const allQuestions = await axios.get(`${process.env.REACT_APP_API_SERVER}/questions`);
      setQuestions(allQuestions.data);
    }
    catch(error){
      console.log('error fetching data', error);
    }
  }

  useEffect(()=>{
    fetchQuestions();
  }, [])

  // handle card click
  const handleClick = (id) =>{
    console.log(id);
  }

  return (
    <Box sx={questionsContainerStyle}>
      {questions.map((question) => (
        <Card sx={cardStyle} key={question.id} onClick={()=>handleClick(question.id)}>
          <CardContent>
            <Typography variant="body1" gutterBottom>
              {question.question}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}