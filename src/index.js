import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react'
// import {getTodo} from './components/data/api';

// function getFormatedTodo() {
//     return getTodo().then((result) => ({
//             firstName: result.data.userInfos.firstName,
//             score: result.data.score || result.data.todayScore,
//             calorieCount: result.data.keyData.calorieCount,
//             proteinCount: result.data.keyData.proteinCount,
//             carbohydrateCount: result.data.keyData.carbohydrateCount,
//             lipidCount: result.data.keyData.lipidCount,
//     }));
// }

//getFormatedTodo().then((data) => console.log(data));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);