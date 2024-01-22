import { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

export default function ExperinceInput() {
  
  // State for experience
  const [experience, setExperience] = useState("");

  // Handle submit
  const handleSubmit = async () => {
       
    // Submit data to backend
    const data = {
      // Note: use hardcoded userId for now
      userId:4,
      experience:experience
    }
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_SERVER}/experiences`, data);
      console.log(response);
    }
    catch(error){
      console.log('error submitting data', error);
    }

    // Reset state
     setExperience("");
  }

  return(
    <>
        <TextField
        label="Experience"
        variant="outlined"
        value={experience}
        onChange={(e)=>setExperience(e.target.value)}
        />
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </>
    
  )
}