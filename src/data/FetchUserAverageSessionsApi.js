/**
 * @param {number} id
 * @returns {Promise<{Average: *}>}
 */

export function fetchAverageSessionsData (id) {

    return fetch(
      `http://localhost:3000/user/${id}/average-sessions`
    ).then((response) => response.json());
  }