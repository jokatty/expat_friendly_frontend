import { useState, useEffect } from "react";
import axios from "axios";

export default function Experiences(){
  // State for experiences
  const [experiences, setExperiences] = useState([])

  // Fetch data from backend
  useEffect(()=>{
    const fetchExperiences = async () => {
      try{
        const allExperiences = await axios.get(`${process.env.REACT_APP_API_SERVER}/experiences`);
        setExperiences(allExperiences.data);
      }
      catch(error){
        console.log('error fetching data', error);
      }
    }
  
    fetchExperiences();
  }, [])

  return (
    <ul>
      {experiences.map((experience)=> {
        return(
          <li key={experience.id}>{experience.experience}</li>
        )
      })}
    </ul>
  )
}