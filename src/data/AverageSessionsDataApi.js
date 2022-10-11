import { fetchAverageSessionsData } from './FetchUserAverageSessionsApi';

export default function getAverageSessionsData() {
    return fetchAverageSessionsData().then((result) => ({
        Average: result.data.sessions,
    }));
}

getAverageSessionsData().then((data) => console.log(data));