import React, { useEffect, useState } from 'react';
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
import { useParams } from "react-router-dom";


function Main() {
    const [user, setUser] = useState();
    const [activity, setActivity] = useState();
    const [averageSessions, setAverageSessions] = useState();
    const [performance, setPerformance] = useState();
    const { id } = useParams();
    useEffect(() => {
        const allAPICall = Promise.all([getFormatedData(id).then((data) => setUser(data)), getActivityData(id).then((data) => setActivity(data)), getAverageSessionsData(id).then((data) => setAverageSessions(data)), getPerformanceData(id).then((data) => setPerformance(data))])
        allAPICall.catch(() => {
            alert("erreur")
        })
        // getFormatedData(id).then((data) => setUser(data));
        // getActivityData(id).then((data) => setActivity(data));
        // getAverageSessionsData(id).then((data) => setAverageSessions(data));
        // getPerformanceData(id).then((data) => setPerformance(data));
    }, [id])

    if (!user || !activity || !averageSessions || !performance) return <span className={Style.loader}></span>

    return (
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
    );
}

export default Main;