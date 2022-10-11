export function fetchUserPerformanceData () {
    const userId = 18;
    return fetch(
      `http://localhost:3000/user/${userId}/performance`
    ).then((response) => response.json());
  }