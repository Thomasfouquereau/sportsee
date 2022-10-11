import { fetchUserPerformanceData } from './FetchUserPerformanceApi';

export default function getPerformanceData() {
    return fetchUserPerformanceData().then((result) => ({
        Performance: result.data.data,
        subject: result.data.kind,
    }));
}

getPerformanceData().then((data) => console.log(data));