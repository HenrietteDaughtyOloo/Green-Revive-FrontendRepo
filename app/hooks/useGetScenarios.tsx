'use client'
import { getScenarios } from '../utilities/utils'
import { useEffect, useState } from "react";
interface ScenariosData{
    id:number;
    background_info: string;
    correct_answer: string;
    incorrect_answer:string;
    image:string;
    level:number;
}
const useGetScenarios = () => {
  
    const [scenarios, setScenarios] = useState<ScenariosData[]>([]);
  
    useEffect(() => {
      (async () => {
        const scenariosData = await getScenarios();
        setScenarios(scenariosData);
      })();
    }, []);
  
    return { scenarios };
  };
  
  export default useGetScenarios;  