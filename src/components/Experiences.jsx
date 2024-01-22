import { useState, useEffect } from "react";
import axios from "axios";
import ExperinceInput from "./ExperienceInput";

export default function Experiences(){
  // State for experiences
  const [experiences, setExperiences] = useState([])

  // Fetch data from backend
  const fetchExperiences = async () => {
      try{
        const allExperiences = await axios.get(`${process.env.REACT_APP_API_SERVER}/experiences`);
        setExperiences(allExperiences.data);
      }
      catch(error){
        console.log('error fetching data', error);
      }
    }  

  useEffect(()=>{
    fetchExperiences();
  }, [])

  // handle click
  const handleClick = (id) => {
    console.log(id);
  }

  return (
  <>
        <ul>
        {experiences.map((experience)=> {
          const experienceId = experience.id;
          return(
            <li key={experienceId} onClick={()=>{handleClick(experienceId)}}>{experience.experience}</li>
          )
        })}
      </ul>
      <ExperinceInput previousExperiences={experiences} setAllExperince={setExperiences}/>
  </>
  )
}