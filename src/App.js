import React, { useEffect, useState } from 'react';
import NavBar from './components/nav/NavBar';
import Name from './components/name/Name';
import SimpleBarChart from './components/activite/simpleBarChart';
import SimpleLineChart from './components/duree/simpleLineChart';
import SimpleRadarChart from './components/performance/simpleRadarChart';
import PieChartWithPaddingAngle from './components/score/PieChartWithPaddingAngle';
import KeyData from './components/keyData/keyData';
import Style from './app.module.css';
import getFormatedData from "./data/UserDataApi";
import getActivityData from "./data/ActivityDataApi";
import getAverageSessionsData from "./data/AverageSessionsDataApi";
import getPerformanceData from "./data/PerformanceDataApi";

function App() {
  const [user, setUser] = useState();
  const [activity, setActivity] = useState();
  const [averageSessions, setAverageSessions] = useState();
  const [performance, setPerformance] = useState();
  useEffect(() => {
    getFormatedData().then((data) => setUser(data));
    getActivityData().then((data) => setActivity(data));
    getAverageSessionsData().then((data) => setAverageSessions(data));
    getPerformanceData().then((data) => setPerformance(data));
  }, [])
  
  if (!user && !activity && !averageSessions && !performance) return <div class={Style.ldsHourglass}></div>

  return (
    <div className="App">
      <NavBar />
      <main className={Style.mainAppContents}>
        <Name firstName={user.firstName} />
        <div className={Style.chartContainer}>
          <div className={Style.chartBarItem}>
           <SimpleBarChart activity={activity.sessionsActivity} />
          </div>
          <div className={Style.chartFlexContainer}>
            <div className={Style.chartLineItem}>
              <SimpleLineChart averageSessions={averageSessions.Average} />
            </div>
            <div className={Style.chartRadarItem}>
              <SimpleRadarChart performance={performance.Performance} subject={performance.subject} />
            </div>
            <div className={Style.chartAngleItem}>
              <PieChartWithPaddingAngle score={user.score} />
            </div>
          </div>
        </div>
        <KeyData calorieCount={user.calorieCount} proteinCount={user.proteinCount} carbohydrateCount={user.carbohydrateCount} lipidCount={user.lipidCount} />
      </main>

    </div>
  );
}

export default App;