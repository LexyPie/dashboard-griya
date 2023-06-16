import React from 'react'

import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

export default function SliderVisitTime() {

   // 0 = initial minutes from start of day
   // 1440 = maximum minutes in a day
   // step: 30 = amount of minutes to step by 
   const initialStartMinute = 0;
   const initialEndMinute = 2160;
   const step = 15;
   const margin = 120;
/*    const convertValuesToTime = (values, handle) => {
      values = values
         .map(value => Number(value) % 1440)
         .map(value => convertMinutesToHoursAndMinutes(value))
      console.log(values)
   }
 */

   return (

      <div className="slider-date" id="SlideDragable">
         <Nouislider
            connect
            start={[360, 720]}
            pips={
               {
                  mode: 'values',
                  values: [0, 360, 720, 1080, 1440, 1800, 2160],
                  density: 360
               }
               
            }
            step={step}
            margin={margin}
            /* behaviour="tap"
            snap */
            range={{
               min: initialStartMinute,
               max: initialEndMinute
            }}
         />
      </div>
   )
}
