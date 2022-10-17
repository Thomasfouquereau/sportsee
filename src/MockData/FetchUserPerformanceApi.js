/**
 * cree un mock de l'api de récupération des performances d'un utilisateur
 * create a mock of the api to retrieve the performances of a user
 * @returns {Promise<{Average: *}>}
 */

export function fetchUserPerformanceData() {
    return new Promise((resolve) => {
        resolve({
            "data": {
                "userId": 12,
                "kind": {
                    "1": 'cardio',
                    "2": 'energy',
                    "3": 'endurance',
                    "4": 'strength',
                    "5": 'speed',
                    "6": 'intensity'
                },
                "data": [
                    {
                        "value": 80,
                        "kind": 1
                    },
                    {
                        "value": 120,
                        "kind": 2
                    },
                    {
                        "value": 140,
                        "kind": 3
                    },
                    {
                        "value": 150,
                        "kind": 4
                    },
                    {
                        "value": 200,
                        "kind": 5
                    },
                    {
                        "value": 100,
                        "kind": 6
                    }
                ]
            }
        });
    });
}