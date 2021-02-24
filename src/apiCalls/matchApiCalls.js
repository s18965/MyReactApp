import { matchList, matchDetailsList } from './matchApiMockData'

export function getMatchesApiCall() {
    return matchList;
}

export function getMatchByIdApiCall(matchId) {
    const match = matchDetailsList.find(match => match.id === matchId)
    return match;
}