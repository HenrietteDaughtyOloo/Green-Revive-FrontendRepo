import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { Trocchi } from "next/font/google";
import ScenarioListPage from "../scenarioList/page";
import { error } from "console";

export const addScenarios= async()=>{
    const url ='/api/create-postaddscenario'
    try{
        const response = await fetch(url)
        if (response.ok) {
            const result=await response.json()
            return result
            
        }
        else{
            throw new Error('Error fetching scenarios:'+ response.status)
        }
    }
    catch(error:any){
        return []
        
    }
}
export const postScenarioData = async (formData:any) => {
  const url = '/api/create-postaddscenario';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error('Error posting scenarios: ' + response.status);
    }
  } catch (error) {
    console.error('Failed to post scenarios:', error);
    return null;
  }
};
export const postaddscenario = async (data:any) => {
    const url = '/api/create-postaddscenario';
    try {
      const formData = new FormData();
      formData.append('level', data.level.toString());
      formData.append('background_info', data.background_info);
      formData.append('correct_answer', data.correct_answer);
      formData.append('incorrect_answer', data.incorrect_answer);
      formData.append('image', data.image);
  
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        throw new Error('Error posting scenarios: ' + response.status);
      }
    } catch (error) {
      console.error('Failed to post scenarios:', error);
      return null;
    }
  };
  
export const getScenarios = async () =>{
  try{
    const response = await fetch(`/api/get-scenarios`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  }
  catch(error:any){
    return error.message
  }
}

