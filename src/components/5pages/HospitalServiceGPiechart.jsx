import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

// _____________ stats logo
import totalCovidIco from '../../img/serviceLogo/totalPatientIco.png';
import testedPositiveIco from '../../img/serviceLogo/testedPositive.png';
import testedNegativeIco from '../../img/serviceLogo/testedNegative.png';
import isolationIco from '../../img/serviceLogo/isolation.png';
import quarantinedIco from '../../img/serviceLogo/quarintine.png';
import rtdTestedIco from '../../img/serviceLogo/rtdtested.png';
import recoveredIco from '../../img/serviceLogo/recovered.png';
import deathsIco from '../../img/serviceLogo/deaths.png';

//?extras
import activeCaseCountIco from '../../img/serviceLogo/activeCaseCount.png';
import casePerOneMillion from '../../img/serviceLogo/casePerOneMillion.png';
import criticalCase from '../../img/serviceLogo/criticalCase.png';
import testPerOneMillion from '../../img/serviceLogo/testPerOneMillion.png';
import deathPerOneMillion from '../../img/serviceLogo/deathPerOneMillion.png';
import totalCaseToday from '../../img/serviceLogo/totalCaseToday.png';
import todayDeathCount from '../../img/serviceLogo/todayDeathCount.png';

function HospitalServiceGPiechart(props) {
  console.log(props);
  const barData = {
    labels: ['TestedTotal', 'Tested Negative', 'Tested Positive'],
    datasets: [
      {
        label: 'test label',
        data: [props.rtdTested, props.testedNegative, props.testedPositive],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          // 'rgba(75, 192, 192, 0.6)',
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
  //? rtd test recovered and death

  const barData2 = {
    labels: ['recovered', 'deaths'],
    datasets: [
      {
        label: 'test label',
        data: [
          // props.inIsolation,
          // props.quarantined,
          // props.rtdTested,
          props.recovered,
          props.deaths,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          // 'rgba(54, 162, 235, 0.6)',
          // 'rgba(255, 206, 86, 0.6)',
          // 'rgba(75, 192, 192, 0.6)',
          'red',
        ],
        borderWidth: 3,
      },
    ],
  };
  //?iso quar death
  const barData3 = {
    labels: ['In Isolation', 'Quarantined', 'deaths'],
    datasets: [
      {
        label: 'test label',
        data: [props.inIsolation, props.quarantined, props.deaths],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderWidth: 3,
      },
    ],
  };

  return (
    <>
      <main id="hospitalServicePage">
        <div className="containerCenter">
          <div className="contentBlock">
            <div className="gblPieChartContainer">
              <Bar data={barData} options={barOptions.options} />
              <Pie data={barData2} options={barOptions.options} />
              <Line data={barData3} options={barOptions.options} />
              <h4>Updated On : {props.lastUpdatedOn}</h4>
            </div>
            <div>
              <Table hover>
                <tbody className="poppins_regular_400">
                  <tr>
                    <td className="stats-lable">
                      <img src={totalCovidIco} alt="" />
                      Tested Total
                    </td>
                    <td className="poppins_semibold_600">
                      {props.testedTotal}
                    </td>
                  </tr>
                  <tr>
                    <td className="stats-lable">
                      <img src={testedPositiveIco} alt="" />
                      Tested Positive
                    </td>
                    <td className="poppins_semibold_600">
                      {props.testedPositive}
                    </td>
                  </tr>
                  <tr>
                    <td className="stats-lable">
                      <img src={testedNegativeIco} alt="" />
                      Tested Negative
                    </td>
                    <td className="poppins_semibold_600">
                      {props.testedNegative}
                    </td>
                  </tr>
                  <tr>
                    <td className="stats-lable">
                      <img src={isolationIco} alt="" />
                      In Isolation
                    </td>
                    <td className="poppins_semibold_600">
                      {props.inIsolation}
                    </td>
                  </tr>
                  <tr>
                    <td className="stats-lable">
                      <img src={quarantinedIco} alt="" />
                      Quarantined
                    </td>
                    <td className="poppins_semibold_600">
                      {props.quarantined}
                    </td>
                  </tr>
                  <tr>
                    <td className="stats-lable">
                      <img src={rtdTestedIco} alt="" />
                      RTD Tested
                    </td>
                    <td className="poppins_semibold_600">{props.rtdTested}</td>
                  </tr>
                  <tr>
                    <td className="stats-lable">
                      <img src={recoveredIco} alt="" />
                      Recovered
                    </td>
                    <td className="poppins_semibold_600">{props.recovered}</td>
                  </tr>
                  <tr>
                    <td className="stats-lable">
                      <img src={deathsIco} alt="" />
                      Deaths
                    </td>
                    <td className="poppins_semibold_600">{props.deaths}</td>
                  </tr>
                  {/* ----extras  */}

                  <tr>
                    <td className="stats-lable">
                      <img src={activeCaseCountIco} alt="" />
                      activeCaseCountIco
                    </td>
                    <td className="poppins_semibold_600">
                      {props.activeCaseCount}
                    </td>
                  </tr>
                  <tr>
                    <td className="stats-lable">
                      <img src={casePerOneMillion} alt="" />
                      casePerOneMillion
                    </td>
                    <td className="poppins_semibold_600">
                      {props.casePerOneMillion}
                    </td>
                  </tr>
                  <tr>
                    <td className="stats-lable">
                      <img src={criticalCase} alt="" />
                      criticalCase
                    </td>
                    <td className="poppins_semibold_600">
                      {props.criticalCount}
                    </td>
                  </tr>
                  <tr>
                    <td className="stats-lable">
                      <img src={testPerOneMillion} alt="" />
                      testPerOneMillion
                    </td>
                    <td className="poppins_semibold_600">
                      {props.testsPerOneMillion}
                    </td>
                  </tr>
                  <tr>
                    <td className="stats-lable">
                      <img src={deathPerOneMillion} alt="" />
                      deathPerOneMillion
                    </td>
                    <td className="poppins_semibold_600">
                      {props.deathPerOneMillion}
                    </td>
                  </tr>
                  <tr>
                    <td className="stats-lable">
                      <img src={totalCaseToday} alt="" />
                      totalCaseToday
                    </td>
                    <td className="poppins_semibold_600">
                      {props.todayCasesCount}
                    </td>
                  </tr>
                  <tr>
                    <td className="stats-lable">
                      <img src={todayDeathCount} alt="" />
                      todayDeathCount
                    </td>
                    <td className="poppins_semibold_600">
                      {props.todayDeathsCount}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HospitalServiceGPiechart;
