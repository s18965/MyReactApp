const coachesBaseUrl= 'http://localhost:3000/api/coaches'

export function getCoachesApiCall() {
    const promise = fetch(coachesBaseUrl)
    return promise;
}

export function getCoachByIdApiCall(coachId) {
    const url = `${coachesBaseUrl}/${coachId}`;
    const promise = fetch(url);
    return promise;
}