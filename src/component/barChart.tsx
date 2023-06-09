import React from 'react'
import {Bar} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
type Props = {
    data:any;
    options:any;
}

const BarChart = (props: Props) => {


  return (
    <Bar data={props.data} options={props.options} />

   
  )
}

export default BarChart