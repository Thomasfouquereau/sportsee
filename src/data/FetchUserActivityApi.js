/**
 * @param {number} id
 * @returns {Promise<{Average: *}>}
 */

export function fetchActivityData (id) {

    return fetch(
      `http://localhost:3000/user/${id}/activity`
    ).then((response) => response.json());
  }