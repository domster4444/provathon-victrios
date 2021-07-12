import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { useState } from 'react';
import { useEffect } from 'react';

function OverallPieChart(props) {
  console.log(props);
  const barData = {
    labels: ['Zero Doge', 'Single Doge', 'Double Doge', 'Triple Doge'],
    datasets: [
      {
        label: 'test label',
        data: [
          props.noOf0DogePatient,
          props.noOf1DogePatient,
          props.noOf2DogePatient,
          props.noOf3DogePatient,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderWidth: 3,
      },
    ],
  };
  // set options
  const [barOptions, setBarOptions] = useState({
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      title: {
        display: true,
        text: 'Data Orgranized In Bars',
        fontSize: 25,
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
  });

  return (
    <>
      <div className="BarExample">
        <Pie data={barData} options={barOptions.options} />
      </div>
    </>
  );
}

export default OverallPieChart;
