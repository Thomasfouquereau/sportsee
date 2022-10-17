import { getData as getDataFromServer } from './FetchUserDataApi';
import { getData as getDataFromMock } from '../MockData/FetchUserDataApi';


const getUser =  process.env.REACT_APP_IS_MOCK_ACTIVE === "true" ? getDataFromMock : getDataFromServer

/**
 * recupere les données du fetch ou du mock et les formate 
 * fetch or mock data recovery and formatting 
 * @returns {Promise<{lipidCount: *, carbohydrateCount: *, proteinCount: *, calorieCount: *, score: *, firstName: *}>}
 */

function getFormatedData() {
    return getUser().then((result) => ({
        firstName: result.data.userInfos.firstName,
        score: result.data.score || result.data.todayScore,
        calorieCount: result.data.keyData.calorieCount,
        proteinCount: result.data.keyData.proteinCount,
        carbohydrateCount: result.data.keyData.carbohydrateCount,
        lipidCount: result.data.keyData.lipidCount,
    }));
}

export default getFormatedData;