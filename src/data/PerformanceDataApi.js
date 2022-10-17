import { fetchUserPerformanceData as getPerformanceFromServer  } from './FetchUserPerformanceApi';
import { fetchUserPerformanceData as getPerformanceFromMock } from '../MockData/FetchUserPerformanceApi';

const getUserPerformance =  process.env.REACT_APP_IS_MOCK_ACTIVE === "true" ? getPerformanceFromMock : getPerformanceFromServer

/**
 * recupere les données du fetch ou du mock et les formate 
 * fetch or mock data recovery and formatting 
 * @returns {Promise<{Performance: *, subject: *}>}
 */

function getPerformanceData() {
    return getUserPerformance().then((result) => ({
        Performance: result.data.data,
        subject: result.data.kind
    }));
}

export default getPerformanceData;