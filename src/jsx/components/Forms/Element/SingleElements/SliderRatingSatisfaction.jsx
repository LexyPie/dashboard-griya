import React from 'react'
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

export default function SliderRatingSatisfaction() {
    
        return (
           <div className="slider" id="ClickAblePips">
              <Nouislider
                 start={[0]}
                 pips={{ mode: "count", values: 5 }}
                 clickablePips
                 range={{
                  min: [0],
                  "25%": 2.5,
                  "50%": 5,
                  "75%": 7.5,
                  max: [10],
               }}
              />
           </div>
        );

  }
