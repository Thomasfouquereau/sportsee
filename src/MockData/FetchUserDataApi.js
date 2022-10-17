/**
 * cree un mock de l'api de récupération des donnee d'un utilisateur
 * create a mock of the api to retrieve the data of a user
 * @returns {Promise<{Average: *}>}
 */

export function getData() {
    return new Promise((resolve) => {
        resolve({ "data": { "id": 18, "userInfos": { "firstName": "Mock", "lastName": "Ratorez", "age": 34 }, "score": 0.7, "keyData": { "calorieCount": 2000, "proteinCount": 100, "carbohydrateCount": 110, "lipidCount": 220 } } })
    })
}