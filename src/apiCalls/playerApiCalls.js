const playersBaseUrl= 'http://localhost:3000/api/players'

export function getPlayersApiCall() {
    const promise = fetch(playersBaseUrl)
    return promise;
}

export function getPlayerByIdApiCall(playerId) {
    const url = `${playersBaseUrl}/${playerId}`;
    const promise = fetch(url);
    return promise;
}

