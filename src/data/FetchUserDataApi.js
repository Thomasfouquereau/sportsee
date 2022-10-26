/**
 * @param {number} id
 * @returns {Promise<{Average: *}>}
 */

export function getData(id) {

  return fetch(
    `http://localhost:3000/user/${id}`
  ).then((response) => response.json());
}
