import styles from "./Exercise1.module.css"
import React, { useEffect, useState } from 'react'
import RangeWrapper from "components/rangeWrapper/RangeWrapper"
import { rangeDefValues, rangeValues } from "utility/types"
import instance from "utility/callsAPI"

const Exercise2Page = () => {
  const [defValues, setDefValues] = useState<rangeDefValues>();

  useEffect(() => {
    //API TO GET DEFAULT VALUES 
    instance.get('/rangeValues.json')
      .then((response: any) => {
        let rangeVal = response.data.values;
        if (rangeVal?.length > 0) {
          let min = rangeVal[0];
          let max = rangeVal[rangeVal.length - 1];
          setDefValues({ min: min, max: max, valuesRange: max - min, stepRange: rangeVal });
        }
        else {
          console.log("------- ERROR: Data not found");
        }
      })
      .catch((error: any) => {
        console.log("------- ERROR:", error);
      });

  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Fixed Values Range
        </h1>
        <div className={styles.rangeContainer}>
          {(defValues) ?
            <RangeWrapper defValues={defValues} fixedValue={true} stepRange={defValues.stepRange} />
            : <p>Waiting for data...</p>}
        </div>
      </main>
    </div>
  )
}

export default Exercise2Page;
