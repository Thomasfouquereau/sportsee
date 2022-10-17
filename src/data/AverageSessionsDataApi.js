import { fetchAverageSessionsData as getAverageSessionsFromServer} from './FetchUserAverageSessionsApi';
import { fetchAverageSessionsData as getAverageSessionsFromMock } from '../MockData/FetchUserAverageSessionsApi';

const getAverageSessions =  process.env.REACT_APP_IS_MOCK_ACTIVE === "true" ? getAverageSessionsFromMock : getAverageSessionsFromServer

/**
 * recupere les données du fetch ou du mock et les formate 
 * fetch or mock data recovery and formatting 
 * @returns {Promise<{Average: *}>}
 */

function getAverageSessionsData() {
    return getAverageSessions().then((result) => ({
        Average: result.data.sessions,
    }));
}

export default getAverageSessionsData;