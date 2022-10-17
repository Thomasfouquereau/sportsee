/**
 * cree un mock de l'api de récupération des activités d'un utilisateur
 * create a mock of the api to retrieve the activities of a user
 * @returns {Promise<{Average: *}>}
 */

export function fetchActivityData() {
    return new Promise((resolve) => {
            resolve({
                "data": {
                    "sessions": [
                        {
                            "day": "2020-07-01",
                            "kilogram": 90,
                            "calories": 200,
                        },
                        {
                            "day": "2020-07-02",
                            "kilogram": 90, 
                            "calories": 150,
                        },
                        {
                            "day": "2020-07-03",
                            "kilogram": 90,
                            "calories": 120,
                        },
                        {
                            "day": "2020-07-04",
                            "kilogram": 90,
                            "calories": 100,
                        },
                        {
                            "day": "2020-07-05",
                            "kilogram": 95,
                            "calories": 170,
                        },
                        {
                            "day": "2020-07-06",
                            "kilogram": 90,
                            "calories": 100,
                        },
                        {
                            "day": "2020-07-07",
                            "kilogram": 100,
                            "calories": 156,
                        }
                    ]
                }
            });
        } );
}

