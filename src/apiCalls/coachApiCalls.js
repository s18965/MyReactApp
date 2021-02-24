import { coachList, coachDetailsList } from './coachApiMockData'

export function getCoachesApiCall() {
    return coachList;
}

export function getCoachByIdApiCall(coachId) {
    const coach = coachDetailsList.find(coach => coach.id === coachId)
    return coach;
}