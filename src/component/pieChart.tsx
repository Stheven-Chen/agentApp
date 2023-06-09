import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


type Props = {

    data:any;
    options:any;
}

const PieChart = (props: Props) => {
  return (
    <Pie data={props.data} options={props.options}/>
  )
}

export default PieChart