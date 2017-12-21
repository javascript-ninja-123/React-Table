import React from 'react';
import {Polar} from 'react-chartjs-2';


export const POLAR = ({dataset,labelData}) => {
  const finalData = {
      datasets: [{
        data:[
          ...dataset
        ],
        backgroundColor: [
          '#FF6384',
          '#4BC0C0',
          '#FFCE56',
          '#36A2EB'
        ]
      }],
      labels:[
        ...labelData
      ]
      }
      return(
        <div className="POLAR">
            <Polar data={finalData} />
        </div>
      )
}
