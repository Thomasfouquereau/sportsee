import { getData } from './FetchUserDataApi';

console.log(getData)

function getFormatedData() {
    return getData().then((result) => ({
        firstName: result.data.userInfos.firstName,
        score: result.data.score || result.data.todayScore,
        calorieCount: result.data.keyData.calorieCount,
        proteinCount: result.data.keyData.proteinCount,
        carbohydrateCount: result.data.keyData.carbohydrateCount,
        lipidCount: result.data.keyData.lipidCount,
    }));
}

getFormatedData().then((data) => console.log(data));

export default getFormatedData;