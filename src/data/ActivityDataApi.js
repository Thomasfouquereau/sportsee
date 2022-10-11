import { fetchActivityData } from './FetchUserActivityApi';

export default function getActivityData() {
    return fetchActivityData().then((result) => ({
        sessionsActivity: result.data.sessions,
    }));
}

getActivityData().then((data) => console.log(data));