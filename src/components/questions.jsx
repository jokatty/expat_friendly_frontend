import axios from 'axios';
import React from'react';
import { useState } from'react';
import { useEffect } from'react';

export default function Questions(){
  const [questions, setQuestions] = useState([]);

  // Function to fetch data from backend
  const fetchQuestions = async()=>{
    try{
      const allQuestions = await axios.get('http://localhost:3001/questions');
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
    <ul>
      {questions.map((question)=>{
        return <li key={question.id}>{question.question}</li>
      })}
    </ul>
  )
}