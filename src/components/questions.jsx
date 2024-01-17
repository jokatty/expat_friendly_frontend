import axios from 'axios';
import React from'react';
import { useState } from'react';
import { useEffect } from'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

// style the questions container
const questionsContainerStyle = {
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  justifyContent:"center",
  minHeight:"100vh"
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

  return (
    <Box sx={questionsContainerStyle}>
      {questions.map((question)=>{
        return <li key={question.id}>{question.question}</li>
      })}
    </Box>
  )
}