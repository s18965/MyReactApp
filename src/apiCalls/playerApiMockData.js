export const playerList = [
    {
        "id": 1,
        "firstName": "Jan",
        "lastName": "Kowalski",
        "country": "Poland",
        "birthDate": "12.02.1992",
    },
    {
        "id": 2,
        "firstName": "Adam",
        "lastName": "Zieliński",
        "country": "Poland",
        "birthDate": "13.02.1992",
    },
    {
        "id": 3,
        "firstName": "Marian",
        "lastName": "Nowak",
        "country": "Poland",
        "birthDate": "14.02.1992",
    }
]

export const playerDetailsList = [
    {
        "id": 1,
        "firstName": "Jan",
        "lastName": "Kowalski",
        "country": "Poland",
        "birthDate": "12.02.1992",
        "matches": [
            {
                "id": 1,
                "idPlayer": 1,
                "idRival": 2,
                "date": "30.06.2021",
                "scorePlayer": "1,1",
                "scoreRival": "6,6",
                "idWinner": 2,
                "court": "Stan Smith Court",
                "roundNumber": 2
            },
            {
                "id": 2,
                "idPlayer": 1,
                "idRival": 3,
                "date": "01.07.2021",
                "scorePlayer": "2,4",
                "scoreRival": "6,6",
                "idWinner": 3,
                "court": "Stan Vavrinka Court",
                "roundNumber": 7
            }
        ],
        "coaches": [
            {
                "id": 1,
                "firstName": "Jan",
                "lastName": "Kowalski",
                "country": "Poland",
            },
            {
                "id": 2,
                "firstName": "Alvaro",
                "lastName": "Negredo",
                "country": "Spain",
            }
            ]
    },
    {
        "id": 2,
        "firstName": "Adam",
        "lastName": "Zieliński",
        "country": "Poland",
        "birthDate": "13.02.1992",
        "matches": [
            {
                "id": 1,
                "idPlayer": 1,
                "idRival": 2,
                "date": "30.06.2021",
                "scorePlayer": "1,1",
                "scoreRival": "6,6",
                "idWinner": 2,
                "court": "Stan Smith Court",
                "roundNumber": 2
            }
        ],
        "coaches": [
            {
                "id": 3,
                "firstName": "Joe",
                "lastName": "Sinatra",
                "country": "USA",
            },
            {
                "id": 4,
                "firstName": "Hugo",
                "lastName": "Valera",
                "country": "Argentina",
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Marian",
        "lastName": "Nowak",
        "country": "Poland",
        "birthDate": "14.02.1992",
        "coaches": [],
        "matches": [{
            "id": 2,
            "idPlayer": 1,
            "idRival": 3,
            "date": "01.07.2021",
            "scorePlayer": "2,4",
            "scoreRival": "6,6",
            "idWinner": 3,
            "court": "Stan Vavrinka Court",
            "roundNumber": 7
        }]
    }
]