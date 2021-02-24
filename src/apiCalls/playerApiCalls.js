import { playerList, playerDetailsList } from './playerApiMockData'

export function getPlayersApiCall() {
    return playerList;
}

export function getPlayerByIdApiCall(playerId) {
    const player = playerDetailsList.find(player => player.id === playerId)
    return player;
}