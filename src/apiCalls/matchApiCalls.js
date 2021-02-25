const matchesBaseUrl= 'http://localhost:3000/api/matches'

export function getMatchesApiCall() {
    const promise = fetch(matchesBaseUrl)
    return promise;
}

export function getMatchByIdApiCall(matchId) {
    const url = `${matchesBaseUrl}/${matchId}`;
    const promise = fetch(url);
    return promise;
}