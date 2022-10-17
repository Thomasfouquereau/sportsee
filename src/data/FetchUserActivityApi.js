/**
 * fetch les donnee de l'api
 * fetch gives them the api data 
 * @returns {Promise<{Average: *}>}
 */

export function fetchActivityData () {
    const userId = 18;
    return fetch(
      `http://localhost:3000/user/${userId}/activity`
    ).then((response) => response.json());
  }