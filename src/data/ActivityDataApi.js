import { fetchActivityData as getActivityfromServer } from './FetchUserActivityApi';
import { fetchActivityData as getActivityfromMock } from '../MockData/FetchUserActivityApi';

const fetchActivity = process.env.REACT_APP_IS_MOCK_ACTIVE === "true" ? getActivityfromMock : getActivityfromServer

/**
 *  recupere les données du fetch ou du mock et les formate 
 *  fetch or mock data recovery and formatting 
 * @returns {Promise<{sessionsActivity: *}>}
 */

function getActivityData(id) {
    return fetchActivity(id).then((result) => ({
        sessionsActivity: result.data.sessions
    }));
}

export default getActivityData;