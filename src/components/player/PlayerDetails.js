import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPlayerByIdApiCall } from '../../apiCalls/playerApiCalls'
import { getFormattedDate } from '../../helpers/dateHelper'

function PlayerDetails() {
    let { playerId } = useParams()
    playerId = parseInt(playerId)
    const player = getPlayerByIdApiCall(playerId)

    return (
        <main>
            <h2>Player's details</h2>
            <p>First: {player.firstName}</p>
            <p>Name: {player.lastName} </p>
            <p>Birth date: {player.birthDate} </p>
            <p>Country: {player.country} </p>

            <h2>Coaches</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Country</th>
                </tr>
                </thead>
                <tbody>
                {player.coaches.map(
                    coach =>
                        <tr key={coach.id}>
                            <td>{coach.firstName}</td>
                            <td>{coach.lastName}</td>
                            <td>{coach.country}</td>
                        </tr>
                )}
                </tbody>
            </table>

            <h2>Matches</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Birthdate</th>
                    <th>Country</th>
                </tr>
                </thead>
                <tbody>
                {player.matches.map(
                    match =>
                        <tr key={match.id}>
                            <td>{match.date}</td>
                            <td>{match.court}</td>
                            <td>{match.idWinner}</td>
                        </tr>
                )}
                </tbody>
            </table>
            <div className="section-buttons">
                <Link to="/players" className="button-back">Return</Link>
            </div>
        </main>
    )
}
export default PlayerDetails