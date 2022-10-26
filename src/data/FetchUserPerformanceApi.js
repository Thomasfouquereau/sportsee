/**
 * @param {number} id
 * @returns {Promise<{Average: *}>}
 */

export function fetchUserPerformanceData (id) {

    return fetch(
      `http://localhost:3000/user/${id}/performance`
    ).then((response) => response.json());
  }