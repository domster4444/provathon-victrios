import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Redirect } from 'react-router';

// __________component
import HospitalServiceGPiechart from './HospitalServiceGPiechart.jsx';
import DistrictStatPage from './DistrictStatsPage';
const CovidStatus = (props) => {
  //? https://corona.askbhunte.com/api/v1/data/nepal
  const [testedPositive, setTestedPositive] = useState('');
  const [testedNegative, setTestedNegative] = useState('');
  const [testedTotal, setTestedTotal] = useState('');
  const [inIsolation, setInIsolation] = useState('');
  const [quarantined, setQuarantined] = useState('');
  const [rtdTested, setRtdTested] = useState('');
  const [recovered, setRecovered] = useState('');
  const [deaths, setDeaths] = useState('');
  const [lastUpdatedOn, setLastUpdatedOn] = useState('');

  //extras
  const [activeCaseCount, setActiveCaseCount] = useState('');
  const [casePerOneMillion, setCasePerOneMillion] = useState('');
  const [criticalCount, setCriticalCount] = useState('');
  const [deathPerOneMillion, setDeathPerOneMillion] = useState('');
  const [testsPerOneMillion, setTestsPerOneMillion] = useState('');
  const [todayCasesCount, setTodayCasesCount] = useState('');
  const [todayDeathsCount, setTodayDeathsCount] = useState('');

  useEffect(() => {
    const gblCovidDataInstance = axios.create({
      // baseURL: 'https://corona.askbhunte.com',
      baseURL: 'https://admin.nepalcovid.org',
    });
    const gblCovidDataInstanceII = axios.create({
      baseURL: 'https://corona.askbhunte.com',
    });

    function getNetCovidDataAskBhunte() {
      gblCovidDataInstanceII.get('/api/v1/data/nepal').then((res) => {
        setTestedPositive(res.data.tested_positive);
        setTestedNegative(res.data.tested_negative);
        setInIsolation(res.data.in_isolation);
        setQuarantined(res.data.quarantined);
        setLastUpdatedOn(res.data.updated_at);
      });
    }

    function getNetCovidData() {
      gblCovidDataInstance.get('/api/v1/covid-statistic/').then((res) => {
        setTestedTotal(res.data.results[0].total_cases_count);
        setRtdTested(res.data.results[0].test_count);
        setRecovered(res.data.results[0].recovered_count);
        setDeaths(res.data.results[0].dead_count);
        setActiveCaseCount(res.data.results[0].active_cases_count);
        setCasePerOneMillion(res.data.results[0].cases_per_one_million);
        setCriticalCount(res.data.results[0].critical_count);
        setDeathPerOneMillion(res.data.results[0].deaths_per_one_million);
        setTestsPerOneMillion(res.data.results[0].tests_per_one_million);
        setTodayCasesCount(res.data.results[0].today_cases_count);
        setTodayDeathsCount(res.data.results[0].today_deaths_count);
      });
    }
    getNetCovidDataAskBhunte();
    getNetCovidData();

    setInterval(() => {
      getNetCovidData();
    }, 5000);
  }, []);

  if (props.isLoggedInProps === false) {
    return (
      <>
        <div className="containerCenter">
          <div className="contentBlock">
            <DistrictStatPage />

            <HospitalServiceGPiechart
              testedTotal={testedTotal}
              testedPositive={testedPositive}
              testedNegative={testedNegative}
              inIsolation={inIsolation}
              quarantined={quarantined}
              rtdTested={rtdTested}
              recovered={recovered}
              deaths={deaths}
              lastUpdatedOn={lastUpdatedOn}
              // --extras
              activeCaseCount={activeCaseCount}
              casePerOneMillion={casePerOneMillion}
              criticalCount={criticalCount}
              testsPerOneMillion={testsPerOneMillion}
              deathPerOneMillion={deathPerOneMillion}
              todayCasesCount={todayCasesCount}
              todayDeathsCount={todayDeathsCount}
            />
          </div>
        </div>
      </>
    );
  } else {
    return <Redirect to="/dashboardpage" />;
  }
};

export default CovidStatus;
