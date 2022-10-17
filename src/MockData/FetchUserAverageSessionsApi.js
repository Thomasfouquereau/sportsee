/**
 * cree un mock de l'api de récupération de Average Sessions d'un utilisateur
 * create a mock of the api to retrieve the Average Sessions of a user
 * @returns {Promise<{Average: *}>}
 */

export function fetchAverageSessionsData() {
   return new Promise((resolve) => {
        resolve({
            "data": {
                "userId": 12,
                "sessions": [
                    {
                        "day": 1,
                        "sessionLength": 30
                    },
                    {
                        "day": 2,
                        "sessionLength": 23
                    },
                    {
                        "day": 3,
                        "sessionLength": 45
                    },
                    {
                        "day": 4,
                        "sessionLength": 50
                    },
                    {
                        "day": 5,
                        "sessionLength": 28
                    },
                    {
                        "day": 6,
                        "sessionLength": 30
                    },
                    {
                        "day": 7,
                        "sessionLength": 60
                    }
                ]
            }
        })
    })
}