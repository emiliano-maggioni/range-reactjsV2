import styles from "./Exercise1.module.css"
import React, { useEffect, useState } from 'react'
import RangeWrapper from "components/rangeWrapper/RangeWrapper"
import { rangeDefValues, rangeValues } from "utility/types"
import instance from "utility/callsAPI"

const Exercise1Page = () => {   
  const [defValues, setDefValues] = useState<rangeDefValues>();   
  
  useEffect(() => {
    //API TO GET DEFAULT VALUES 
    instance.get('/limits.json')
    .then((response: any) => {
        let dati = response.data
        let min = dati.min;
        let max = dati.max;
        setDefValues({min:min,max:max,valuesRange:max-min});
    })
    .catch((error: any) => {
        console.log("------- ERROR:",error);
    });        

}, []);

  return (
    <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Normal Range
          </h1>    
           <div className={styles.rangeContainer}>
             {(defValues) ? 
            <RangeWrapper defValues={defValues} />
            : <p>Waiting for data...</p> }
           </div>   
      </main>
    </div>
  )
}

export default Exercise1Page;
 